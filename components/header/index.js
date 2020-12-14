import styles from "./header.module.css" ;
import utilsStyles from "../../styles/utils.module.css" ;

import Link from "next/link" ;

export default function Header({ siteName }) {
  return (
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
  )
}