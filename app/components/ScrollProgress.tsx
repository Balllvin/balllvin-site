import styles from "./ScrollProgress.module.css";

// Thin scroll progress bar driven by CSS scroll-timeline.
// No window scroll listeners. Falls back to a static idle bar when
// animation-timeline is unsupported.
export default function ScrollProgress() {
  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} />
    </div>
  );
}
