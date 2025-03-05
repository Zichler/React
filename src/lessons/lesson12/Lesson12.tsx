import { useFormik } from "formik"
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson12.module.css"

interface IFormik {
firstname: string,
lastname: string,
email: string
}

export default function Lesson12():JSX.Element {

const formik = useFormik({
initialValues: {
firstname: "nik",
lastname: "zichler",
email: "nik@gmail.com"

} as IFormik,
onSubmit: (values: IFormik) => {
    console.log(values);
}
})

  return (
    <div>
      <h2>Lesson12. Formik</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} value={formik.values.firstname} type="text" placeholder="firstname" name="firstname" />
        <input onChange={formik.handleChange} value={formik.values.lastname} type="text" placeholder="lastname" name="lastname" />
        <input onChange={formik.handleChange} value={formik.values.email} type="email" placeholder="email" name="email"  />
        <MyButton type="submit" text="send data"/>
      </form>
      <h3>Что нужно чтобы форма заработала:</h3>
      <ol className={styles.list}>
        <li>Установили formik через "npm i formik"</li>
        <li>Создали обьект formik в который присвоили результат вызова хука useFormik() с настройками в обьекте</li>
        <li>В обьекте два обязательных ключа: initialValues (начальное значение), onSubmit (действие формы)</li>
        <li>Для form добавили в onSubmit  formik.handleSubmit</li>
        <li>Для input добавили в onChange  formik.handleChange</li>
        <li>Для input в value добавили его значение через formik.values</li>
        <li>Для input в поле name должно быть то же значение что и соответствующий ключ в initialValues</li>
      </ol>
    </div>
  )
}