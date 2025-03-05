/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Cat.module.css";

interface ICat {
  fact: string;
  url: string;
}

function Cat() {
  const [cats, setCats] = useState<ICat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function loadCat(): Promise<void> {
    setLoading(true);
    setError(null);
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    const { fact } = data;
  
    const res1 = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const data1 = await res1.json();
    const { url } = data1[0];
  
    setCats((prev) => [...prev, { fact, url }]);
    setLoading(false);
  }
  
  useEffect(() => {
    loadCat();
  }, []);
  
  return (
    <div>
      <button onClick={loadCat}>GET MORE INFO</button>
      {cats.length > 0 && (
        <button onClick={() => setCats([])}>DELETE ALL DATA</button>
      )}
      {loading && <div className={styles.loader}>Loading...</div>}
      <div className={styles.catContainer}>
        {cats.map((cat, index) => (
          <div key={index} className={styles.catItem}>
            <p>{cat.fact}</p>
            <img src={cat.url} alt="cat" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cat;
