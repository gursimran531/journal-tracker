import React from 'react';

export const Select = ({ value, onValueChange, children, className }) => {
  return (
    <select value={value} onChange={(e) => onValueChange(e.target.value)} className={`p-2 border rounded-md w-full ${className}`}>
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const SelectValue = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const SelectContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
