import styles from "./contacts-section.module.css";

const ContactsSection = () => {
    return (
        <footer className={styles.contactsSection} id="contacts" aria-label="Informations de contact">
            <h2>Me contacter</h2>
            <div className={styles.contactsList}>
                <a href="mailto:matheo.deleplanque@gmail.com" className={styles.contactItem} aria-label="Envoyer un email à matheo.deleplanque@gmail.com">
                    <span className={styles.contactLabel}>Email</span>
                    <span>matheo.deleplanque@gmail.com</span>
                </a>
                <a href="tel:+33707070707" className={styles.contactItem} aria-label="Appeler le 07 07 07 07 07">
                    <span className={styles.contactLabel}>Téléphone</span>
                    <span>07 07 07 07 07</span>
                </a>
                <a href="https://linkedin.com/in/matheo-deleplanque" target="_blank" rel="noopener noreferrer" className={styles.contactItem} aria-label="Voir le profil LinkedIn">
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <span>Mathéo Deleplanque</span>
                </a>
                <a href="https://github.com/matheokcx" target="_blank" rel="noopener noreferrer" className={styles.contactItem} aria-label="Voir le profil GitHub">
                    <span className={styles.contactLabel}>GitHub</span>
                    <span>matheokcx</span>
                </a>
            </div>
        </footer>
    );
};

export default ContactsSection;
