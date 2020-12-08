import Head from "next/head" ;
import Link from "next/link" ;

import styles from "./layout.module.css" ;
import utilsStyles from "../../styles/utils.module.css" ;

const siteName = "Blog Starter" ;

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteName}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <header className={styles.header}>
        <nav className={`${styles.headerContainer} ${utilsStyles.container}`}>
          <div>
            <Link href="/">
              <a><strong>{siteName}</strong></a>
            </Link>
          </div>
          <div className={styles.headerLinks}>
            <Link href="/"><a>About</a></Link>
            <Link href="/"><a>Contact</a></Link>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}