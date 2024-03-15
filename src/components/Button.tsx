import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: "SUCCESS" | "ERROR";
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color,
  type = "button",
}) => {
  const baseStyles =
    "w-45 h-11 rounded-xl px-4 py-2 flex items-center justify-center mt-3";

  const colorStyles =
    color === "ERROR"
      ? "bg-rose-200 text-rose-800 hover:text-rose-500 hover:bg-rose-300"
      : "bg-transparent text-green-700 border-green-700 border-[1px] hover:bg-green-300 hover:text-green-900";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${colorStyles}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
