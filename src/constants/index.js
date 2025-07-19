import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  votechain,
  crowdfunding,
  vcs,
  threejs,
  DcInfotech,
  galvinus,
  Kubernetes,
  Redis,
  Kafka,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Microservices Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS ECS Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  {
    name: "Kafka",
    icon: Kafka,
  },
  {
    name: "Redis",
    icon: Redis,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "DC Info Tech",
    icon: DcInfotech, // make sure to import or define this icon
    iconBg: "#383E56",
    date: "October 2024 – December 2024",
    points: [
      "Enhanced user engagement by adding interactive feedback forms to internal websites and client pages.",
      "Converted web templates into responsive designs for seamless performance across devices.",
      "Created clean and functional landing pages for client projects and in-house demos.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Galvinus Pvt Ltd",
    icon: galvinus, // make sure to import or define this icon
    iconBg: "#E6DEDD",
    date: "December 2024 – Present",
    points: [
      "Developing a robust ERP software suite using microservices architecture to ensure scalability and modularity.",
      "Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) to build efficient frontend and backend systems.",
      "Managing cloud deployment on AWS, leveraging services like EC2, ECS, and RDS to ensure high availability and performance.",
      "Collaborating with cross-functional teams to integrate various modules like inventory, finance, and HR into the ERP system.",
    ],
  },
];

const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
];

const projects = [
  {
    name: "Blockchain Voting System",
    description:
      "A decentralized online voting platform built on Ethereum to ensure transparent and tamper-proof elections. Features real-time updates and digital signature-based voter verification.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "green-text-gradient",
      },
      {
        name: "ipfs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: votechain,
    source_code_link:
      "https://github.com/SwarnadeepDeb/Blockchain-based-Online-Voting-System?tab=readme-ov-file",
    video_link: "https://your-video-link.com/voting-demo",
  },
  {
    name: "Crowdfunding Platform",
    description:
      "A decentralized application (dApp) enabling users to raise and contribute funds securely on the Ethereum blockchain, with live transaction updates and IPFS integration for metadata storage.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "ipfs",
        color: "blue-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/your-username/crowdfunding-platform",
    video_link: "https://your-video-link.com/crowdfunding-demo",
  },
  {
    name: "Git Clone (CLI Tool)",
    description:
      "A Node.js-based implementation of core Git functionalities like add, commit, log, and diff. Built from scratch to demonstrate understanding of version control mechanics.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "cli",
        color: "pink-text-gradient",
      },
    ],
    image: vcs,
    source_code_link: "https://github.com/your-username/git-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
