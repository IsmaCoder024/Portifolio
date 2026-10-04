import "./MyProjects.css";
import difaawms from "../images/difaawms.png";
import oarps from "../images/oarps.png";

const projects = [
  {
    title: "DIFAWMS",
    image: difaawms,
    description:
      "A web-based digital approval workflow system that enables users to create, manage, and process authorization requests within a centralized platform. The system supports predefined templates, customizable forms, virtual organizational structures, digital signatures, audit tracking, real-time status monitoring, and secure document storage.",
  },
  {
    title: "OARPS",
    image: oarps,
    description:
      "Web-based Organizational Activity, Resource and Performance Management System designed to help organizations plan, assign, monitor, and evaluate activities and tasks across different levels of management.",
  },
];

export default function MyProjects() {
  return (
    <main className="projects-page">
      <section className="projects-shell">
        <header className="projects-header">
          <span className="projects-kicker">Portfolio Work</span>
          <h1>My Projects</h1>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className="project-link">Visit site</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
