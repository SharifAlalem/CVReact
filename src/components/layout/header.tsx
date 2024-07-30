import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.transparent + ' ' + styles.header}>
      <div id={styles.desktop}>
        <div id={styles.logoDesktop}>
          <Link href="/"> CVue Maker</Link>
        </div>
        <div id={styles.headerDesktopNav}>
          <Link href="/" className={styles.navItem} >Home</Link>
          <Link href="/about" className={styles.navItem} >About</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;