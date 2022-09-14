import Head from "next/head";
import styles from "../styles/Home.module.css";
import appPreview from "../public/app-preview-1.png";
import Link from 'next/link'

import { HomePage, AskPage } from "../components/";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAMSY</title>
        <meta name="description" content="Don't deal with data, talk to it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>DAMSY</h1>
        <Link href="auth?login">
          <button>Inicia sesión</button>
        </Link>
      </header>

      <main className={styles.main}>
        <HomePage img={appPreview} />
        <AskPage img={appPreview} />
      </main>
    </div>
  );
}