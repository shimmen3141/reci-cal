type PageHeaderProps = { title?: string };

export const PageHeader = ({ title = "ReciCal" }: PageHeaderProps) => {
  return <div>{title}</div>;
};
