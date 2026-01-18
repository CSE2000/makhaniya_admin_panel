import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default Input;
