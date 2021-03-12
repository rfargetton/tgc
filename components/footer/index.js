import Link from "next/link";
import {Code} from "react-feather";

import settings from "../../config.json";

export default function Footer({}){
  return (
    <footer className="mt-20 md:mt-40 bg-feuillage text-gravier-light">
      <div className="container">
        <div className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <div className="w-48 my-4">
                <img src={settings.logo} alt="tgc logo" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <nav className="flex flex-col sm:flex-row my-4">
                <Link href="/evenement"><a className="text-xl font-bold mx-2 hover:text-gravier">L'événement</a></Link>
                <Link href="/a-propos"><a className="text-xl font-bold mx-2 hover:text-gravier">À propos</a></Link>
                <Link href="/contact"><a className="text-xl font-bold mx-2 hover:text-gravier">Contact</a></Link>
              </nav>
              <div className="flex flex-col sm:flex-row my-4">
                <a className="mx-2" href={settings.facebook_link}>Facebook</a>
                <a className="mx-2" href={settings.komoot_link}>Komoot</a>
                <a className="mx-2" href={`https://www.instagram.com/${settings.instagram_account}`}>Instagram</a>
              </div>
              <div className="mx-2 my-4 text-automne flex items-center">
                <Code />
                <a target="_blank" href="https://www.romaricfargetton.com" className="mx-2 border-b border-automne">Site web par Romaric Fargetton</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}