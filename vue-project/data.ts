import type { techStackObject, projectObject } from "./Interfaces";

export const techStackArr: techStackObject[] = [
  {
    name: "JavaScript",
    type: "language",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png",
  },
  {
    name: "TypeScript",
    type: "language",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "HTML5",
    type: `front`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
  },
  {
    name: "CSS",
    type: `front`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    name: "React",
    type: `front`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Vue",
    type: `front`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "jQuery",
    type: `front`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/JQuery_UI-Logo.svg",
  },
  {
    name: "Node.js",
    type: `back`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    type: `back`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "NPM",
    type: `back`,
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  },
  {
    name: "mongoDB",
    type: `back`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png",
  },
  {
    name: "Postgres SQL",
    type: `back`,
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Jest",
    type: `testing`,
    logoURL:
      "https://www.jetbrains.com/webstorm/guide/static/5fffc5841d0abba2e6684f13fe6d003f/jest.svg",
  },
  {
    name: "Docker",
    type: "process",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png",
  },
];

//{name: '', type: ``, logoURL: ''},

export const projectsArr: projectObject[] = [
  {
    name: "Character Portfolio",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    stack: ["TypeScript", "Node", "Express", "React", "mongoDB", "Jest", "CSS"],
    status: "Work In Progress",
    codeURL: "https://github.com/joeglDev/WIP-Character-portfolio",
    liveURL: "https://keen-dodol-db9041.netlify.app/",
    description: `A React with Typescript full-stack website served by a Node-Express.js API. This service allows a user to display their fictional characters and their unique details to the world. I believe that it will be useful for distict internet communities such as fandoms, D&D players, furries and indy video game developers. `,
  },
  {
    name: "NC news API server",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png",
    stack: ["JavaScript", "Node", "Express", "Postgres SQL", "Jest"],
    status: "Finished",
    codeURL: "https://github.com/joeglDev/Northcoders-backend-project-JsServer",
    liveURL: false,
    description:
      "A Node - Express.js API server connecting a Postgres SQL database to a React front-end. This project was created according to the principles of using Test Driven Development in Jest.",
  },
  {
    name: 'My Developer Portfolio',
       imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
       stack: ['TypeScript', 'Vue', 'CSS'],
       status: 'Finished',
       codeURL: 'https://github.com/joeglDev/Developer-Portfolio-Joe-Gilbert',
       liveURL: false,
       description: 'My Developer Portfolio. I hope that you find it useful! This website was built using TypeScript with the Vue JavaScript framework.'
   }
];

/*
{
 name: ,
    imageURL: ,
    stack: ,
    status: ,
    codeURL: ,
    liveURL: ,
    description: 
}
*/
