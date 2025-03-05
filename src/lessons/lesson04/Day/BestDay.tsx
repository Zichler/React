import { useState } from "react";
import styles from "./day.module.css"

export default function BestDay() {
  const [Day, setDay] = useState(false);

  const toggleDay = () => {
    setDay(true);
  };
  const toggleNight = () => {
    setDay(false);
  };

  return (
    <div className={styles.imageContainer}>
      <h1>{Day ? "День 🌞" : "Ночь🌘"}</h1>

      <img 
      src={Day ? "https://cdn.unenvironment.org/styles/article_billboard_image/s3/2021-09/tree-2916763_1920.jpg?h=15e72a48&itok=bAymJWGW" : "https://wallpaper.forfun.com/fetch/21/21b30fd14fb21f14240e945bb02f98e2.jpeg"} 
      alt={Day ? "Day" : "Night"} 
      />
      <div className={styles.buttonsContainer}>
        <button onClick={toggleNight}>Off</button>
        <button onClick={toggleDay}>On</button>
      </div>
    </div>
  );
}
