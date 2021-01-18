import styles from "./header.module.css" ;
import utilsStyles from "../../styles/utils.module.css" ;

import Link from "next/link" ;

export default function Header({ siteName }) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${utilsStyles.container}`}>
        <div className={styles.brand}>
          <Link href="/">
            <a><strong>{siteName}</strong></a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/about"><a>About</a></Link>
        </div>
      </nav>
    </header>
  )
}