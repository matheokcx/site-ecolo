import styles from "./experiences-section.module.css";
import {type Experience, getExperiences} from "@/services/getInformationService";
import ExperienceCard from "@/components/UI/Cards/ExperienceCard";

const ExperiencesSection = () => {
    const experiences: Experience[] = getExperiences();

    return (
        <section className={styles.experiencesSection} id="experiences">
            <h2>Expériences</h2>
            {experiences.map((experience: Experience) => <ExperienceCard key={experience.title} experience={experience} />)}
        </section>
    );
};

export default ExperiencesSection;
