import Head from "next/head" ;
import Header from "../header" ;

const siteName = "Blog Starter" ;

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteName}</title>
      </Head>

      <Header />

      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}