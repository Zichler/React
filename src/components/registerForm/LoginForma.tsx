import { useFormik } from "formik";
import loginSchema from "../yup/LoginSchema";
import styles from './LoginForma.module.css'
import MyButton from "../myButton/MyButton";
interface ILogin {
email: string;
password: string;
}


export default function LoginForma():JSX.Element {
const formik = useFormik({
initialValues: {
    email: "",
    password: "",
}as ILogin, validationSchema:loginSchema,
onSubmit:(values, {resetForm}) => {
console.log(values);
resetForm()
}
});
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
      <input onChange={formik.handleChange} value={formik.values.email} type="text" placeholder="email" name="email" />
      <input onChange={formik.handleChange} value={formik.values.password} type="text" placeholder="password" name="password" />
      <MyButton type="submit" text="login" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
      <span className={styles.errorMessage}>{formik.errors.password} </span>
    </div>
  )
}