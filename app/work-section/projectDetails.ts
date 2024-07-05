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
    name: "Algo-Analysis",
    description:
      "This project provide a platform for analyzing and visualizing algorithms. Whether you're a student learning about algorithms or a professional wanting to explore different algorithms .",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/arnab-4/Algo-analysis",
    demo: "https://algo-analysis.netlify.app/",
    image: require(".//../../public/projects/Algo-analysis.png"),
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
    name: "Gemini-Ultra",
    description:
      "Gemini-ultra is a versatile chatbot integrating text, image, and voice interactions. Explore advanced multimedia capabilities for enhanced user engagement. Ideal for integrating into web, mobile, and voice assistant applications.",
    technologies: ["Gemini","Next","Tailwind","OpenAI"],
    github: "https://github.com/arnab-4/Gemini-Ultra",
    demo: "https://gemini-ultra-iota.vercel.app/",
    image: require(".//../../public/projects/Gemini.png"),
    available: true,
  },
];

