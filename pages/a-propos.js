import Layout from "../components/layout";
import Hero from "../components/hero";
import { getFile } from "../lib/file";
import { getAllFilesData } from "../lib/folder";
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
          image={pageData.image}
          intro={pageData.subheading}
        >
          <h1 className="mb-6 w-full md:w-1/2 text-white">{pageData.heading}</h1>
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
  const pageData = await getFile("pages", "a-propos");
  const allSupportersData = await getAllFilesData("partenaires");

  return {
    props: {
      pageData,
      allSupportersData
    },
  };
}
