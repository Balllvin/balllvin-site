import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const X_STATUS =
  "https://x.com/balllvest/status/2094370241543373260";

export const metadata: Metadata = {
  title:
    "Why Wall Street and Silicon Valley are both wrong about SpaceX | Alvin Stark",
  description:
    "You get scaling laws through ROI. SpaceX is the fastest snowball.",
};

export default function ArticlePage() {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link className={styles.back} href="/">
          Back home
        </Link>
        <p className={styles.meta}>
          <time dateTime="2026-08-31">31 Aug 2026</time>
        </p>
        <h1 className={styles.title}>
          Why Wall Street and Silicon Valley are both wrong about SpaceX
        </h1>
        <p className={styles.actions}>
          <a
            className={styles.readOnX}
            href={X_STATUS}
            target="_blank"
            rel="noreferrer"
          >
            Read it on X
          </a>
        </p>
      </header>

      <figure className={styles.cover}>
        <Image
          src="/articles/spacex/cover.jpg"
          alt="SpaceX turns into a compute company — SemiAnalysis revenue chart"
          width={2160}
          height={864}
          priority
          sizes="(max-width: 720px) 100vw, 72ch"
        />
      </figure>

      <div className={styles.prose}>
        <p>Wall Street only cares about ROI</p>
        <p>Silicon Valley only cares about smarter models</p>
        <p>
          I think both sides are right and both are wrong. You get scaling laws
          through ROI.
        </p>

        <h2>Wall Street</h2>
        <p>
          ROI is the only thing that matters, because that is the only way you
          get paid, promoted and achieve success on WS.
        </p>
        <p>
          To get reliable ROI you need great risk adjusted returns, which is why
          they have been so skeptical of AI until the start of this year - when
          you saw Opus 4.5 start to do measurably productive work (a lot of slop
          tbf) - and you were able to see in the horizon that these models (and
          therefore also data centers) could be revenue generating assets for
          the labs.
        </p>
        <p>
          Now the capital is in full flow, just look at the $500 billion NVIDIA
          is raising with Apollo, BlackRock, Blackstone, Brookfield, Goldman and
          KKR is Wall Street admitting that compute is an asset class.
        </p>

        <h2>Silicon Valley</h2>
        <p>
          Scaling laws say that if you train a model on more compute then the
          model gets better.
        </p>
        <p>
          Their idea is that you can just scale, build a better product and
          revenue will come. Tbf this has been the case so far, Anthropic will
          10x revenue this year and OpenAI is starting to accelarate again.
        </p>
        <p>
          Nothing shows that better than what Sam Altman on David Senras
          Podcast: &quot;Most of my effort right now is on research and compute.
          The most important thing that we can do is to create smart models and
          to be able to run them efficiently and abundantly for a lot of people.
          If we can get that right I believe that everything else will
          follow.&quot;
        </p>

        <h2>You get Scaling through ROI</h2>
        <p>
          If you stand up the cluster cheaper and faster, the ROI comes sooner,
          and that cash is what you can spend on the next compute cluster.
        </p>
        <p>
          It&apos;s like a tiny snowball pushed down a mountain that starts by
          picking up just a few flakes. As it rolls, its growing surface area
          grabs more snow with every turn, transforming it into a massive,
          unstoppable avalanche.
        </p>
        <p>
          that summarizes my entire point, SpaceX is the fastest (and therefore
          soon the biggest) snowball
        </p>
        <p>
          They built Colossus 1 in 122 days, trained Grok 3 and 4 on it, and now
          is renting it to Anthropic for $1.25 billion a month ($15 bil ARR). If
          the ~$12.9 b capex is right, $15 bil in and maybe $0.8 bil cash out
          for power and ops then it leaves $SPCX with ~$14.2 bil in the bank, so
          cash payback is about a year. Including depreciation in the equation
          they have a roughly 73% margin, which you have to spread over the life
          of the chips (4 years is assumed), and leaves them with ~$10.95 bil
          OCF a year.
        </p>

        <figure className={styles.figure}>
          <Image
            src="/articles/spacex/chart-compute.png"
            alt="SemiAnalysis chart: SpaceX turns into a compute company in eight quarters"
            width={1200}
            height={800}
            sizes="(max-width: 720px) 100vw, 65ch"
          />
          <figcaption>
            credit to Semi Analysis for their great research and chart
          </figcaption>
        </figure>

        <p>
          Everyone else spends two years building and earns nothing until it
          turns on, the snow ball starts moving later and therefore even if they
          were earlier than SpaceX, they will be behind soon.
        </p>
        <p>Dario Amodei,Dwarkesh Patel Podcast, 13 Feb 2026:</p>
        <blockquote>
          <p>
            &quot;I could buy $1 trillion of compute that starts at the end of
            2027. If my revenue is not $1 trillion dollars, if it&apos;s even
            $800 billion, there&apos;s no force on earth, there&apos;s no hedge
            on earth that could stop me from going bankrupt if I buy that much
            compute. Even though a part of my brain wonders if it&apos;s going
            to keep growing 10x, I can&apos;t buy $1 trillion a year of compute
            in 2027. If I&apos;m just off by a year in that rate of growth, or
            if the growth rate is 5x a year instead of 10x a year, then you go
            bankrupt. So you end up in a world where you&apos;re supporting
            hundreds of billions, not trillions.&quot;
          </p>
          <p>
            &quot;Why haven&apos;t we signed $10 trillion of compute starting
            in mid-2027? First of all, it can&apos;t be produced. But second,
            what if the country of geniuses comes, but it comes in mid-2028
            instead of mid-2027? You go bankrupt.&quot;
          </p>
        </blockquote>
        <p>
          But if you rent the compute out, take on the risk yourself then you
          have higher returns (albeit maybe not higher risk adjusted returns,
          but never bet against Elon). There is probably a near infinite demand
          for intelligence, since the one willing to pay for it in the long term
          is the one getting ROI.
        </p>
        <p>
          He Predicted it a while ago with this{" "}
          <a
            href="https://x.com/elonmusk/status/1963443919150330139"
            target="_blank"
            rel="noreferrer"
          >
            infamous post
          </a>
          :
        </p>
        <p>
          The crucial part is focusing on the profit, since that is what allows
          you to buy the next shitload of GPUs.
        </p>
        <p>
          The scaling laws are also starting to turn in their favor, again
        </p>
        <p>
          Grok 4.3 was shit. Grok 4.5 was a lot better. Grok 4.6 is actually
          good, especially on the Pareto cost frontier, but still below 5.6 Sol
          and Fable 5.
        </p>
        <p>
          The cursor data, and research team, has clearly been a huge help here
          since their Composer 2.5 model was already on the cost efficiency
          frontier but now they were able to scale up compute - combining the
          best of both worlds.
        </p>
        <p>
          Cursor didn&apos;t have a lot of revenue, around $3 b, but this was
          also because they were mostly reselling tokens (I would still argue
          they had a moat - best cloud agents, data on coding agents, and
          existing users).
        </p>
        <p>
          Now that they have more capable in-house models though and sell mostly
          through API pricing, I believe model revenue can skyrocket - and
          don&apos;t even get me started on Grok Bot (f*cking amazing product
          that increased my own grok usage exponentially - since it also uses
          cursor cloud agents more than I ever could).
        </p>

        <figure className={styles.figure}>
          <Image
            src="/articles/spacex/chart-gw-stack.png"
            alt="SemiAnalysis chart: revenue per gigawatt up the AI stack"
            width={1200}
            height={800}
            sizes="(max-width: 720px) 100vw, 65ch"
          />
          <figcaption>credit to Semi Analysis again</figcaption>
        </figure>

        <h2>What is next and Orbital Data Centers</h2>
        <p>
          Q2 closed at 1.4 GW. They said they will have 2 GW by December.
          Elon&apos;s conservative add for 2027 is 6 to 8 GW. SemiAnalysis has
          them near 10 GW by year-end, half of it being rented out, and about
          $300 billion of ARR. Funded with IPO cash and the $25 billion June
          notes (only 5.35% and due 2031).
        </p>
        <p>
          The bottleneck for orbital compute on Starship is still reuse. Flight
          13 (24 July) put Ship 40 in the Indian Ocean in one piece. Most tiles
          held; some edges and seams were damaged. Elon said a tower at that
          landing would have caught it.
        </p>
        <p>
          He first said the next flight would try a catch. On 20 August he moved
          it: first Ship catch is a few months out (need more testing since
          flight 13 landing burn partially failed - and they are probably still
          waiting on FAA approval), first reused Ship end of 2026 or early
          2027. Flight 14 is tracking around mid-September: first full orbit and
          Starlink V3 to a real orbit, then a water landing (hopefully all will
          work fine).
        </p>
        <p>
          Starship with both stages reused is aiming at $100 to $200 (Falcon 9
          is minimum $1,500) per kilogram. Gavin Baker puts that launch bill at
          about $5 billion and chips at $35 b per gigawatt, so the space stack
          is roughly $40 b against $60 b per GW on Earth - and the economics of
          putting it in space can only get better from here (I am looking at you
          Optimus).
        </p>
        <p>
          First AI satellites will hopefully launch in late 2027, then scale in
          2028.
        </p>

        <h2>What still has to happen</h2>
        <p>
          The one-year payback has to keep holding as they add gigawatts, or
          just not increase too much (whether from renting out or from selling
          tokens).
        </p>
        <p>
          Both stages of Starship have to become fully reusable and manufactured
          at scale, or orbit doesn&apos;t happen.
        </p>
        <p>
          Lastly and most importantly, Elon has to keep manufacturing stuff
          faster than anybody else (and I&apos;m willing to take that bet any
          day of the week).
        </p>
        <p>
          You go bankrupt if the cluster does not pay you, and you have a shit
          product if you never scale compute. And they both go hand in hand
        </p>
        <p>
          compounding is the name of the game, becoming the faster and bigger
          snowball
        </p>

        <h2>PS</h2>
        <p>
          feedback is much appreciated and would love it if you have any
          comments and I&apos;ll respond/answer to all
        </p>
      </div>
    </article>
  );
}
