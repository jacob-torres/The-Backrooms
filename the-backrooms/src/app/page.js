import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        <h1>Welcome to the Backrooms</h1>
        <p>Congratulations! Or should I say my condolences?</p>
          <p>If you're here, it means you've no-clipped into The Backrooms.</p>
          <button>
            <Link href="/levels/0/">Start Exploring!</Link>
          </button>
      </main>

      <footer className={styles.footer}>
          &copy;2025 <a href="https://jacobtorres.net/" target="_blank">Jacob A. Torres</a>
      </footer>
    </div>
  );
}
