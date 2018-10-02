import React from 'react';
import css from './Input.module.css';

const Input = ({ className, ...props }) => (
  <input
    className={`${css.input} ${className}`}
    {...props}
  />
);

export default Input;
