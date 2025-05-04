import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React & Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time task management application",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Calculator",
    description:
      "A simple web calculator that performs basic arithmetic operations on two input values.",
    tech: ["HTML"],
    github: "https://github.com/SRAVANJAJAM/class-assignment/tree/main",
    src: "calc.png",
  },
];

export default function Projects() {
  return (
    <section className="pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
