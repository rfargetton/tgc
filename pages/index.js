  import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import RouteList from "../components/route-list";
import InfoCard from "../components/info-card";

export default function Home({ allRoutesData, pageData }) {
  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero 
          image={pageData.image}
          intro={pageData.subheading}
          bgColor="feuillage"
        >
          <h1 className="mb-6 w-full md:w-1/2 ">{pageData.heading}</h1>
          <InfoCard date={pageData.date} edition={pageData.edition} location={pageData.location} />
        </Hero>

        <RouteList routes={allRoutesData}>
          <h2 className="bg-automne px-4 py-2 inline shadow-lg">Les parcours</h2>
        </RouteList>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allRoutesData = await getAllFilesData("parcours");
  const pageData = await getFile("pages", "home");
  return {
    props: {
      allRoutesData,
      pageData,
    },
  };
}
