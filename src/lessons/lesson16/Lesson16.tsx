import styles from './lesson16.module.css'

import ChildrenProps from "../../components/childrenProps/ChildrenProps";
import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";
import { useFormik } from 'formik';
import * as Yup from "yup"

const schema = Yup.object().shape({
  email: Yup.string().email('type valid email').required("email is required field"),
  password: Yup.string().min(8, "password need more than 8 symbols").required("password is required")
})

export default function Lesson16(): JSX.Element {
  const formik = useFormik({
  initialValues: {
    email: "formik@gmail.com",
    password: "formik123"
  } as { email: string; password: string},
  validateOnChange: false,
  validationSchema: schema,
  onSubmit: (values, {resetForm}) => {
    console.log(values);
    resetForm();
  }
});
  return (
    <div className={styles.lessonContainer}>
      <h2>lesson16: practice before test</h2>
      <ChildrenProps func={() => console.log("Много разных пропсов")}>
        <p style={{ color: "red" }}>Переданные данные</p>
        <ol>
          <li style={{listStyle: "none"}}>данные из lesson 16</li>
          <li style={{listStyle: "none"}}>можно передать много данных</li>
        </ol>
      </ChildrenProps>
      <h2>2. input components + formik</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <MyInput formik={formik}  name='email' placeholder = "email" label='type your email, please'/>
        <MyInput formik={formik}  name="password" placeholder = "password" label='type your secret pass'/>
        <MyButton text="sign in"/>
      </form>
    </div>
  ); 
}
