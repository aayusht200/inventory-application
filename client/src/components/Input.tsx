interface InputProps {
  label: string;
  id: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  className?: string;
  placeholder?: string;
}

const Input = ({
  label,
  id,
  type,
  onChange,
  value,
  className,
  placeholder,
}: InputProps) => {
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
        className={`text-input-text placeholder:text-text-muted focus:text-input-focus bg-input border-input-border w-75 rounded border p-1 shadow focus:outline-none md:w-100 lg:w-125 ${className ?? ""}`}
        onChange={onChange}
      />
    </>
  );
};

export { Input };
