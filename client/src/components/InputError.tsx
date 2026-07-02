interface InputErrorProps {
    message: string;
}
const InputError = ({ message }: InputErrorProps) => {
    return (
        <>
            <span className="border shadow rounded  pr-4 pl-4 bg-blue-50 text text-red-400 font-medium w-fit">
                {message}
            </span>
        </>
    );
};

export { InputError };
