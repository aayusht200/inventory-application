import type { ReactNode } from "react";

interface CardProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Card = ({ header, children, footer, className }: CardProps) => {
  return (
    <div
      className={`card bg-card text-text flex h-dvh w-dvw flex-col gap-20 p-5 ${className ?? ""}`}
    >
      {header && <div className="">{header} </div>}
      <div className="flex h-full items-start justify-center">{children}</div>
      {footer && <div className="">{footer} </div>}
    </div>
  );
};

export { Card };
