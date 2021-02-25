import Link from "next/link";

import Date from "../date";
import Container from "../container";
import {ArrowRight} from "react-feather";

export default function PostList({ posts }) {
  return (
    <div>
      <Container>
        <ul className="grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <li className="p-4 shadow-2xl rounded-xl">
              <img className="rounded-lg h-48 w-full object-cover" src={post.img} />
              <div className="mt-4">
                <h2 className="mb-2">{post.title}</h2>
                <Date dateString={post.date} />
                <Link>
                  <a href={`/posts/${post.id}`}>
                    <div className="flex justify-between text-blue-700 items-center mt-4">
                      <div>Read More</div>
                      <div>
                        <ArrowRight />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}