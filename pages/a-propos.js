import Layout from "../components/layout";
import Hero from "../components/hero";
import { getFile } from "../lib/file";
import { getAllFilesData } from "../lib/folder";
import Supporters from "../components/supporters-list";
import Team from "../components/team";
import Press from "../components/press";

export default function About({ pageData, allSupportersData }) {

  console.log(pageData);
  
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

        <Team team={pageData.team} />

        <Press articles={pageData.press} />

        <Supporters supporters={allSupportersData} />   

      </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getFile("pages", "a-propos");
  const allSupportersData = await getAllFilesData("partenaires");

  return {
    props: {
      pageData,
      allSupportersData
    },
  };
}
