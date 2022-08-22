import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles["outer-navbar"]}>
        <li className={styles.first}>
          <ul>
            <div className={styles.logo}><Link href='/'>Logo</Link></div>
          </ul>
        </li>
        <li className={styles.second}>
          <ul className={styles["nav-button"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
                <div>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles['slider']}></span>
              </label>
              </div>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
