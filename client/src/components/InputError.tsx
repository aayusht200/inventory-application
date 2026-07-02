interface InputErrorProps {
  message: string;
  className?: string;
}
const InputError = ({ message, className }: InputErrorProps) => {
  return (
    <>
      <span
        className={`text-danger bg-danger-bg border-danger w-fit rounded-lg p-1 pr-4 pl-4 font-medium shadow ${className ?? ""}`}
      >
        {message}
      </span>
    </>
  );
};

export { InputError };
