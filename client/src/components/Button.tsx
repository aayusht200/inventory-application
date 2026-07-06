import type React from "react";

interface ButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  content: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, className, content, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-button hover:bg-button-hover text-button-text w-fit cursor-pointer rounded p-1 pr-6 pl-6 font-bold shadow hover:scale-105 ${className ?? ""}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export { Button };
