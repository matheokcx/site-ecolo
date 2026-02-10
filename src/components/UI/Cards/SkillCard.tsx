import type {Skill} from "@/services/getInformationService";
import styles from "./skill-card.module.css";

type SkillCardProps = {
    skill: Skill
};

const SkillCard = ({skill}: SkillCardProps) => {
    return (
        <div className={styles.skillCard}>
            {skill.image && <img src={skill.image} alt="Skill image"/>}
            <h3>{skill.name}</h3>
        </div>
    );
};

export default SkillCard;
