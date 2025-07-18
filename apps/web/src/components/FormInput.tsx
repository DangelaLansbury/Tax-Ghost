import React from 'react';
import formStyles from '../css/Form.module.css';

interface FormInputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
}

function FormInput({ label, type = 'text', value, onChange, placeholder, className, disabled, readonly, onBlur, onFocus, onKeyDown, onKeyUp, onKeyPress }: FormInputProps) {
  return (
    <div className={`${formStyles.formGroup} ${className}`}>
      {label && <label className={formStyles.formLabel}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={formStyles.formInput}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        readOnly={readonly}
      />
    </div>
  );
}

export default FormInput;
