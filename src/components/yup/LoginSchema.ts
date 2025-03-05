import * as Yup from "yup";

const loginSchema = Yup.object().shape({
email: Yup.string()
.email("incorrect email format")
.required("email is required"),
password: Yup.string()
.required("password is required")
.min(8, "Please enter at least 8 characters")
});

export default loginSchema;
