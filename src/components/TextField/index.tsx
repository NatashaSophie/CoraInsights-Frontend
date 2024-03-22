import React, { CSSProperties, useEffect, useMemo, useState } from 'react';

import cs from 'classnames';
import { useField } from 'formik';

import Icon, { IconsNames } from '../Icon';
import styles from './TextField.module.css';

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  rightIcon?: IconsNames;
  maskFunction?: (value: string) => string;
  inputClassName?: CSSProperties;
}

const TextField: React.FC<ITextField> = ({
  label,
  maskFunction,
  rightIcon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasAutoFill, setHasAutoFill] = useState(false);
  const [field, meta, helpers] = useField(props.name);

  const activeLabel = useMemo(
    () => hasAutoFill || isFocused || field.value,
    [isFocused, field, hasAutoFill]
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
          [styles.hasRightIcon!]: !!rightIcon,
        })}
      >
        <label
          htmlFor={props.name}
          className={`${styles.label} ${activeLabel ? styles.labelActive : ''}`}
        >
          {label}
        </label>
        <input
          {...field}
          {...props}
          id={props.name}
          type={props.type || 'text'}
          className={styles.input}
          onChange={(event) => {
            if (maskFunction) {
              helpers.setValue(maskFunction(event.currentTarget.value));
            } else {
              field.onChange(event);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            field.onBlur(e);
          }}
        />
        {rightIcon && <Icon className={styles.rightIcon} name={rightIcon} />}
      </div>
      {meta.error && meta.touched && (
        <p className={styles.errorText}>{meta.error}</p>
      )}
    </div>
  );
};

export default TextField;
