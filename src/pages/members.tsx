import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Members: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <span className={styles.title}>basePath: {router.basePath}</span>
        <span className={styles.title}>asPath: {router.asPath}</span>
      </main>
    </div>
  );
};

export default Members;
