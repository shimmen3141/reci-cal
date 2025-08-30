type Props = {
  children: React.ReactNode;
};

export const PageContentsArea = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
