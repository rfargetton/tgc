import Layout from "../components/layout";
import { getFile } from "../lib/file";

export default function About({ pageData }) {
  return (
    <Layout url={"/about"} title={pageData.title}>
      <div>
        <h1>{pageData.heading}</h1>
        <p>{pageData.subheading}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getFile("pages", "about");

  return {
    props: {
      pageData,
    },
  };
}
