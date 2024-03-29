import {Instagram} from "react-feather";
import {useQuery} from "../../lib/query";

const accessToken = process.env.NEXT_PUBLIC_IG_ACCESS_TOKEN;


export default function InstagramFeed(){
  let posts = []
  const {data, error, queried} = useQuery(`https://graph.instagram.com/me/media?fields=id,media_url&access_token=${accessToken}`);
  
  if (data){
    posts = data.data.slice(0, 4);
  }


  return  (
    <section>
      <div className="outer-spacing">
        <div className="container">
          <div className="inner-spacing text-center">
            <h2><span className="section-title bg-asphalte text-automne">Retrouvez nous sur instagram</span></h2>
            <div className="pt-2 inline-flex text-asphalte mx-auto text-lg">
              <Instagram size={32} />
              <a target="_blank" className="border-b-2 hover:border-gravier-light transition duration-150 ease-in-out border-asphalte ml-2" href="https://www.instagram.com/touraine_gravel_challenge">@touraine_gravel_challenge</a>
            </div>
          </div>
        </div>
        {data &&
          <div className="relative">
            <div className="absolute bg-automne w-full h-1/2"></div>
            <div className="container">
              <div className="inner-spacing">
                <ul className="flex flex-col md:flex-row -mx-3 z-20 relative">
                  {posts && posts.map((post) => (
                    <li className="shadow-2xl max-w-full md:w-1/4 h-48 lg:h-72 rounded-xl overflow-hidden m-3" key={post.id}>
                      <a target="_blank">
                        <img className="object-cover h-full w-full" src={post.media_url} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  )
}