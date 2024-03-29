import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiarnan Swayne</title>
        <link
          rel="hello!"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/waving-hand_1f44b.png"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Tiarnan Swayne</h1>

        <p className={styles.description}>📍Aarhus, Denmark</p>
        <p className={styles.description}>
          ⚡️ I like GraphQL, React, TypeScript and SQL-databases
        </p>
        <p className={styles.description}>🏀 I love basketball too</p>
        <p className={styles.description}>
          📧 Contact: by{" "}
          <a href="mailto: swaynedev@gmail.com">
            <span>swaynedev@gmail.com</span>
          </a>{" "}
          or{" "}
          <a href="https://twitter.com/lastnameswayne">
            <span>@lastnameswayne</span>
          </a>
        </p>
        <p className={styles.description}>
          Add me on{""}{" "}
          <a href="https://www.linkedin.com/in/tiarnanswayne/">
            <span>LinkedIn</span>
          </a>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/lastnameswayne/leetbattle"
            className={styles.card}
          >
            <h3>LeetBattle &rarr;</h3>
            <p>
              A platform for challenging your friends in competitive programming
              problems.
            </p>
          </a>

          <a
            href="https://github.com/lastnameswayne/songlink"
            className={styles.card}
          >
            <h3>SongLink &rarr;</h3>
            <p>
              A tool for music artists to create beautiful landing pages for
              their tracks.
            </p>
          </a>

          <a
            href="https://github.com/lastnameswayne/foodfinder"
            className={styles.card}
          >
            <h3>FoodFinder &rarr;</h3>
            <p>
              A webapp combating foodwaste by letting people share their excess
              ingredients and meals.
            </p>
          </a>
          {
            //Remember:   Lightweight Twitter Bot using Python and
            //AWS-Lambda to execute a tweet which tracks the Covid-19 Vaccine Progress daily.
            //Check it out on GitHub and Twitter:
          }
          <a href="https://dev.to/lastnameswayne" className={styles.card}>
            <h3>Articles &rarr;</h3>
            <p>
              I like to write web-dev articles on GraphQL and other web-dev
              related topics.{" "}
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
