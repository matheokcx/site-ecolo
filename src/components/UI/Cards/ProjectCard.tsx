import type {Project} from "../../../services/getInformationService.ts";
import Chip from "../Chip.tsx";
import styles from "./project-card.module.css";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({project}: ProjectCardProps) => {
    const handleClick = (): void => {
        const link: string = project?.link ?? "https://matheokcx.fr";
        window.open(link, '_blank')?.focus()
    };

    return (
        <div className={styles.projectCard} onClick={handleClick}>
            <img src={project.image} alt="Project image"/>
            <div className={styles.projectInformation}>
                <div className={styles.texts}>
                    <h3>{project.name}</h3>
                    <label>{project.year}</label>
                    <p>{project.description}</p>
                </div>
                <div className={styles.tags}>
                    {project.techTags.map((tag: string) => <Chip key={tag} text={tag} />)}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
