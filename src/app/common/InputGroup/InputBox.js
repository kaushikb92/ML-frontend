import React from 'react';
import classnames from 'classnames';
import './InputBox.css';

export const InputBox = (props) => {
    let {
           name,
           label,
           type,
           value,
           placeholder,
           onChange,
           required,
           className,
           checked,
           min, max,
           minLength, maxLength,
        } = props;

    return (
        <div className='form-group'>
            <div>
            {label && <label htmlFor={name}>{label}</label>}
                <input type={type}
                    required={required}
                    value={value}
                    checked={checked}
                    name={name}
                    className={classnames('form-control', className)}
                    placeholder={placeholder}
                    onChange={onChange} />
            </div>
        </div>
    );
  };
