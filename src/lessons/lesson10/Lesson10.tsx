import Cat from "../../components/cat/Cat";
import styles from "./lesson10.module.css";

export default function Lesson10() {
  return (
    <div>
      <h1 className={styles.facts}>Интересные фаткы о котах!🙀</h1>
      <Cat/>
    </div>
  )
}
