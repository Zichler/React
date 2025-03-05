/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Lesson05 from "../lesson05/Lesson05";


export default function Lesson08():JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [dog, setDog] = useState<string>("")
  const [toggle, setToggle] = useState<boolean>(true)

  const handleIncrease = (): void =>{
    setCount(prev => prev +1)
  }

const handleToggle = ():void =>{
  setToggle(prev => !prev)
}
  useEffect(() => {
    console.log('сработал useEffect!')
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      // если обновлять состояние в fetch запросе без useEffect() мы попадем в бесконечный цикл
      .then(data => setDog(data.message));
  }, []);
  return (
    <div>
      <h2>UseEffect + migrate components ⚡</h2>
      <p>Чтобы использовать типизированный компонент, нужно передать все обязательное props, которые указаны в его interface</p>
      <MyButton text={`${toggle ? "hide" : "show"} component`} func={handleToggle} type="button"/>
      <MyButton text="rerender component" func={handleIncrease} type="button"/>
      <MyButton/>
      {
        toggle && ( <Lesson05/>)}
    </div>
  )
}
