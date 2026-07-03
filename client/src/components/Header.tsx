import type React from "react";

interface HeaderProps {
  className?: string;
  title: string;
  rightContent?: React.ReactNode;
}
const Header = ({ className, title, rightContent }: HeaderProps) => {
  return (
    <div
      className={`header ${className} text-heading text-shadow-heading grid grid-cols-2`}
    >
      <div className="left col-span-1">
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>
      {rightContent && (
        <div className="right col-span-1 justify-self-end">{rightContent}</div>
      )}
    </div>
  );
};

export { Header };
