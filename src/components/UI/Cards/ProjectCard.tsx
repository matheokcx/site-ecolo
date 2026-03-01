import type {Project} from "@/services/getInformationService";
import Chip from "@/components/UI/Chip";
import styles from "./project-card.module.css";
import Image from "next/image";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({project}: ProjectCardProps) => {
    const link: string = project?.link ?? "#";

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            aria-label={`Voir le projet ${project.name}`}
        >
            <Image src={project.image} alt={`Capture du projet ${project.name}`} width={400} height={240} />
            <div className={styles.projectInformation}>
                <div className={styles.texts}>
                    <h3>{project.name}</h3>
                    <span className={styles.year}>{project.year}</span>
                    <p>{project.description}</p>
                </div>
                <div className={styles.tags}>
                    {project.techTags.map((tag: string) => <Chip key={tag} text={tag} />)}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
