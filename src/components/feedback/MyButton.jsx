import "./myButton.css"

export default function MyButton({text, func}) {
  return  <button onClick={func} className='myButton'>{text}</button>;
}
