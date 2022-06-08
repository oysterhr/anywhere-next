import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Home app</h1>
        <Link href="/company">
          <a>Company</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
