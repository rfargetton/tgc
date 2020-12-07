import Head from "next/head" ;
import Link from "next/link" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts" ; 

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <h1>Hello Next</h1>
      <div>
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