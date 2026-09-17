import styles from "./Grain.module.css";

// Static film-grain noise overlay. Pure CSS, fixed, pointer-events none.
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
