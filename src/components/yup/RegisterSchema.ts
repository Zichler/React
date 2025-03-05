import * as Yup from "yup";

const registerSchema = Yup.object().shape({

username: Yup.string()
.min(3, "Please enter at least 3 characters")
.max(20, "Please enter no more than 20 characters")
.matches(/^[a-zA-Z0-9_]+$/, "Please enter only letters, numbers, and symbols")
.required("user is required"),
email: Yup.string()
.email("incorrect email format")
.required("email is required"),
password: Yup.string()
.required("Password is required")
.min(8, "Please enter at least 8 characters")
.max(32, "Please enter no more than 32 characters")
.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
.matches(/[a-z]/, "Password must contain at least one lowercase letter")
.matches(/\d/, "Password must contain at least one number")
.matches(/[@$!%*?&]/, "Password must contain at least one special character"),
confirmPassword: Yup.string()
.required("СonfirmPassword is required")
.oneOf([Yup.ref("password")], "Password must match the previously created password")
});
export default registerSchema;