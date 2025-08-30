import styles from './PageFooter.module.scss';

type PageFooterProps = { text?: string };

export const PageFooter = ({ text = "" }: PageFooterProps) => {
  return <div className={styles.pageFooter}>{text}</div>;
};
