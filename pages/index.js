import Head from "next/head" ;
import Link from "next/link" ;
import { useEffect } from "react" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts" ; 
import { getSettings } from "../lib/settings" ;
import utilsStyles from "../styles/utils.module.css" ;

export default function Home({ allPostsData, generalSettings }) {

  console.log(generalSettings);

  return (
    <Layout settings={generalSettings}>
      <div className={utilsStyles.container}>
        <h1>{generalSettings.siteName}</h1>
        <p>{generalSettings.description}</p>
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
  const generalSettings = await getSettings("general");
  return {
    props: {
      allPostsData,
      generalSettings
    }
  }
}