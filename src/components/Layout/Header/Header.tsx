import styles from "./header.module.css";

const Header = () => {
    const links: {href: string, text: string}[] = [
        {href: "#whoami", text: "Qui suis-je"},
        {href: "#skills", text: "Compétences"},
        {href: "#projects", text: "Projets"},
        {href: "#contacts", text: "Contacts"}
    ];

    return (
        <nav className={styles.header} aria-label="Navigation principale" role="navigation">
            <div className={styles.links}>
                {links.map((link) => (
                    <a key={link.href} href={link.href} aria-label={`Aller à la section ${link.text}`}>
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Header;
