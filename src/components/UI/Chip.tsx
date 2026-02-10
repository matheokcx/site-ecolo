import styles from "./chip.module.css";

type ChipProps = {
    text: string;
    color?: string | undefined;
};

const Chip = ({text, color = "#46B0FB"}: ChipProps) => {
    return (
        <div className={styles.chip} style={{background: `${color}80`, borderColor: color}}>
            <p>{text}</p>
        </div>
    )
};

export default Chip;
