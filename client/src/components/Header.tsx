import type React from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
interface HeaderProps {
  className?: string;
  title: string;
  rightContent?: React.ReactNode;
}
const Header = ({ className, title, rightContent }: HeaderProps) => {
  const { cart } = useContext(CartContext);
  const count = Object.entries(cart).reduce((total, [, qty]) => total + qty, 0);

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
        <div className="right col-span-1 flex gap-5 justify-self-end">
          <div className="cart relative">
            <ShoppingCartIcon className="icon" />
            {count > 0 && (
              <span className="bg-primary absolute -top-1 -right-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full text-xs text-white">
                {count}
              </span>
            )}
          </div>
          {rightContent}
        </div>
      )}
    </div>
  );
};

export { Header };
