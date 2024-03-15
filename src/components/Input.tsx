import React from "react";

interface InputProps {
  type: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  title: string;
  min?: string;
  step?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  title,
  min,
  step,
  placeholder,
}) => {
  return (
    <>
      <label>{title}</label>
      <input
        className="p-3 w-full border-[1px] border-current rounded-xl"
        type={type}
        value={value}
        onChange={(e) =>
          onChange(
            type === "number" ? parseFloat(e.target.value) || 0 : e.target.value
          )
        }
        min={type === "number" ? min : undefined}
        step={type === "number" ? step : undefined}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
