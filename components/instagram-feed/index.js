import Image from "next/image";
import Container from "../container";
import {Instagram} from "react-feather";


export default function InstagramFeed({posts}){

  return  (
    <section>
      <div className="my-40">
        <div className="bg-automne">
          <Container>
            <div className="p-3 md:p-6">
              <h2 className="-mt-12"><span className="bg-asphalte p-3 shadow-lg text-automne">Suivez l'aventure</span></h2>
              <div className="pt-2 flex text-asphalte">
                <Instagram />
                <a target="_blank" className="border-b-2 border-asphalte ml-2" href="https://www.instagram.com/touraine_gravel_challenge">@touraine_gravel_challenge</a>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative">
          <div className="absolute bg-automne w-full h-1/2"></div>
          <Container>
            <div className="p-3 md:p-6">
              <ul className="flex -mx-3 z-20 relative">
                {posts.map(({node: post}) => (
                  <li className="shadow-2xl w-1/4 rounded-xl overflow-hidden m-3" key={post.id}>
                    <a target="_blank" href={`https://www.instagram.com/p/${post.shortcode}`}>
                      <img src={post.thumbnail_src} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}