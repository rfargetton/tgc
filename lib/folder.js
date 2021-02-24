import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "/content");

export async function getAllFilesData(folderName) {
  const fullDir = path.join(contentDir, folderName);
  const fileNames = fs.readdirSync(fullDir);

  const folderData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const filePath = path.join(fullDir, fileName);
    const frontmatter = matter.read(filePath); 
    const title = frontmatter.data.title;
    const date = frontmatter.data.date.toJSON();

    return {
      id,
      title,
      date
    }
  })

  return folderData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllFilesId(folderName){
  const fullDir = path.join(contentDir, folderName);
  const fileNames = fs.readdirSync(fullDir);

  return fileNames.map(fileName => {

    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

export async function getFileData(folderName, id) {
  const filePath = path.join(contentDir, folderName, `${id}.md`)
  const frontmatter = matter.read(filePath);
  const title = frontmatter.data.title;
  const date = frontmatter.data.date.toJSON();
  const img = frontmatter.data.featured_image;
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content)
  const htmlContent = processedContent.toString()

  return {
    id,
    title,
    date,
    img,
    htmlContent
  }
}