import { Page } from "./Page";

interface ErrorPageProps {
  code: number;
  title: string;
}

const ErrorPage = ({ code, title }: ErrorPageProps) => {
  return (
    <Page>
      <h1>{code}</h1>
      <h2>{title}</h2>
    </Page>
  );
};

export { ErrorPage };
