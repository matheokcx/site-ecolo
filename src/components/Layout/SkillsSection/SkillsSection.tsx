"use client"
import styles from "./skills-section.module.css";
import {getSkills, type Skill, type SkillCategory} from "@/services/getInformationService";
import SkillCard from "@/components/UI/Cards/SkillCard";
import {useState} from "react";

const SkillsSection = () => {
    const [skills, setSkills] = useState<Skill[]>(getSkills("framework"));
    const [selectFilter, setSelectFilter] = useState<string | undefined>("framework");
    const filters: {category: SkillCategory | undefined, text: string}[] = [
        {category: undefined, text: "Tous"},
        {category: "language", text: "Langages"},
        {category: "library", text: "Librairies"},
        {category: "framework", text: "Frameworks"},
        {category: "ide", text: "IDE"},
        {category: "other", text: "Autres"}
    ];
    const noSelectedFilterStyle = {
        backgroundColor: "transparent",
        border: "2px solid var(--secondary-text)",
        color: "var(--secondary-text)",
    };

    const handleFilterChange = (category?: SkillCategory | undefined): void => {
        setSkills(getSkills(category));
        setSelectFilter(category);
    };

    return (
        <section className={styles.skillsSection} id="skills" aria-label="Compétences techniques">
            <h2>Compétences</h2>
            <div className={styles.filtersDiv} role="tablist" aria-label="Filtrer par catégorie">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterChange(filter.category)}
                        style={selectFilter !== filter.category ? noSelectedFilterStyle : {}}
                        role="tab"
                        aria-selected={selectFilter === filter.category}
                        aria-label={`Filtrer par ${filter.text}`}
                    >
                        {filter.text}
                    </button>
                ))}
            </div>
            <div className={styles.skillsList} role="tabpanel">
                {skills.map((skill: Skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
        </section>
    );
};

export default SkillsSection;
