import type { NextPage } from "next";
import { Route, Switch, useLocation } from "react-router-dom";
import styles from "../styles/Home.module.css";

// This is our catch all route where we can mount our existing react router based app.
const Entry: NextPage = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/" exact>
          <main className={styles.main}>
            <h1 className={styles.title}>
              {`${location.pathname}`} - via React Router!
            </h1>
          </main>
        </Route>
        <Route path="/test" exact>
          <main className={styles.main}>
            <h1 className={styles.title}>
              {`${location.pathname}`} - via React Router!
            </h1>
          </main>
        </Route>
        <Route path="/*">
          <main className={styles.main}>
            <h1 className={styles.title}>404</h1>
          </main>
        </Route>
      </Switch>
    </div>
  );
};

export default Entry;
