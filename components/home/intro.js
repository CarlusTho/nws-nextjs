import styles from "../../styles/Intro.module.css";
import Button from "../common/button";
import ImageIntro from "./imageIntro";

export default function Intro() {
  const style = {
    backgroundColor: "#ffdf43",
    color: "#104798"
  };
  return (
    <div className={styles.intro}>
      <div className={styles.imageIntro}>
        <ImageIntro />
      </div>
      <div>
        <Button link={"/discover"} style={style} linkText={"Découvrir"} />
      </div>
    </div>
  );
}
