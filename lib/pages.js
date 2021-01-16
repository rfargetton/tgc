import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const directory = path.join(process.cwd(), "/content/pages");

export async function getPage(fileName) {
  const filePath = path.join(settingsDirectory, `${fileName}.md`)
  const frontmatter = matter.read(filePath);

  return {
    ...frontmatter
  }

} 