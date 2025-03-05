import { fellowship } from "./fellowship";
import { useEffect } from "react";
import HeroCards from "../../components/heroCards/HeroCards"; 
import styles from "./lesson05.module.css"

interface Hero {
  id: number;
  name: string;
  image: string;
  age: number;
  isDark: boolean;
  weapons: string[];
}

export default function Lesson05() {
  useEffect(() => {
    console.log(fellowship);
  }, []);

  return (
    <div>
      <h2>React map() components</h2>
      <div className={styles.heroContainer}>
        {fellowship.map((hero: Hero) => (
          <HeroCards hero={hero} key={hero.id} />
        ))}
      </div>
    </div>
  );
}
