import { useEffect, useState } from "react";
import { IProduct } from "./types/IProduct";
import ProductCard from "../productCard/ProductCard";
import styles from "./products.module.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

export default function Products(): JSX.Element {
   const {addToCart} = useCart()

  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      const data: IProduct[] = await res.json();
      setProducts(data);
      setIsLoading(false);
    };

    getProducts();
  }, [limit]);

  return (
    <>
    <Cart/>
    <div className={styles.shopContainer}>
      <form>
        <label>Количество товаров:</label>
        <input
          type="number"
          value={limit}
          onChange={e => {
            const value = parseInt(e.target.value, 10);
            setLimit(value > 0 && value <= 20 ? value : limit);
          }}
        />
      </form>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        products.map((product) => (
          <div>
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
       </div>
        ))
      )}
    </div>
    </>
  );
}
