import Link from "next/link";
import {ArrowRight} from "react-feather";

import Date from "../date";
import Container from "../container";
import Card from "../card";

export default function PostList({ posts, children }) {
  return (
    <div className="my-8">
      <Container>
        <div className="py-4 w-full md:w-8/12 mx-auto text-center">
          {children}
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4 list-none">
            {posts.map((post) => (
              <li key={post.id}>
                <Card>
                  <div className="p-4">
                    <img className="rounded-lg h-48 w-full object-cover" src={post.img} />
                    <div className="mt-4">
                      <h3>{post.title}</h3>
                      <Date dateString={post.date} />
                      <Link href={`/posts/${post.id}`}>
                        <a>
                          <div className="flex justify-between text-blue-700 items-center mt-4">
                            <div>Read More</div>
                            <div>
                              <ArrowRight />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Card>          
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}