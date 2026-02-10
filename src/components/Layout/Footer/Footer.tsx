import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footerPart}>
            <div className={styles.contactsDiv}>
                <span className={styles.contactLine}>
                    <a href="mailto:matheo.deleplanque@gmail.com" target="_blank">matheo.deleplanque@gmail.com</a>
                </span>
                <span className={styles.contactLine}>
                    <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque/" target="_blank">Linkedin</a>
                </span>
            </div>
            <div className={styles.contactsDiv}>
            </div>
        </footer>
    );
};

export default Footer;
