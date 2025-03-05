import styles from './RegisterForm.module.css'

import { useFormik } from "formik";
import registerSchema from "../yup/RegisterSchema";
import MyButton from '../myButton/MyButton';

interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}
export default function RegisterForm():JSX.Element {
  const formik = useFormik({
initialValues: {
  username: "", 
  email: "", 
  password: "", 
  confirmPassword: "",
}as IRegister, validationSchema:registerSchema,
onSubmit:(values, {resetForm}) => {
  console.log(values);
  resetForm()
},
});
  return (
    <div className={styles.registerContainer}>
      <h1>Registration</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} value={formik.values.username} type="text" placeholder='username' name='username' />
        <input onChange={formik.handleChange} value={formik.values.email} type="text" placeholder='email' name='email' />
        <input onChange={formik.handleChange} value={formik.values.password} type="text" placeholder='password' name='password' />
        <input onChange={formik.handleChange} value={formik.values.confirmPassword} type="text" placeholder='confirmPassword' name='confirmPassword' />
<MyButton type='submit' text='registration' />
      </form>
            <span className={styles.errorMessage}>{formik.errors.username}</span>
            <span className={styles.errorMessage}>{formik.errors.email}</span>
            <span className={styles.errorMessage}>{formik.errors.password}</span>
            <span className={styles.errorMessage}>{formik.errors.confirmPassword}</span>
    </div>
  );
}