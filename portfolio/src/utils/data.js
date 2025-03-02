import{
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,  
  FaGithub,
} from "react-icons/fa";
import { BiLogoJavascript} from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscCode, 
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";

import { FaGitAlt, FaXTwitter, FaDribbble }  from "react-icons/fa6";

import { MdGroups } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.jpg";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero"},
  { id: "02", label: "About Me", offset: -80, to: "about"},
  { id: "03", label: "Skills", offset: -80, to: "skills"},
  { id: "04", label: "Projects", offset: -80, to: "projects"},
  { id: "05", label: "Education", offset: -80, to: "education"},
  // { id: "06", label: "Contact", offset: -80, to: "contact"},
];

export const STATS = [
  { id: "01", count: "10", label: `Year of \nExperience`},
  { id: "02", count: "12", label: `Certifications \nEarned`},
  { id: "03", count: "43", label: `Projects \nCompleted`},
  { id: "04", count: "37+", label: `Happily \nClients`}
];

export const SOCIAL_MEDIA_ACCOUNT = [
  { id: "01", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/johnpaul.jamito.585"},
  { id: "02", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/2ez4jaypee/"},
  { id: "03", label: "Twitter", icon: FaXTwitter, link: "#"},
  { id: "04", label: "Github", icon: FaGithub, link: "#"},
];



export const SKILL_TABS = [
  { id: "01", label: "All", value: "all"},
  { id: "02", label: "Frontend", value: "frontend"},
  { id: "03", label: "Backend", value: "backend"},
  { id: "04", label: "Tools", value: "tools"},
];

export const SKILLS = [
  {
    id: "01",
    icon:FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Create responsive, interactive, and user-friendly web applications using React JS, including components, state management, and routing"
  }, {
    id: "02",
    icon:FaHtml5,
    skill: "HTML5",
    progress: 90,
    type: "frontend",
    description:
      "Develop websites and web applications using HTML5, including semantic HTML, responsive design, accessibility, and cross-browser compatibility"
  },
  {
    id: "03",
    icon:FaCss3,
    skill: "CSS",
    progress: 85,
    type: "frontend",
    description:
      "Apply styles to HTML5 documents using CSS3, including animations, transitions, and advanced techniques"
  },
  {
    id: "04",
    icon:BiLogoJavascript,
    skill: "JavaScript",
    progress: 90,
    type: "frontend",
    description:
    "Create interactive web applications using JavaScript, including event handling, DOM manipulation, and asynchronous programming"
  },
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 80,
    type: "backend",
    description:
      "Develop server-side applications using Node.js, including building APIs, handling HTTP requests, and managing databases"
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 75,
    type: "backend",
    description:
      "Create web applications using Express.js, including setting up routes, middleware, and error handling"
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 70,
    type: "backend",
    description:
      "Store and retrieve data using MongoDB, including querying, indexing, and connecting to a database"
  },
  {
    id: "08",
    icon: SiMysql,
    skill: "MySQL",
    progress: 65,
    type: "backend",
    description:
      "Create databases and tables using MySQL, including managing connections, querying, and executing SQL commands"
  },
  {
    id: "09",
    icon: FaGitAlt,
    skill: "Git",
    progress: 80,
    type: "tools",
    description:
      "Version control your projects using Git, including branching, merging, and resolving conflicts"
  },
  {
    id: "10",
    icon: VscCode,
    skill: "Visual Studio Code",
    progress: 95,
    type: "tools",
    description:
      "Develop and debug web applications using Visual Studio Code, including syntax highlighting, debugging, and code formatting"
  },
  {
    id: "11",
    icon: VscCommentUnresolved,
    skill: "Version Control",
    progress: 90,
    type: "tools",
    description:
      "Collaborate with other developers using version control systems, including Git, to manage code, resolve conflicts, and maintain a clean and organized codebase"
  },
  {
    id: "12",
    icon: VscTerminalPowershell,
    skill: "PowerShell",
    progress: 85,
    type: "tools",
    description:
      "Execute PowerShell scripts, automate tasks, and manage system resources using PowerShell"
  },
];

export const ABOUT_ME = {
  content: `
I’m just a guy who’s fascinated by technology and loves building cool things on the web. Currently, I’m diving deep into the world of web development, sharpening my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js) to create smooth, user-friendly applications.

I believe technology should make life easier, and that’s exactly what I aim to do—whether it's crafting a website, solving problems through code, or simply learning something new every day. Right now, I’m on a journey to level up my skills and turn my passion into something meaningful.`,

  email: "johnpauljamito10@gmail.com",
  phone: "+639706553264",
  website: "http://facebook.com/johnpauljamito",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
    image: PROJECT_IMG_1,
    tags: ["React", "Express.js", "MongoDB", "Node.js",],
  },
  {
    id: 2,
    title: "Responsive Portfolio Website using React JS | Portfolio Website in React",
    image: PROJECT_IMG_2,
    tags: ["React", "HTML", "CSS",],
  },
  {
    id: 3,
    title: "Full Stack Travel Story App using MERN Stack | MongoDB, Express, React, Node JS | MERN Project",
    image: PROJECT_IMG_3,
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Portfolio Website using React JS and Tailwind CSS | Portfolio Website in React Js",
    image: PROJECT_IMG_4,
    tags: ["React", "Tailwind CSS",],
  },
  {
    id: 5,
    title: "Full Stack Polling App Using MERN Stack | MongoDB, Express, React, Node.JS | MERN Project",
    image: PROJECT_IMG_5,
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Responsive Website Using React JS and Tailwind CSS",
    image: PROJECT_IMG_6,
    tags: ["React", "Tailwind CSS",],
  },


];

export const EDUCATION_TIMELINE = [
  {
  id: 1,
  title: "College - Diploma in Information Technology",
  institution: "PUP Lopez Branch ",
  duration: "2023 - Present",
  description:
    `A second year student experience
    - Attended a 2-year program focused on technology and digital skills.
    - Attended various hackathons, coding competitions, and web development workshops.
    - Participated in various coding challenges, including the Google Code Jam, Codeforces, and LeetCode.`,
  },
  {
    id: 2,
    title: "Senior High School - Information and Communication Technology",
    institution: "Calauag National High School",
    duration: "2021 - 2023",
    description:
      "Acquired a strong foundation in mathematics, science, and social studies. Gained valuable experience in problem-solving, critical thinking, and teamwork.",  
  },
  {
    id: 3,
    title: "Junior High School - (Grade 7-10)",
    institution: "Calauag National High School",
    duration: "2017 - 2021",
    description:
      "Acquired basic knowledge in mathematics, reading, and writing. Gained valuable experience in problem-solving and critical thinking skills.",
  },
  {
    id: 4,
    title: "Elementary School - (Grade 3-6)",
    institution: "Sumilang Elementary School",
    duration: "2013 - 2017",
    description:
      "Acquired basic knowledge in mathematics, reading, and writing. Gained valuable experience in problem-solving and critical thinking skills.",
  },
  {
    id: 5,
    title: "Elementary School - (Grade 1-2)",
    institution: "Sumulong Elementary School",
    duration: "2011 - 2013",
    description:
      "Acquired basic knowledge in mathematics, reading, and writing. Gained valuable experience in problem-solving and critical thinking skills.",
  }
];
