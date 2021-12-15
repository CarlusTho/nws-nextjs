import styles from "../../styles/Intro.module.css";
import Button from "../common/button";
import ImageIntro from "./imageIntro";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.imageIntro}>
        <ImageIntro />
        
      </div>
      <div>
      <Button link={"/discover"} linkText={"Découvrir"}/>
      </div>
    </div>
  );
}
