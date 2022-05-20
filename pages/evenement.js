import Layout from "../components/layout";
import Hero from "../components/hero";
import ContentBlock from "../components/content-block";
import RouteList from "../components/route-list";
import Infos from "../components/infos";
import FeaturesList from "../components/features-list";
import PricesList from "../components/prices-list";
import PageNav from "../components/page-nav";
import settings from "../config.json";
import { getFileDataWithPlaiceholder, getAllFilesDataWithPlaiceholder } from "../lib/folder";

export default function About({ pageData, allRoutesData }) {
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
          bgColor="asphalte"
          pageName="événement"
        >
          <h1 className="mb-6 w-full lg:w-1/2 text-white">{pageData.heading}</h1>
          <PageNav 
            links={[
              {title:"L'esprit TGC", destination:"esprit"},
              {title:"Les parcours", destination:"parcours"},
              {title:"Infos pratiques", destination:"infos"}
            ]} 
          />
        </Hero>   

        <ContentBlock blocks={pageData.concept_blocks} />     

        <RouteList routes={allRoutesData}>
          <h2 className="text-center mt-6 mb-12"><span className="section-title bg-automne">Les parcours</span></h2>
        </RouteList>

        <Infos>
          <div>
            <h3 className="text-automne">Tarifs d’inscription</h3>
          </div>
          <PricesList description="Pour chacun des parcours, plusieurs options s’offrent à toi :" options={pageData.options} />
          <div>
            <h3 className="text-automne">Que comprend mon inscription ?</h3>
          </div>
          <FeaturesList  features={pageData.basic_features} />
        </Infos>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getFileDataWithPlaiceholder("pages", "evenement");
  const allRoutesData = await getAllFilesDataWithPlaiceholder("parcours");

  return {
    props: {
      pageData,
      allRoutesData
    },
  };
}