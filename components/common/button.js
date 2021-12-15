import Link from "next/link";
import styles from "../../styles/Button.module.css";

export default function Button(props) {
  return (
    <>
      <Link href={props.link}>
        <a className={styles.btn}>{props.linkText}</a>
      </Link>
    </>
  );
}


