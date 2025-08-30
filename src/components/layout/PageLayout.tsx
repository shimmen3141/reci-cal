import { PageHeader } from "./PageHeader/PageHeader";
import { PageFooter } from "./PageFooter/PageFooter";
import { PageContentsArea } from "./PageContentsArea/PageContentsArea";

type Props = { children: React.ReactNode };

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="pageLayout">
      <PageHeader />
      <PageContentsArea>{children}</PageContentsArea>
      <PageFooter />
    </div>
  );
};