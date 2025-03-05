
import { useState } from 'react';
import style from './Counter.module.css';
import { useTheme } from '../../themeContect/useTheme';

function Counter(): JSX.Element{
const [counter, setCounter] = useState<number>(0)
const {theme, toggleTheme} = useTheme();

function handlePlus(): void {
    setCounter(counter +1)
}

function handleMinus(): void {
    setCounter(counter -1)
}

return(
    <div className={`${style.container} ${theme === "dark" ? style.dark : style.light}`}>
        <h1>Добавление денег</h1>
        <img className={style.image} src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={style.container}>
        <button className={style.btn} type="button" onClick={handleMinus}>Убрать деньги</button>
        <span className={style.span_counter}>{counter}EURO</span>
        <button className={style.btn} type="button" onClick={handlePlus}>Добавить деньги</button>
        <button type='button' className={style.themeToggle} onClick={toggleTheme}>Изменить тему (текущая тема: {theme})</button>
        </div>
    </div>
    
)
}
export default Counter

