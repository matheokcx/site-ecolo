import type {Project} from "@/services/getInformationService";
import Chip from "@/components/UI/Chip";
import styles from "./project-card.module.css";
import Image from "next/image";

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
            <Image src={project.image} alt="Project image" width={100} height={100} />
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
