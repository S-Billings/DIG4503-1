import LinkHeader from '../components/LinkHeader';
import Head from 'next/head';
import TypeSearch from '../components/TypeSearch';
import styles from '../components/Page.module.css';

function TypePage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by Type</title>
      </Head>
      <LinkHeader />
      <TypeSearch />
    </div>
  );
}

export default TypePage;
