"use client"
import {getProjects, type Project} from "@/services/getInformationService";
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import styles from "./projects-section.module.css";

const ProjectsSection = () => {
    const projects: Project[] = getProjects();

    return (
        <section className={styles.projectsSection} id="projects">
            <h2>Projets</h2>
            <div className={styles.projectsList}>
                {projects.map((project: Project) => <ProjectCard key={project.name} project={project} />)}
            </div>
        </section>
    );
};

export default ProjectsSection;
