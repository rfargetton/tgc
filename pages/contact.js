import {getFile} from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";
import settings from "../config.json";

export default function Contact({pageData}){
  return (
    <Layout 
      url="/contact" 
      title={`${pageData.title} • ${settings.site_name}`}
      image={pageData.image}
    >
        <Hero 
          image={pageData.image}
        >
          <h1 className="mb-6 w-full md:w-1/2 text-white">{pageData.heading}</h1>
        </Hero>

        <ContactForm />

    </Layout>
  )
}

export async function getStaticProps(){
  const pageData = await getFile("pages", "contact");
  return {
    props: {
      pageData
    }
  }
}