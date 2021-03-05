import Link from "next/link";

import settings from "../../config.json";

export default function Footer({}){
  return (
    <footer className="mt-20 md:mt-40 bg-feuillage text-gravier">
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
                <Link href="/evenement"><a className="text-xl font-bold mx-2">L'événement</a></Link>
                <Link href="/a-propos"><a className="text-xl font-bold mx-2">À propos</a></Link>
                <Link href="/contact"><a className="text-xl font-bold mx-2">Contact</a></Link>
              </nav>
              <div className="flex flex-col sm:flex-row my-4">
                <a className="mx-2" href={settings.facebook_link}>Facebook</a>
                <a className="mx-2" href={settings.komoot_link}>Komoot</a>
                <a className="mx-2" href={`https://www.instagram.com/${settings.instagram_account}`}>Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}