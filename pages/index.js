  import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import RouteList from "../components/route-list";

export default function Home({ allRoutesData, pageData }) {
  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero 
          image={pageData.image}
          intro={pageData.subheading}
        >
          <h1>{pageData.heading}</h1>
        </Hero>

        <RouteList routes={allRoutesData}>
          <h2 className="bg-automne px-4 py-2 inline">Les parcours</h2>
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
