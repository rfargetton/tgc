import Link from "next/link" ;

import Container from "../container";
import settings from "../../config.json";

export default function Header({ siteName }) {
  return (
    <header className="bg-feuillage">
      <div className="container">
        <nav className="px-6 md:px-12 py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center">
          <div className="flex flex-grow items-center justify-between mb-4 md:mb-0">
            <Link href="/">
              <a className="py-2 text-2xl"><img className="h-40 mb-0 md:-mb-20 transform scale-95 hover:scale-105 transition" src={settings.logo} /></a>
            </Link>
            <Link href="/"><a className="md-hidden btn">Contact</a></Link>
          </div>
          <div className="flex overflow-x-auto -m-2 text-gravier">
            <Link href="/evenement"><a className="text-lg font-medium m-2 flex-shrink-0 hover:text-gravier-light">L'événement</a></Link>
            <Link href="/a-propos"><a className="text-lg font-medium m-2 flex-shrink-0 hover:text-gravier-light">À propos</a></Link>
            <Link href="/contact"><a className="text-lg font-medium m-2 flex-shrink-0 hover:text-gravier-light">Contact</a></Link>
          </div>
          <div className="sm-hidden ml-6">
            <Link href={settings.register_link}><a className="btn">S'inscrire</a></Link>  
          </div>
        </nav>
      </div>
    </header>
  )
}