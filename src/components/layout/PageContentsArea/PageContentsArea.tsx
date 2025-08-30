import styles from './PageContentsArea.module.scss';

type Props = {
  children: React.ReactNode;
};

export const PageContentsArea = ({ children }: Props) => {
  return (
    <div className={styles.pageContentsArea}>
      <div className={styles.pageContents}>{children}</div>
    </div>
  );
};
