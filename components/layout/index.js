import Head from "next/head" ;
import Header from "../header" ;
import settings from "../config.json"

export default function Layout({ children, url }) {
  return (
    <div>
      <Head>
        <title>{settings.siteName}</title>
        <meta name="description" content={settings.description} />
        <link rel="canonical" href={settings.base_url + url} />
      </Head>

      <Header siteName={settings.siteName}/>

      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}