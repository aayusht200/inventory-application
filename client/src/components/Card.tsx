import type { ReactNode } from 'react';

interface CardProps {
    header?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
}

const Card = ({ header, children, footer, className }: CardProps) => {
    return (
        <div className={`card flex flex-col bg-blue-200 h-dvh w-dvw p-5 gap-20 ${className ?? ''}`}>
            {header && <div className="">{header} </div>}
            <div className="flex justify-center items-start h-full">{children}</div>
            {footer && <div className="">{footer} </div>}
        </div>
    );
};

export { Card };
