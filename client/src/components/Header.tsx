interface HeaderProps {
  className?: string;
  title: string;
}
const Header = ({ className, title }: HeaderProps) => {
  return (
    <div className={`header ${className} text-heading text-shadow-heading`}>
      <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export { Header };
