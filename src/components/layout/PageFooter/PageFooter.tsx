type PageFooterProps = { text?: string };

export const PageFooter = ({ text = "" }: PageFooterProps) => {
  return <div>{text}</div>;
};
