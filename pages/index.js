import Head from "next/head" ;
import Link from "next/link" ;
import { useEffect } from "react" ;
import settings from "../config.json" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts" ; 
import utilsStyles from "../styles/utils.module.css" ;

export default function Home({ allPostsData }) {

  console.log(settings);

  return (
    <Layout url="/">
      <div className={utilsStyles.container}>
        <h1>{settings.site_name}</h1>
        <p>{settings.description}</p>
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
  return {
    props: {
      allPostsData
    }
  }
}