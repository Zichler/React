import styles from "./myButton.module.css"
import cn from "classnames"

interface iButtonProps {
type?: "button" | "submit" | "reset"
text?: string 
func?: () => void
disabled?: boolean
variant?: "primary" | "danger";
}

function MyButton({ type = "submit", text = "click", func =() => {}, disabled = false, variant = "primary"}: iButtonProps) {
  return <button type={type} onClick={func} className={cn(styles.myButton, {
    [styles.primary]: variant === "primary", 
    [styles.danger]: variant === "danger", 
    [styles.disabled]: disabled === true, 
  
  
  } )}>{text}</button>
 
}

export default MyButton;
