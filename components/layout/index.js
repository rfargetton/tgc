import Head from "next/head" ;
import Header from "../header" ;
import settings from "../../config.json"

export default function Layout({ children, url }) {
  return (
    <div>
      <Head>
        <title>{settings.site_name}</title>
        <meta name="description" content={settings.description} />
        <link rel="canonical" href={settings.base_url + url} />
      </Head>

      <Header siteName={settings.site_name}/>

      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}