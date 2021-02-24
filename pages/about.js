import Layout from "../components/layout";
import { getFile } from "../lib/file" ;
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
  const pageData = await getFile("pages", "about");

  return {
    props: {
      pageData
    }
  }
}