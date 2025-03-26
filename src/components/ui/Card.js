import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`shadow-lg p-4 rounded-lg ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
