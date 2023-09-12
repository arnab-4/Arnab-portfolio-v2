export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Portfolio 1",
    description:
      "This is the fifth iteration of my portfolio.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/arnab-4",
    demo: "https://arnab-portfolio-swart.vercel.app/",
    image: require(".//../../public/projects/portfolio.png"),
    available: true,
  },
  {
    id: 1,
    name: "G-Inform",
    description:
      "The goal of this project is to give you an idea about types of information that websites can collect and access from you.",
    technologies: ["Next","Tailwind CSS"],
    github: "https://github.com/arnab-4/Get-Information",
    demo: "https://getinfromation.netlify.app/",
    image: require(".//../../public/projects/getinformation.png"),
    available: true,
  },
  {
    id: 2,
    name: "Destroyer",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: ["OpenAI","Next","Tailwind CSS"],
    github: "https://github.com/arnab-4/Destroyer",
    demo: "/",
    image: require(".//../../public/projects/construction.webp"),
    available: true,
  },
];

