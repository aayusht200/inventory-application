interface ButtonProps {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    content: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, className, content, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`shadow rounded pr-6 pl-6 p-1 bg-blue-50 w-fit font-bold text-blue-800 border-blue-950 hover:scale-105 cursor-pointer ${className ?? ''}`}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export { Button };
