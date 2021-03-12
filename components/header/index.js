import Link from "next/link" ;
import {useRouter} from "next/router";

import settings from "../../config.json";

export default function Header({ siteName }) {
  return (
    <header className="z-50">
      <div className="container bg-feuillage">
        <nav className="px-6 md:px-12 py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center">
          <div className="flex flex-grow items-center justify-between mb-4 md:mb-0">
            <Link href="/">
              <a className="py-2 text-2xl"><img className="h-24 md:h-40 mb-0 md:-mb-20 transform scale-95 hover:scale-105 transition" src={settings.logo} /></a>
            </Link>
            <a href={settings.register_link} target="_blank" className="md-hidden btn">S'inscrire</a>
          </div>
          <div className="flex overflow-x-auto -mx-2">
            <NavLink href="/evenement">L'événement</NavLink>
            <NavLink href="/a-propos">À propos</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="sm-hidden ml-6">
            <a href={settings.register_link} target="_blank" className="btn">S'inscrire</a> 
          </div>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ children, href }){
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`text-lg font-medium p-2 rounded flex-shrink-0 hover:bg-feuillage-dark ${router.pathname === href ? "text-white" : "text-gravier-light"}`}>{children}</a>
    </Link>
  )
}