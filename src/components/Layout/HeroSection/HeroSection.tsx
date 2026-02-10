import styles from "./hero-section.module.css";
import Link from "next/dist/client/link";

const HeroSection = () => {
    return (
        <section className={styles.heroSection} id="whoami">
            <div className={styles.titleDiv}>
                <h1>Titre de la partie héro</h1>
                <button className={styles.projectsCta}>
                    <Link href="/projects">Voir mes projets</Link>
                </button>
            </div>
            <div className={styles.imageDiv}>
                <img src="/images/image.svg" alt="Icon svg" />
            </div>
        </section>
    );
};

export default HeroSection;
