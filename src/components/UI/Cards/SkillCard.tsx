import type {Skill} from "@/services/getInformationService";
import styles from "./skill-card.module.css";
import Image from "next/image";

type SkillCardProps = {
    skill: Skill
};

const SkillCard = ({skill}: SkillCardProps) => {
    return (
        <div className={styles.skillCard}>
            {skill.image && <Image src={skill.image} alt="Skill image" width={100} height={100} />}
            <h3>{skill.name}</h3>
        </div>
    );
};

export default SkillCard;
