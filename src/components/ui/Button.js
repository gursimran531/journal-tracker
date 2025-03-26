// src/components/ui/Button.js
import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export { Button }; // Ensure the Button is exported

