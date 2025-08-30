import { PageHeader } from "./PageHeader/PageHeader";
import { PageFooter } from "./PageFooter/PageFooter";
import { PageContentsArea } from "./PageContentsArea/PageContentsArea";
import styles from './PageLayout.module.scss';

type Props = { children: React.ReactNode };

export const PageLayout = ({ children }: Props) => {
  return (
    <div className={styles.pageLayout}>
      <PageHeader />
      <PageContentsArea>{children}</PageContentsArea>
      <PageFooter />
    </div>
  );
};