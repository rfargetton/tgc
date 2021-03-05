import Instagram from "instagram-web-api";;;

import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import RouteList from "../components/route-list";
import InfoCard from "../components/info-card";
import Gallery from "../components/gallery";
import InstagramFeed from "../components/instagram-feed";

export default function Home({ allRoutesData, pageData, posts }) {

  console.log(posts);

  return (
    <Layout 
      url="/" 
      title={pageData.title}
    >
      <div>
        <Hero 
          image={pageData.image}
          intro={pageData.subheading}
        >
          <h1 className="mb-6 w-full md:w-1/2 ">{pageData.heading}</h1>
          <InfoCard />
        </Hero>

        <RouteList routes={allRoutesData}>
          <h2 className="text-center"><span className="bg-automne p-3 shadow-lg">Les parcours</span></h2>
        </RouteList>

        <Gallery images={pageData.gallery} />

        <InstagramFeed posts={posts.slice(0, 4)}/>

      </div>
    </Layout>
  );
}


export async function getStaticProps() {

  let posts = []

  const client = new Instagram({
    username: "romaricfargetton",
    password: "Woku69100?"
  })

  try {
    // attempt to log in to Instagram
    await client.login();
    console.log("success login to instagram");
    const instagram = await client.getPhotosByUsername({
      username: "touraine_gravel_challenge",
    })
    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
  } catch (err) {
    // throw an error if login to Instagram fails
    console.log("Something went wrong while logging into Instagram", err)
  }

  const allRoutesData = await getAllFilesData("parcours");
  const pageData = await getFile("pages", "home");
  return {
    props: {
      allRoutesData,
      pageData,
      posts
    },
  };
}
