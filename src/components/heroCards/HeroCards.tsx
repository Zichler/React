import styles from "../../lessons/lesson05/lesson05.module.css"

interface Hero {
  name: string;
  image: string;
  age: number;
  isDark: boolean;
  weapons: string[];
}

interface HeroCardsProps {
  hero: Hero;
}

export default function HeroCards({ hero }: HeroCardsProps) {
  return (
    <div className={styles.heroCard}>
      <h3>{hero.name}</h3>
      <div className={`${styles.imgHero} ${hero.isDark ? styles.heroCardDark : styles.heroCardLight}`}>
        <img src={hero.image} alt="hero" />
      </div>
      <p>{hero.age} years old</p>
      <p>{hero.isDark ? "Villain 🦹" : "Hero 🦸"}</p>
      <p>Weapons: {hero.weapons.join(" | ")}</p>
    </div>
  );
}
