// Personal site: scroll-film. CSS sticky + scroll-driven motion first.
// Copy must stay concrete. No filler adjectives.

import styles from "./page.module.css";

const X_STATUS =
  "https://x.com/balllvest/status/2094370241543373260";

const ARTICLE_HREF =
  "/articles/why-wall-street-and-silicon-valley-are-both-wrong-about-spacex";

const holdBeats = [
  {
    index: "01",
    title: "Automated me",
    text: "Say what you want and tools plus agents on my stack do the boring research parts. I basically automated myself.",
  },
  {
    index: "02",
    title: "Research",
    text: "Figuring out the markets.",
  },
  {
    index: "03",
    title: "Investing",
    text: "A separate account for ideas and risk.",
  },
];

export default function Page() {
  return (
    <div className={styles.film}>
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
              Automating Creation
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Base</dt>
                <dd>Switzerland</dd>
              </div>
              <div>
                <dt>Work</dt>
                <dd>Marauder, Notebook</dd>
              </div>
              <div>
                <dt>Also</dt>
                <dd>Investing</dd>
              </div>
              <div>
                <dt>Now</dt>
                <dd>Shipping both</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.hold} aria-label="What I build">
        <div className={styles.holdSticky}>
          <div className={styles.holdStill}>
            <h2 className={styles.holdTitle}>What I build</h2>
            <ol className={styles.beats}>
              {holdBeats.map((beat) => (
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

      <section className={styles.products} aria-labelledby="products-title">
        <div className={styles.productsHead}>
          <h2 id="products-title">Shipped Work</h2>
        </div>
        <div className={styles.cards}>
          <a
            className={`${styles.card} ${styles.glare}`}
            href="https://notebook-marauder.up.railway.app"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Notebook</h3>
            <p className={styles.cardText}>
              Live research notebooks for site, Mac, and CLI. One notebook
              per project. You keep the data.
            </p>
          </a>
          <a
            className={`${styles.card} ${styles.glare}`}
            href="https://marauder-main.up.railway.app"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Marauder</h3>
            <p className={styles.cardText}>
              Private stack that runs Notebook with MAIN, Terminal, PWA, and
              bots. Long/short research app. Speed and actually-live over
              feature theater.
            </p>
          </a>
        </div>
      </section>

      <section className={styles.writing} aria-labelledby="writing-title">
        <div className={styles.writingInner}>
          <div className={styles.writingHead}>
            <h2 id="writing-title">Writing</h2>
          </div>
          <div className={`${styles.writingCard} ${styles.glare}`}>
            <a className={styles.writingMain} href={ARTICLE_HREF}>
              <span className={styles.writingMeta}>
                <time className={styles.writingDate} dateTime="2026-08-31">
                  31 Aug 2026
                </time>
              </span>
              <h3>
                Why Wall Street and Silicon Valley are both wrong about SpaceX
              </h3>
            </a>
            <a
              className={styles.readOnX}
              href={X_STATUS}
              target="_blank"
              rel="noreferrer"
            >
              Read it on X
            </a>
          </div>
        </div>
      </section>

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

      <section className={styles.close} aria-labelledby="close-title">
        <h2 id="close-title">Say hello</h2>
        <p>Message me on X for work, research, or investing talk.</p>
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
        <p className={styles.colophon}>Alvin Stark</p>
      </section>
    </div>
  );
}
