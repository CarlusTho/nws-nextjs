import Image from "next/image";
import Link from "next/link";
import logo from "../../public/header.svg";
import styles from "../../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logoMargin}>
          <Image src={logo} priority alt="Logo Rouen Insolite" />
        </a>
      </Link>
    </div>
  );
}
