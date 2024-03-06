import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "/src/styles/utils.module.css"
import Link from "next/link";

const name = "dkmorimoto";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.icon"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.jpg" 
            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}>
            </img>
          </>
        ) : (
          <>
            <img src="/images/profile.jpg" 
            className={`${utilStyles.borderCircle}`}>
            </img>
          </>
        )}
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;