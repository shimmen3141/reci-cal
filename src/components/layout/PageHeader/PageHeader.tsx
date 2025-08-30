import styles from './PageHeader.module.scss';

type PageHeaderProps = { title?: string };

export const PageHeader = ({ title = "ReciCal" }: PageHeaderProps) => {
  return (
    <div className={styles.appHeader}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
