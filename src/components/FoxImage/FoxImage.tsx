import React, { useEffect, useState } from "react";
import styles from "./foxImage.module.css"
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";

interface Ifox {
  image: string;
  link: string;
}

export default function FoxImage(): JSX.Element {
  const [URL, setURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchFox = async (): Promise<void> => {
    const res = await fetch("https://randomfox.ca/floof");
    const data: Ifox = await res.json();
    setURL(data.image);
    setIsLoading(false)
  };

  const handleGetFox = ():void => {
    setIsLoading(true)
    setTimeout(() => {fetchFox()}, 1500)
  }
  useEffect(() => {
    handleGetFox();
  }, []);
  return (
    <div>
      {isLoading ? <Loader /> : (
        <div>
          <h1>Random Fox Image</h1>
          <div className={styles.container}>
            <img src={URL} alt="Random-Fox" />
          </div>
          <MyButton func={fetchFox} text="get new fox" />
        </div>
      )}
    </div>
  );
}
