import { PageHeader } from "./PageHeader/PageHeader";
import { PageFooter } from "./PageFooter/PageFooter";
import { PageContainer } from "./PageContainer/PageContainer";

type Props = { children: React.ReactNode };

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="pageLayout">
      <PageHeader />
      <PageContainer>{children}</PageContainer>
      <PageFooter />
    </div>
  );
};