import LinkHeader from '../components/LinkHeader';
import Head from 'next/head';
import IdSearch from '../components/IdSearch';
import styles from '../components/Page.module.css';

function IdPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by ID</title>
      </Head>
      <LinkHeader />
      <IdSearch />
    </div>
  );
}

export default IdPage;
