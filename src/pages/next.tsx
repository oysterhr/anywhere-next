import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export const Next: NextPage = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{`${router.asPath}`} rendered via Next</h1>
    </main>
  );
};

export default Next;
