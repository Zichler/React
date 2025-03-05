import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./storePage.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // Добавьте другие поля, если необходимо
}

const StorePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <div>{product.price} €</div>
      {/* Добавьте другие данные о продукте здесь */}
    </div>
  );
};

export default StorePage;
