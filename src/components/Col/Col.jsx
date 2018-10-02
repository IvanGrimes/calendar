import React from 'react';
import css from './Col.module.css';

const Col = ({ className, children, ...props }) => (
  <div
    className={`${css.col} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Col;
