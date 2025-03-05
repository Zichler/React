// import styles from './productPage.module.css'

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../products/types/IProduct";

const initialProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data: IProduct) => setProduct(data));
    }, 1500);
  }, [id]);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img width={200} src={product.image} alt="product image" />
      <p>Price: {product.price}€</p>
      <div>
        <Link to="/lesson14">back to main page</Link>
      </div>
    </div>
  );
}
