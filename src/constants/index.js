import project1 from "../assets/projects/project-1.jpg";
import project01 from "../assets/projects/urbanStore.jpg";
import portfolioimg from "../assets/projects/image.png";
import project2 from "../assets/projects/taskBuddy.jpg";
import project3 from "../assets/projects/chat.jpg";
export const HERO_CONTENT = `I am a passionate full-stack developer with 1+ year of experience in building robust and scalable web applications. I specialize in front-end technologies like React.js, Redux, Framer Motion, and AngularJS, and have expertise in back-end development using Node.js and MongoDB. Additionally, I have worked with Cloudinary for image management, RTK Query for API handling, and WordPress for CMS-based projects. My goal is to leverage these skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
Disciplined and motivated Software Developer with a structured approach to problem-solving and a passion for learning. Experienced in front-end and full-stack development, with expertise in React.js, Node.js, Express.js, Firebase, and MongoDB. Adept at working in Agile environments, collaborating with teams, and delivering scalable applications. Seeking an opportunity in a growth-oriented organization to enhance technical skills and contribute to innovative solutions. `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Bnet Global Solutions pvt ltd.",
    description: [
      "Developed and maintained responsive, user-friendly web interfaces for projects like Policy Fynder (React.js) and IMS (Insurance Management System) (Angular.js).",
      "Actively participated in Agile processes, including daily stand-up meetings, sprint planning, and retrospectives.",
      "Worked closely with cross-functional teams to ensure seamless integration between front-end and back-end services.",
      "Followed the Software Development Life Cycle (SDLC) from requirements gathering to deployment and maintenance.",
      "Wrote clean, reusable, and scalable code, improving application performance and maintainability.",
      "Used Git and GitLab for version control, ensuring proper branch management and code reviews.",
      "Conducted unit testing and debugging to enhance software reliability and reduce production issues.",
      "Optimized web applications for performance, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    year: "2022-2023",
    role: "Frontend Developer Intern",
    company: "Florito pvt ltd",
    description: [
      "Developed and maintained the company website using HTML, CSS, JavaScript, and WordPress.",
    ],
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
      "shadcn ui",
    ],
    navigate: "https://front-end-m91j.onrender.com",
  },
  {
    title: "Chaty - Real-time Chat App",
    image: project3, // Make sure to import the image
    description:
      "Chaty is a real-time chat application built using Socket.io for instant messaging. It supports user authentication, real-time messaging, and dynamic UI updates. The frontend is built with React.js and Tailwind CSS, while the backend uses Node.js, Express.js, and MongoDB for message storage.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
      "daisy UI",
    ],
    navigate: "https://chatty-d3xz.onrender.com/",
  },
  // {
  //   title: "Task Buddy",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking. Designed and developed a task management application with a Google Login feature. Implemented real-time database updates for seamless task tracking.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   navigate: "",
  // },
  {
    title: "Engineering Resource Management System (ERM)",
    image: project2,
    description:
      "Developed a full-stack Engineering Resource Management web application to manage and monitor engineers, their allocations, and work progress. Implemented user authentication with role-based access (Manager & Engineer) using JWT and session storage for secure navigation. Built dynamic dashboards with charts and metrics to visualize engineer utilization and availability using Chart.js. Designed a fully responsive, mobile-friendly UI with Material UI and Tailwind CSS to ensure a clean and modern user experience. Deployed the application on Render, ensuring smooth backend-frontend integration and persistent MongoDB data storage.",
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Tailwind CSS",
      "Chart.js",
      "Render",
    ],
    navigate: "https://erm-kok7.onrender.com",
  },
];

export const CONTACT = {
  address: "Bengaluru , India ",
  phoneNo: "+91 9538304520 ",
  email: "vivekck12343@gmail.com",
};
