// Design read: personal portfolio scroll-film for recruiters and peers,
// cinematic calm Swiss/Zug dark editorial language, CSS sticky plus
// scroll-driven first, restrained motion only where CSS cannot pin.
// Dials: VARIANCE 7 / MOTION 7 / DENSITY 3.

import styles from "./page.module.css";

const crewBeats = [
  {
    index: "01",
    title: "AI crew",
    text: "A small crew of focused agents that read, draft, and check my work before I ship it.",
  },
  {
    index: "02",
    title: "Research",
    text: "Slow notes on markets, systems, and tools. Written to be reread, not scrolled past.",
  },
  {
    index: "03",
    title: "Investing",
    text: "Quiet tooling for tracking ideas, risk, and patience. Built for long holding periods.",
  },
];

export default function Page() {
  return (
    <div className={styles.film}>
      {/* Scene 1: Open / identity. Asymmetric split manifesto hero. */}
      <section className={styles.open} aria-labelledby="alvin-title">
        <div className={styles.rays} aria-hidden="true" />
        <div className={styles.openGrid}>
          <div className={styles.openLeft}>
            <h1 id="alvin-title" className={styles.name}>
              Alvin
              <span className={styles.nameSecond}>Stark</span>
            </h1>
          </div>
          <div className={styles.openRight}>
            <p className={styles.promise}>
              I build a small AI crew, keep close research notes, and shape
              investing tools that stay calm under pressure.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Base</dt>
                <dd>Switzerland</dd>
              </div>
              <div>
                <dt>Work</dt>
                <dd>Making AI useful, and Investing</dd>
              </div>
              <div>
                <dt>Now</dt>
                <dd>Marauder and Notebook</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Scene 2: Hold / pin. Tall scroller with sticky still, CSS only. */}
      <section className={styles.hold} aria-label="What I build">
        <div className={styles.holdSticky}>
          <div className={styles.holdStill}>
            <h2 className={styles.holdTitle}>What I build</h2>
            <ol className={styles.beats}>
              {crewBeats.map((beat) => (
                <li key={beat.index} className={styles.beat}>
                  <span className={styles.beatIndex}>{beat.index}</span>
                  <div>
                    <h3>{beat.title}</h3>
                    <p>{beat.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Scene 3: Cut to products. Card grid, new layout family. */}
      <section className={styles.products} aria-labelledby="products-title">
        <div className={styles.productsHead}>
          <h2 id="products-title">Shipped work</h2>
          <p>Two live builds. Open them, click around, judge the craft.</p>
        </div>
        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.glare}`}>
            <h3>Notebook</h3>
            <p className={styles.cardText}>
              A working notebook for research and investing notes. Plain
              structure, fast pages, easy to revisit.
            </p>
            <a
              className={styles.cardLink}
              href="https://notebook-marauder.up.railway.app"
              target="_blank"
              rel="noreferrer"
            >
              Open Notebook
            </a>
          </article>
          <article className={`${styles.card} ${styles.glare}`}>
            <h3>Marauder</h3>
            <p className={styles.cardText}>
              The main Marauder build. The operational side of the same ideas:
              track, review, act.
            </p>
            <a
              className={styles.cardLink}
              href="https://marauder-main.up.railway.app"
              target="_blank"
              rel="noreferrer"
            >
              Open Marauder
            </a>
          </article>
        </div>
      </section>

      {/* Scene 4: Links. Real links only, editorial index list. */}
      <section className={styles.links} aria-labelledby="links-title">
        <div className={styles.linksInner}>
          <h2 id="links-title">Elsewhere</h2>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://github.com/Balllvin"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span className={styles.linkHandle}>Balllvin</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/balllvest" target="_blank" rel="noreferrer">
                <span>X</span>
                <span className={styles.linkHandle}>balllvest</span>
              </a>
            </li>
            <li>
              <a
                href="https://cursor.com/@balllvin"
                target="_blank"
                rel="noreferrer"
              >
                <span>Cursor</span>
                <span className={styles.linkHandle}>balllvin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alvin-stark-a12a6129b"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <span className={styles.linkHandle}>Alvin Stark</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Scene 5: Close CTA. In normal flow, never opacity gated. */}
      <section className={styles.close} aria-labelledby="close-title">
        <h2 id="close-title">Say hello</h2>
        <p>
          For work, research, or investing talk, reach out on X or LinkedIn.
          Short notes get fast replies.
        </p>
        <div className={styles.closeLinks}>
          <a
            className={styles.closeButton}
            href="https://x.com/balllvest"
            target="_blank"
            rel="noreferrer"
          >
            Message me on X
          </a>
          <a
            className={styles.closeGhost}
            href="https://www.linkedin.com/in/alvin-stark-a12a6129b"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className={styles.colophon}>
          Alvin Stark, Switzerland.
        </p>
      </section>
    </div>
  );
}
