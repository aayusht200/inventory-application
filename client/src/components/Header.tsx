import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface HeaderProps {
  className?: string;
  title: string;
  rightContent?: React.ReactNode;
}
const Header = ({ className, title, rightContent }: HeaderProps) => {
  const navigate = useNavigate();
  const loaction = useLocation();

  return (
    <div
      className={`header ${className} text-heading text-shadow-heading grid grid-cols-2 pb-10`}
    >
      <div className="left col-span-1">
        {loaction.pathname === "/" ? (
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
            {title}
          </h1>
        ) : (
          <h1
            className="cursor-pointer text-2xl font-extrabold md:text-3xl lg:text-4xl"
            onClick={() => {
              navigate("/");
            }}
          >
            {title}
          </h1>
        )}
      </div>
      {rightContent && (
        <div className="right col-span-1 flex gap-5 justify-self-end">
          {rightContent}
        </div>
      )}
    </div>
  );
};

export { Header };
