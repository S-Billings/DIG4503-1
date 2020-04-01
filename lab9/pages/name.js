import LinkHeader from '../components/LinkHeader';
import Head from 'next/head';
import NameSearch from '../components/NameSearch';
import styles from '../components/Page.module.css';

function NamePage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by Name</title>
      </Head>
      <LinkHeader />
      <NameSearch />
    </div>
  );
}

export default NamePage;
