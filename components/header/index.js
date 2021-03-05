import Link from "next/link" ;

import Container from "../container";
import settings from "../../config.json";

export default function Header({ siteName }) {
  return (
    <header className="bg-feuillage">
      <Container>
        <nav className="px-6 py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center">
          <div className="flex flex-grow items-center justify-between mb-4 md:mb-0">
            <Link href="/">
              <a className="py-2 text-2xl"><img className="h-40 mb-0 md:-mb-20" src={settings.logo} /></a>
            </Link>
            <Link href="/"><a className="md-hidden btn">Contact</a></Link>
          </div>
          <div className="flex overflow-x-auto -m-2 text-white">
            <Link href="/evenement"><a className="font-bold m-2 flex-shrink-0">L'événement</a></Link>
            <Link href="/a-propos"><a className="font-bold m-2 flex-shrink-0">À Propos</a></Link>
            <Link href="/contact"><a className="font-bold m-2 flex-shrink-0">Contact</a></Link>
          </div>
          <div className="sm-hidden ml-6">
            <Link href="/contact"><a className="btn">Contact</a></Link>  
          </div>
        </nav>
      </Container>
    </header>
  )
}