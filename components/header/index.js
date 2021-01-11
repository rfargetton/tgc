import styles from "./header.module.css" ;
import utilsStyles from "../../styles/utils.module.css" ;

import Link from "next/link" ;

export default function Header({ siteName }) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${utilsStyles.container}`}>
        <div className={styles.brand}>
          <Link href="/">
            <a><strong>{site_name}</strong></a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/"><a>Page 1</a></Link>
          <Link href="/"><a>Page 2</a></Link>
          <Link href="/"><a>Page 3</a></Link>
          <Link href="/"><a>Page 4</a></Link>
          <Link href="/"><a>Page 5</a></Link>
          <Link href="/"><a>Page 6</a></Link>
          <Link href="/"><a>Page 7</a></Link>
          <Link href="/"><a>Page 8</a></Link>
          </div>
      </nav>
    </header>
  )
}