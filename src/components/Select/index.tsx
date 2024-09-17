import React, { useEffect, useMemo, useState } from 'react';

import cs from 'classnames';
import { useField } from 'formik';

import styles from './Select.module.css';
import Icon from '../Icon';

interface ISelect extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { name: string; value: string }[];
}

const Select: React.FC<ISelect> = ({ label, options, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasAutoFill, setHasAutoFill] = useState(false);
  const [field, meta] = useField(props.name);

  const activeLabel = useMemo(
    () => hasAutoFill || field.value,
    [field, hasAutoFill]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const input = document.getElementById(props.name);
      setHasAutoFill(!!input?.matches(':-webkit-autofill'));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [props.name]);

  return (
    <div>
      <div
        className={cs(styles.inputContainer, {
          [styles.hasError!]: meta.error && meta.touched,
          [styles.inputContainerFocused!]: isFocused,
        })}
      >
        <label
          htmlFor={props.name}
          className={`${styles.label} ${activeLabel ? styles.labelActive : ''}`}
        >
          {label}
        </label>
        <select
          {...field}
          {...props}
          id={props.name}
          className={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            field.onBlur(e);
          }}
        >
          <option disabled />
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <Icon className={styles.rightIcon} name="chevronDown" />
      </div>
      {meta.error && meta.touched && (
        <p className={styles.errorText}>{meta.error}</p>
      )}
    </div>
  );
};

export default Select;
