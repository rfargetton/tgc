import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const settingsDirectory = path.join(process.cwd(), "/content/settings");

export async function getSettings(fileName) {
  const filePath = path.join(settingsDirectory, `${fileName}.md`)
  const frontmatter = matter.read(filePath);
  const siteName = frontmatter.data["site-name"];
  const description = frontmatter.data.description;

  return {
    siteName,
    description
  }

}