import React from 'react';
import css from './Row.module.css';

const Row = ({ className, children, ...props }) => (
  <div
    className={`${css.row} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Row;
