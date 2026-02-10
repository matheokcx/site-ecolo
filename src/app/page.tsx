import Link from "next/dist/client/link";
import styles from "./page.module.css";

const Home = () => {
  return (
      <>
        <nav className={styles.navigationBar}>
            <Link href="/history">Histoire</Link>
            <Link href="/projects">Projets</Link>
            <Link href="/contacts">Contacts</Link>
        </nav>
        <main>

        </main>
        <footer>

        </footer>
      </>
  );
};

export default Home;
