import { useState } from "react";
import style from './Sandwich.module.css';
import { useTheme } from "../../themeContect/useTheme";


export default function Sandwich(): JSX.Element {
    const [sandwich, setSandwich] = useState<string>("Бутербродный конфигуратор: ");
    const{theme, toggleTheme} = useTheme();
  
    function handleAddBread(): void {
        setSandwich(`${sandwich} Bread🍞`)
    }
  
    function handleAddCheese(): void {
        setSandwich(`${sandwich} Cheese🧀`)
    }
  
    function handleAddSalami(): void {
        setSandwich(`${sandwich} Salami🥩`)
    }
  
    function handleAddSalat(): void {
        setSandwich(`${sandwich} Salat🥗`)
    }
    function handleClear(): void {
        setSandwich("Бутербродный конфигуратор: ")
    }
  
    return (
    <div className={`${style.container} ${theme === "dark" ? style.dark : style.light}`}>
        <h2>Sandwich</h2>
      <img className={style.image} src="https://calorizator.ru/sites/default/files/imagecache/product_512/product/hamburger.jpg" alt="Sandwich" />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
      <button type="button" className={style.btn} onClick={handleAddBread}>Add Bread</button>
      <button type="button" className={style.btn} onClick={handleAddCheese}>Add Cheese</button>
      <button type="button" className={style.btn} onClick={handleAddSalami}>Add Salami</button>
      <button type="button" className={style.btn} onClick={handleAddSalat}>Add Salat</button>
      <button type="button" className={style.btn} onClick={handleClear}>Eat everything</button>
    </div>
    <button type="button" className={style.themeToggle} onClick={toggleTheme}>Переключить тему  (текущая: {theme}) </button>
    </div>
  )
}
