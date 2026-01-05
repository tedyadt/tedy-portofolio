import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Watchzilla",
    desc: "A web application that displays a list of the latest and trending movies using data from the TMDB public API. The design is built using Tailwind CSS for a responsive and modern look.",
    img: "/static/projects/film.png",
    github: "https://github.com/tedyadt/movielrvl",
    tags: ["Laravel", "TMDB API", "TailwindCSS", "CSS"],
  },
  {
    id: 1,
    title: "Silembaga",
    desc: "The LLDIKTI Region VII Institution is a web application for higher education institutional data management. The project includes UI design using Figma, interface creation using Laravel, jQuery, AJAX, and DataTables, API integration, and feature development and testing through deployment.",
    img: "/static/projects/siladikti.png",
    github: "https://github.com/tedyadt/lldiktibaru-dhboard",
    tags: ["Laravel", "Bootstrap", "jQuery", "API"],
  },
  {
    id: 8,
    title: "E- Portal Brantas Abipraya",
    desc: "The Brantas Abipraya E-Portal is PT Brantas Abipraya's internal website, designed to support the work needs of various departments. I worked on adding Standards & Regulations features, covering ISO, internal and external regulations, and system audits (internal and external audits). From business flow design to implementation, I used Laravel Livewire, Tailwind CSS, and code management through AWS CodeCommit.",
    img: "/static/projects/portal brantas.png",
    // github: "https://github.com/tedyadt/web-sentimen-reactjs",
    tags: ["Laravel", "TailwindCSS", "Livewire", "AWS Codecommit", "PostgreSQL"],
  }, 
  {
    id: 3,
    title: "Sentimen Analisis Facebook Marketplace",
    desc: "A web-based application to classify social media user sentiment towards Facebook Marketplace services in real time using a previously created Support Vector Machine machine learning model.",
    img: "/static/projects/sentimen analisis.png",
    github: "https://github.com/tedyadt/web-sentimen-reactjs",
    tags: ["ReactJS", "TailwindCSS", "ApexCharts", "Flask", "Machine Learning"],
  },
  
  {
    id: 2,
    title: "Diktisurat",
    desc: "Letter Transposition Web LLDIKTI Region VII is a web application that makes it easier for universities to send letters to LLDIKTI digitally, track the status of acceptance or rejection along with the explanation, without the need for physical letters.",
    img: "/static/projects/diktisurat.png",
    github: "https://github.com/tedyadt/lldikti",
    tags: ["Laravel", "Bootstrap", "jQuery", "API"],
  },
  {
    id: 4,
    title: "Accounting & Finance Learning Media",
    desc: "The interface design uses Figma, which displays service information, learning features, and accounting and financial materials with a modern and user-friendly appearance.",
    img: "/static/projects/landing.png",
    tags: ["Figma", "Dribble","Design"],
  },
  {
    id: 5,
    title: "Monvest",
    desc: "Financial management and investment recording application using Flutter and Drift",
    img: "/static/projects/monvest.png",
    github: "https://github.com/tedyadt/monvest-moneymanager",
    tags: ["Flutter", "Drift"],
  },
  {
    id: 6,
    title: "Music Wave (Spotify Clone)",
    desc: "A React Native-based music app that leverages the Spotify API to display a list of songs, albums, and playlists with a native Spotify-like interface.",
    img: "/static/projects/music.png",
    github: "https://github.com/tedyadt/sentimen-analisis-svmchisquare",
    tags: ["React Native", "Spotify API"],
  },
  {
    id: 7,
    title: "Tredy",
    desc: "The e-commerce interface design uses Figma with a modern, responsive appearance and focuses on ease of user navigation in searching, selecting, and purchasing products.",
    img: "/static/projects/olsop.png",
    tags: ["Figma", "Design"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
