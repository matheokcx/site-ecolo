import styles from "./hero-section.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection} id="whoami" aria-label="Présentation">
            <div className={styles.titleDiv}>
                <h1>Mathéo Deleplanque</h1>
                <p>Développeur fullstack en alternance</p>
                <a href="#projects" className={styles.projectsCta}>
                    Voir mes projets
                </a>
            </div>
            <div className={styles.imageDiv}>
                <img src="/images/image.svg" alt="Illustration de présentation" />
            </div>
        </section>
    );
};

export default HeroSection;
