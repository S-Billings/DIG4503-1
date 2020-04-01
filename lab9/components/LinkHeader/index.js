import Link from 'next/link';
import styles from './LinkHeader.module.css';

function LinkHeader() {
  return (
    <div className={styles.header}>
      <Link href="/id">
        <a className={styles.navlink}>ID</a>
      </Link>
      <Link href="/name">
        <a className={styles.navlink}>Name</a>
      </Link>
      <Link href="/type">
        <a className={styles.navlink}>Type</a>
      </Link>
    </div>
  );
}

export default LinkHeader;
