/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ className, children, ...props }) => (
  <button
    className={`${css.button} ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
