import { Card } from "./Card";

interface ErrorPageProps {
  code: number;
  title: string;
}

const ErrorPage = ({ code, title }: ErrorPageProps) => {
  return (
    <Card>
      <h1>{code}</h1>
      <h2>{title}</h2>
    </Card>
  );
};

export { ErrorPage };
