# Dark Mode Implementation for Fleet UI

## Features Implemented

✅ **User Settings Interface**: Added `dark_mode: boolean` to `IUserSettings`

✅ **Theme Context**: Created `ThemeProvider` that:
- Manages dark mode state
- Persists preference to localStorage
- Sets `data-theme` attribute on document element

✅ **DarkModeToggle Component**: 
- Accessible toggle switch with keyboard navigation
- Visual indicator (lightbulb icon)
- Hover and focus states
- Disabled state support

✅ **CSS Theme Variables**: Created comprehensive CSS custom properties for:
- Background colors (primary, secondary, tertiary)
- Text colors (primary, secondary, tertiary)  
- Border colors
- Surface colors
- Interactive colors
- Status colors (success, warning, error, info)

✅ **User Settings Form**: Updated to include dark mode toggle

✅ **Theme Application**: 
- Applied to document root via `data-theme` attribute
- Global styles updated to use CSS custom properties
- Smooth transitions between light/dark modes

## How to Test

1. **Start the development server:**
   ```bash
   make serve
   ```

2. **Navigate to Account Settings:**
   - Go to `/account` page
   - Look for the "Dark mode" toggle in the user settings form

3. **Toggle Dark Mode:**
   - Click the toggle to switch between light and dark themes
   - Changes are applied immediately
   - Preference is saved to localStorage

4. **Test Storybook (optional):**
   ```bash
   yarn storybook
   ```
   - Find "Components/FormFields/DarkModeToggle" in the sidebar

## Integration Points

- **Local Storage**: Dark mode preference saved as `FLEET::dark_mode`
- **User Settings**: Will be saved to user profile when form is submitted
- **Theme Context**: Available throughout the app via `useTheme()` hook
- **CSS Variables**: All components can use theme-aware styling

## Theme Variables Available

```scss
// Background colors
--color-bg-primary
--color-bg-secondary  
--color-bg-tertiary

// Text colors
--color-text-primary
--color-text-secondary
--color-text-tertiary

// Interactive colors
--color-interactive-primary
--color-interactive-primary-hover
--color-interactive-primary-active

// Status colors (unchanged in dark mode)
--color-status-success
--color-status-warning
--color-status-error
--color-status-info
```

## Usage in Components

```scss
.my-component {
  background-color: var(--color-bg-primary, #{$core-fleet-white});
  color: var(--color-text-primary, #{$core-fleet-black});
  border: 1px solid var(--color-border-primary, #{$ui-fleet-black-10});
}
```

Or use utility classes:
```jsx
<div className="theme-bg-primary theme-text-primary">
  Content that adapts to theme
</div>
```