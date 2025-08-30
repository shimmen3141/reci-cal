type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
