import { useState } from "react";
import styles from "./lesson04.module.css"


export default function Lesson04(): JSX.Element {
  const [count, setCount] = useState<number>(0); // Изменено 'let' на 'const'

  const handlePlus = (): void => {
    setCount(prev => prev + 1);
  };

  const handleMinus = (): void => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h2>React useState() hook 🪝</h2>
      <div className={styles.counter}>
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

