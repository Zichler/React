import React, { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import styles from "./store.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Добавьте другие поля, если необходимо
}

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState<number>(2); // По умолчанию 2 продукта

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, [limit]);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <div>
      <form className={styles.form}>
        <label>
          Limit:
          <input type="number" value={limit} onChange={handleLimitChange} />
        </label>
      </form>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <StoreCard key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <div>{product.price} €</div>
            {/* Добавьте другие данные о продукте здесь */}
          </StoreCard>
        ))}
      </div>
    </div>
  );
};

export default Store;
