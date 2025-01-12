import project1 from "../assets/projects/project-1.jpg";
import project01 from "../assets/projects/ecommerce.jpg";
import portfolioimg from "../assets/projects/image.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with 1 year of experience in building robust and scalable web applications. I specialize in front-end technologies like React.js, Redux, Framer Motion, and AngularJS, and have expertise in back-end development using Node.js and MongoDB. Additionally, I have worked with Cloudinary for image management, RTK Query for API handling, and WordPress for CMS-based projects. My goal is to leverage these skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Disciplined and energetic professional with a structured approach to tasks. Passionate about learning and
 seeking mentorship in a nurturing environment. Targeting employment in a well-established indigenous
 enterprise to enhance skills and contribute to organizational growth. `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Full Stack Developer",
    company: "Bnet Global Solutions pvt ltd.",
    description: `Worked on projects including Policy Fynder (React.js), IMS
 (Insurance Management System) (Angular.js), developing
 responsive and user-friendly interfaces. Collaborated in an
 Agile environment to deliver high-quality web applications
 and improve system performance. `,
    technologies: [
      "React.js",
      "Redux js",
      "wordPress",
      "Node.js",
      " Angular JS",
      "Node JS",
      "TailWind CSS",
      "HTML",
      "CSS",
      "Javascript",
      "MongoDB",
    ],
  },
  {
    year: "2022-2023",
    role: "Frontend Developer Inter",
    company: "Florito pvt ltd",
    description: `Designed and developed user interfaces for web applications using and React js and  WordPress. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "wordPress"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project01,
    description:
      "Developed Urban Store, a full-stack e-commerce platform designed for seamless online shopping. The frontend leverages React.js, Redux, and Tailwind CSS for a responsive and dynamic user experience, while the backend is powered by Node.js, Express.js, and MongoDB. API data management is streamlined with RTK Query. Key features include secure user authentication, a robust shopping cart system, and comprehensive product management. The platform integrates Cloudinary for efficient image storage and PayPal as a reliable payment gateway.",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Framer Motion",
      "render.com",
    ],
    navigate:"https://front-end-m91j.onrender.com"
  },

  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript",],
    navigate:""

  },
  {
    title: "Portfolio Website",
    image: portfolioimg,
    description:
      "A personal portfolio website showcasing projects, skills,experice and contact information.",
    technologies: [ "React js", "Tailwind CSS", "Framer Motions"],
    navigate:""

  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Bengaluru , India ",
  phoneNo: "+91 9538304520 ",
  email: "vivekck12343@gmail.com",
};
