import Head from "next/head" ;
import Link from "next/link" ;
import { useEffect } from "react" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts" ; 
import { getPage } from "../lib/pages" ;
import utilsStyles from "../styles/utils.module.css" ;
import settings from "../config.json" ;

export default function Home({ allPostsData, pageData }) {

  console.log(pageData);

  return (
    <Layout 
      url="/"
      title={pageData.title}
    >
      <div className={utilsStyles.container}>
        <h1>{pageData.heading}</h1>
        <p>{pageData.subheading}</p>
        <ul>
          {allPostsData.map(({id, date, title}) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>              
                  <h2>{title}</h2>
                  <Date dateString={date} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const pageData = await getPage("/home");
  return {
    props: {
      allPostsData,
      pageData
    }
  }
}