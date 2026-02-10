import type {Experience} from "../../../services/getInformationService.ts";
import styles from "./experience-card.module.css";

type ExperienceCardProps = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className={styles.experienceCard}>
            <h3>{experience.title} - {experience.company}</h3>
            <p>{experience.description}</p>
            <div className={styles.datesDiv}>
                <p>{experience.startDate.toISOString().split('T')[0]}</p>
                {experience.endDate && <p> {experience.endDate.toISOString().split('T')[0]}</p>}
            </div>
        </div>
    );
};

export default ExperienceCard;
