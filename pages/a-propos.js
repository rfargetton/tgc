import Layout from "../components/layout";
import Hero from "../components/hero";
import { getAllFilesData, getFileDataWithPlaiceholder } from "../lib/folder";
import Supporters from "../components/supporters-list";
import Team from "../components/team";
import Press from "../components/press";
import PageNav from "../components/page-nav";
import settings from "../config.json";

export default function About({ pageData, allSupportersData }) {
  
  return (
    <Layout 
      url="/about" 
      title={`${pageData.title} • ${settings.site_name}`}
      image={pageData.image}
    >
      <div>
        <Hero 
          image={pageData.imageBlur}
          intro={pageData.subheading}
          pageName="à propos"
        >
          <h1 className="mb-6 w-full lg:w-1/2 text-white">{pageData.heading}</h1>
          <PageNav 
            links={[
              {title:"L'équipe TGC", destination:"equipe"},
              {title:"Presse", destination:"presse"},
              {title:"Nos partenaires", destination:"partenaires"}
            ]} 
          />
        </Hero>

        <Team team={pageData.team} />

        <Press articles={pageData.press} />

        <Supporters supporters={allSupportersData} />   

      </div>

    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getFileDataWithPlaiceholder("pages", "a-propos");
  const allSupportersData = await getAllFilesData("partenaires");

  return {
    props: {
      pageData,
      allSupportersData
    },
  };
}
