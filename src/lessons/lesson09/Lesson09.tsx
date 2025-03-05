import MyButton from "../../components/myButton/MyButton"
import styles from "./lesson09.module.css"

export default function Lesson09() {
  return (
    <div>
      <h2 className={styles.textOrange}>Lesson 09. Css modules 🎨</h2>
      <p className={styles.desc}>Css modules - это способ, как мы можем изолированно работать со стилями CSS</p>
      <MyButton variant="danger"  disabled={true} text="disabled"/>
      <MyButton variant="danger"  text="danger"/>
      <MyButton variant="primary" text="primary"/>
      <p>Задачу добавления нескольких классов в css module можно решить несколькими способами</p>
      <ul className={styles.list}>
<li>Конкатенация</li>
<li>Шаблонная строка</li>
<li>Библиотека classnames</li>
      </ul>
    </div>
  )
}
