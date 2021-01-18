import Link from "next/link" ;

import Date from "../components/date" ;
import Layout from "../components/layout";
import { getPage } from "../lib/pages" ;
import utilsStyles from "../styles/utils.module.css" ;

export default function About({ pageData }){

  console.log(pageData)

  return (
    <Layout
      url={"/about"}
      title={pageData.title}
    >
      <div className={utilsStyles.container}>
        <h1>{pageData.heading}</h1>
        <p>{pageData.subheading}</p>
      </div>

    </Layout>
  )
}

export async function getStaticProps(){
  const pageData = await getPage("/about");

  return {
    props: {
      pageData
    }
  }
}