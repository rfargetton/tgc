import Layout from "../components/layout";
import Hero from "../components/hero";
import { getFile } from "../lib/file";

export default function About({ pageData }) {
  return (
    <Layout 
      url="/about" 
      title={pageData.title}
    >
      <div>
        <Hero 
          image={pageData.image}
          intro={pageData.subheading}
        >
          <h1 className="mb-6 w-full md:w-1/2 ">{pageData.heading}</h1>
        </Hero>        
      </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getFile("pages", "a-propos");

  return {
    props: {
      pageData,
    },
  };
}
