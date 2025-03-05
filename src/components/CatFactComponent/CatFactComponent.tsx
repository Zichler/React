
import React, { useEffect } from 'react'
import { useState } from 'react'
import style from "./CatFactComponent.module.css"


export default function CatFactComponent(): JSX.Element {
  const [fact, setFact] = useState<string>('');

  async function loadFact(): Promise<void> {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    const { fact } = data; 
    setFact(fact);
  }

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <div className={style.container}>
      <h1>Random Cat Fact</h1>
      <p>{fact}</p> 
    </div>
  );
}
