import styles from "./separator.module.css";

const Separator = ({width = 100}: {width?: number}) => {
    return <hr className={styles.separator} style={{width: `${width}%`}}/>;
};

export default Separator;
