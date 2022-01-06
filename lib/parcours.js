import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";

const parcoursDirectory = path.join(process.cwd(), "/content/parcours");

// Get all files in a given folder
// ex: printing post lists 
// Returns data {
//   id: string
//   title: string
//   image: string
//   date: string
// }
export async function getAllParcoursData() {
  const fileNames = fs.readdirSync(parcoursDirectory);

  const parcoursData = await Promise.all(fileNames.map(async function(fileName){
    const id = fileName.replace(/\.md$/, "");
    const data = await getParcoursData(id);
    


    return {
      ...data
    }
  }));

  return parcoursData.sort((a, b) => {
    var nameA = a.id.toUpperCase(); // ignore upper and lowercase
    var nameB = b.id.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  })
}

// Same as getAllFilesData with placeholder images 
// provided by Plaiceholder plugin
// Docs: https://plaiceholder.co/docs/plugins/next
export async function getAllParcoursDataWithPlaiceholder(){
  const allParcoursData = await getAllParcoursData();
  const allParcoursDataWithPlaiceholder = await Promise.all(allParcoursData.map( async function(data){
    const { blurhash, img } = await getPlaiceholder(data.image);

    return { 
      ...data, 
      imageBlur: {
        blurhash, 
        img
      }
    }
  }))

  return allParcoursDataWithPlaiceholder;
}

// Get all files in a given folder
// ex: creating slugs for posts
// Returns data {
//   id: string
// }
export async function getAllFilesId(){
  const fileNames = fs.readdirSync(parcoursDirectory);

  return fileNames.map(fileName => {

    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}

// Get specific data for a given file in a folder
// Returns data {
//   id: string
//   title: string
//   image: string
//   date: string
//   htmlContent: string
// }
export async function getParcoursData(id) {
  const filePath = path.join(parcoursDirectory, `${id}.md`)
  const frontmatter = matter.read(filePath);
  const title = frontmatter.data.title;
  const image = frontmatter.data.image;
  const link = frontmatter.data.link;
  const date = frontmatter.data.date.toJSON();
  const location = frontmatter.data.location;
  const description = frontmatter.data.description;
  const elevation = frontmatter.data.elevation;
  const distance = frontmatter.data.distance;

  return {
    id,
    title,
    image,
    link,
    date,
    location,
    elevation,
    distance,
    description
  }
}

// Same as getFileData with placeholder images 
// provided by Plaiceholder plugin
// Docs: https://plaiceholder.co/docs/plugins/next
export async function getParcoursDataWithPlaiceholder(id){
  const fileData = await getParcoursData(id);
  const { blurhash, img } = await getPlaiceholder(fileData.image);

  return {
    imageBlur: {
      blurhash,
      img
    },
    ...fileData
  }
}