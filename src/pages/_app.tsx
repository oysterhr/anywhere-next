import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BrowserRouter, Link } from "react-router-dom";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const App = ({ Component, pageProps }: any) => (
  <div>
    <nav>
      {/* RR Links */}
      <Link to="/" className={styles.link} data-testid="home-rr">
        Home via RR
      </Link>

      <Link to="/test" className={styles.link} data-testid="test-rr">
        Test via RR
      </Link>

      {/* Next Links */}
      <NextLink href="/test">
        <a className={styles.link}>Test via NR</a>
      </NextLink>

      <NextLink href="/next">
        <a className={styles.link} data-testid="next-nr">
          Next via NR
        </a>
      </NextLink>

      {/* Native Link */}
      <a href="test" className={styles.link} data-testid="test-a">
        Test via native anchor
      </a>
    </nav>
    <Component {...pageProps} />
  </div>
);

/**
 * Mount the application but only once we are running client side
 * with further investigation we might be able to use React Routers Static router
 * to continue using server side rendering.
 */
function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted ? (
        <BrowserRouter>
          <App Component={Component} pageProps={pageProps} />
        </BrowserRouter>
      ) : null}
    </div>
  );
}

export default MyApp;
