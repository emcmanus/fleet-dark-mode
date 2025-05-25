import React from "react";
import classnames from "classnames";

import Icon from "components/Icon";

const baseClass = "dark-mode-toggle";

interface IDarkModeToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const DarkModeToggle = ({
  value,
  onChange,
  disabled = false,
}: IDarkModeToggleProps): JSX.Element => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!value);
    }
  };

  const toggleClasses = classnames(baseClass, {
    [`${baseClass}--on`]: value,
    [`${baseClass}--disabled`]: disabled,
  });

  return (
    <div className={`${baseClass}__wrapper`}>
      <div className={`${baseClass}__content`}>
        <Icon name="lightbulb" />
        <span className={`${baseClass}__label`}>Dark mode</span>
      </div>
      <button
        type="button"
        className={toggleClasses}
        onClick={handleToggle}
        disabled={disabled}
        aria-label={`Turn ${value ? "off" : "on"} dark mode`}
        role="switch"
        aria-checked={value}
      >
        <span className={`${baseClass}__slider`}>
          <span className={`${baseClass}__thumb`} />
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;