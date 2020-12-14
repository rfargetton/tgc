import Head from "next/head" ;
import Header from "../header" ;

export default function Layout({ children, settings }) {
  return (
    <div>
      <Head>
        <title>{settings.siteName}</title>
        <meta name="description" content={settings.description} />
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