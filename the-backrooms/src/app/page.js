import styles from "./styles/page.module.css";
import Home from "./Home";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>
          &copy;2025 <a href="https://jacobtorres.net/" target="_blank">Jacob A. Torres</a>
      </footer>
    </div>
  );
}
