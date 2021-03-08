import Image from "next/image";

export default function Press({ articles }){
  return (
    <section>
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing">
            <h2 className="text-center"><span className="section-title bg-automne">Ils parlent de nous !</span></h2>
          </div>
          <div className="inner-spacing">
            <ul className="grid grid-cols-3">
              {articles.map((article) => (
                <li key={article.title} className="transform scale-95 hover:scale-100 transition">
                  <a href={article.link}>
                    <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-xl">
                      <Image src={article.image} layout="fill" objectFit="cover" />
                    </div>
                    <h3>{article.title}</h3>
                    <div>sur <span className="text-automne font-bold" href={article.link}>{article.publication}</span></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}