// import styles from './ChildrenProps.module.css'

import MyButton from "../myButton/MyButton";

interface IChildrenPropsProps {
    children: React.ReactNode,
    func: () => void
}

export default function ChildrenProps({children, func }: IChildrenPropsProps
 ): JSX.Element {
  return (
    <div>
      <h2>ChildrenProps:</h2>
      <p>Данные ниже переданы через props children, которыми мы описываем логику передачи данных в компонент через оборачивание открывающим и закрывающими тегами</p>
      {children}
      <MyButton text="props!" func={func} />
    </div>
     )
}