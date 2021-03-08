import {getFile} from "../lib/file";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contact-form";

export default function Contact({pageData}){
  return (
    <Layout 
      url="/contact" 
      title={pageData.title}
    >
        <Hero 
          image={pageData.image}
        >
          <h1 className="mb-6 w-full md:w-1/2 ">{pageData.heading}</h1>
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