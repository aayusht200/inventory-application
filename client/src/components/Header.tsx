interface HeaderProps {
    className?: string;
    title: string;
}
const Header = ({ className, title }: HeaderProps) => {
    return (
        <div className={`header ${className}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold ">{title}</h1>
        </div>
    );
};

export { Header };
