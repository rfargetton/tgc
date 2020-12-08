import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "/content/posts");

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const postsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const frontmatter = matter(fileContent); 

    return {
      id,
      ...frontmatter.data
    }
  })

  return postsData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPostsId(){
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {

    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

export async function getPostData(id) {
  const filePath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const frontmatter = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content)
  const htmlContent = processedContent.toString()

  return {
    id,
    ...frontmatter.data,
    htmlContent
  }
}