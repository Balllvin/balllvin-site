// Personal site: scroll-film. CSS sticky + scroll-driven motion first.
// Copy must stay concrete. No filler adjectives.

import styles from "./page.module.css";
import CloseParticles from "./components/CloseParticles";

const articles = [
  {
    title: "Why Wall Street and Silicon Valley are both wrong about SpaceX",
    href: "/articles/why-wall-street-and-silicon-valley-are-both-wrong-about-spacex",
    dateTime: "2026-08-31",
    dateLabel: "31 Aug 2026",
    xStatus:
      "https://x.com/balllvest/status/2094370241543373260",
  },
];

const holdBeats = [
  {
    index: "01",
    line: "Automate Myself",
  },
  {
    index: "02",
    line: "Figure out how the Market works",
  },
  {
    index: "03",
    line: "Invest in Companies I believe in",
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
            <p className={styles.heroSub}>
              <span>nerd at heart</span>
              <a
                href="https://x.com/balllvest"
                target="_blank"
                rel="noreferrer"
              >
                @balllvest
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.hold} aria-label="What I Do">
        <div className={styles.holdSticky}>
          <div className={styles.holdStill}>
            <h2 className={styles.holdTitle}>What I Do</h2>
            <ol className={styles.beats}>
              {holdBeats.map((beat) => (
                <li key={beat.index} className={styles.beat}>
                  <span className={styles.beatIndex}>{beat.index}</span>
                  <span className={styles.beatLine}>{beat.line}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.products} aria-labelledby="products-title">
        <div className={styles.productsHead} data-reveal>
          <h2 id="products-title">Shipped Work</h2>
        </div>
        <div className={styles.cards} data-reveal-group>
          <a
            data-reveal-item
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
            data-reveal-item
            className={`${styles.card} ${styles.glare}`}
            href="https://marauder-main.up.railway.app"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Marauder</h3>
            <p className={styles.cardText}>
              Private stack running Notebook with MAIN, Terminal, PWA, and
              bots. A long/short research app tuned for speed over feature
              theater.
            </p>
          </a>
        </div>
      </section>

      <section className={styles.writing} aria-labelledby="writing-title">
        <div className={styles.writingInner}>
          <div className={styles.writingTop} data-reveal>
            <h2 id="writing-title">My Slop</h2>
          </div>
          <div className={styles.essayList} data-reveal-group>
            {articles.map((article) => (
              <article
                key={article.href}
                className={styles.essayRow}
                data-reveal-item
              >
                <div className={styles.essayTopRow}>
                  <h3 className={styles.essayTitle}>{article.title}</h3>
                  <time
                    className={styles.essayDate}
                    dateTime={article.dateTime}
                  >
                    {article.dateLabel}
                  </time>
                </div>
                <div className={styles.essayLinks}>
                  <a className={styles.readEssay} href={article.href}>
                    Read the essay <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className={styles.readOnX}
                    href={article.xStatus}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read it on X <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.links} aria-labelledby="links-title">
        <div className={styles.linksInner}>
          <div className={styles.linksHead} data-reveal>
            <h2 id="links-title">Elsewhere</h2>
          </div>
          <ul className={styles.linkList} data-reveal-group>
            <li data-reveal-item>
              <a
                className={styles.linkRow}
                href="https://github.com/Balllvin"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkName}>GitHub</span>
                <span className={styles.linkMeta}>
                  <span className={styles.linkHandle}>Balllvin</span>
                  <span className={styles.linkArrow} aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>
            </li>
            <li data-reveal-item>
              <a
                className={styles.linkRow}
                href="https://x.com/balllvest"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkName}>X</span>
                <span className={styles.linkMeta}>
                  <span className={styles.linkHandle}>balllvest</span>
                  <span className={styles.linkArrow} aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>
            </li>
            <li data-reveal-item>
              <a
                className={styles.linkRow}
                href="https://cursor.com/@balllvin"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkName}>Cursor</span>
                <span className={styles.linkMeta}>
                  <span className={styles.linkHandle}>balllvin</span>
                  <span className={styles.linkArrow} aria-hidden="true">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.close} aria-labelledby="close-title">
        <CloseParticles />
        <div className={styles.closeInner}>
          <h2 id="close-title" data-reveal>Say hello</h2>
          <div className={styles.closeLinks} data-reveal>
            <a
              className={styles.closeButton}
              href="https://x.com/balllvest"
              target="_blank"
              rel="noreferrer"
            >
              Message me on X
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
