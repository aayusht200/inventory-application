import type { ReactNode } from "react";

interface PageProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Page = ({ header, children, footer, className }: PageProps) => {
  return (
    <div
      className={`page bg-card text-text h-vh flex w-vw flex-col gap-20 p-5 ${className ?? ""}`}
    >
      {header && <div className="">{header} </div>}
      <div className="flex h-full items-start justify-center">{children}</div>
      {footer && <div className="">{footer} </div>}
    </div>
  );
};

export { Page };
