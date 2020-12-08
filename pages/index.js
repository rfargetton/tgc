import Head from "next/head" ;
import Link from "next/link" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts" ; 
import utilsStyles from "../styles/utils.module.css" ;

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className={utilsStyles.container}>
        <h1>NextJs and Netlify CMS Starter Blog</h1>
        <ul>
          {allPostsData.map(({id, date, title}) => (
            <li>
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}