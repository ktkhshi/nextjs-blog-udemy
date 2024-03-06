import Head from "next/head";
import Image from "next/image";
import { Inter, Stint_Ultra_Expanded } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyle from "/src/styles/utils.module.css"
import { getPostsData } from "../../lib/post";

const inter = Inter({ subsets: ["latin"] });

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, data, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    }
  };
}

// // SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          私は、Next.jsを習得しました/好きなフレームワークはNext.jsです。
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`}
                className={styles.thumbnailImage}></img>
              </Link>
              <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
              </Link>
              <br/>
              <small className={utilStyle.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
