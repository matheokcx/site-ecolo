import styles from "./header.module.css";
import Link from "next/dist/client/link";

const Header = () => {
    const links: {link: string, textKey: string}[] = [
        {link: "/", textKey: "Qui suis-je"},
        {link: "/projects", textKey: "Projets"},
        {link: "/contacts", textKey: "Contacts"}
    ];

    return (
        <nav className={styles.header}>
            <div className={styles.links}>
                {links.map((link) => <Link key={link.link} href={link.link}>{link.textKey}</Link>)}
            </div>
        </nav>
    );
};

export default Header;
