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
      className={`page bg-card text-text flex min-h-dvh flex-col p-5 ${className ?? ""}`}
    >
      {header}

      <main className="flex min-h-0 flex-1 justify-center">{children}</main>

      {footer}
    </div>
  );
};

export { Page };
