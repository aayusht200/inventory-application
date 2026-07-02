interface InputProps {
    label: string;
    id: string;
    type: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    className?: string;
    placeholder?: string;
}

const Input = ({ label, id, type, onChange, value, className, placeholder }: InputProps) => {
    return (
        <>
            <label htmlFor={id} className="font-bold">
                {label}
            </label>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                name={id}
                id={id}
                className={`shadow rounded p-1 bg-blue-50 md:w-100 w-75 lg:w-125 focus:ring-blue-800 ${className ?? ''}`}
                onChange={onChange}
            />
        </>
    );
};

export { Input };
