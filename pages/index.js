import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import RouteList from "../components/route-list";
import InfoCard from "../components/info-card";
import Gallery from "../components/gallery";
import InstagramFeed from "../components/instagram-feed";
import Supporters from "../components/supporters-list";
import settings from "../config.json";

export default function Home({ allRoutesData, allSupportersData, pageData }) {


  return (
    <Layout 
      url="/" 
      title={`${settings.site_name} • ${pageData.heading}`}
      image={pageData.image}
    >
      <div>
        <Hero 
          image={pageData.image}
          intro={pageData.subheading}
          pageName="accueil"
        >
          <h1 className="mb-6 w-full lg:w-1/2 text-white">{pageData.heading}</h1>
          <InfoCard />
        </Hero>

        <RouteList routes={allRoutesData}>
          <h2 className="text-center"><span className="section-title bg-automne">Les parcours</span></h2>
        </RouteList>

        <Gallery images={pageData.gallery} />

        <Supporters supporters={allSupportersData} />

      </div>
    </Layout>
  );
}


export async function getStaticProps() {

  // let posts = []

  // const client = new Instagram({
  //   username: process.env.IG_USERNAME,
  //   password: process.env.IG_PASSWORD
  // })

  // try {
  //   // attempt to log in to Instagram
  //   await client.login();
  //   console.log("success login to instagram");
  //   const instagram = await client.getPhotosByUsername({
  //     username: settings.instagram_account,
  //   })
  //   if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
  //     // if we receive timeline data back
  //     //  update the posts to be equal
  //     // to the edges that were returned from the instagram API response
  //     posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
  //   }
  // } catch (err) {
  //   // throw an error if login to Instagram fails
  //   console.log("Something went wrong while logging into Instagram", err)
  // }

  const allRoutesData = await getAllFilesData("parcours");
  const allSupportersData = await getAllFilesData("partenaires");
  const pageData = await getFile("pages", "home");
  return {
    props: {
      allRoutesData,
      allSupportersData,
      pageData
    },
  };
}
