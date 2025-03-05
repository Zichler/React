import { FormikProps } from "formik"
import styles from "./myinput.module.css"

interface IMyInput {
name: string
type?: "password" | "email" | "text" | "number"
placeholder?: string
label?: string
formik: FormikProps<any>
}

export default function MyInput({name, type = "text", placeholder = "input text", label = "label text", formik }: IMyInput): JSX.Element {
  const {handleChange, values, errors} = formik
  return (
    <div>
    {errors[name] ? <label className={styles.errorText}>{errors[name] as string}</label> : <label>{label}</label>}
      <input onChange={handleChange} value={values [name]} className={styles.myInput} placeholder={placeholder} name={name} type={type} />
    </div>
  );
}