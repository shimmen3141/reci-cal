export type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
