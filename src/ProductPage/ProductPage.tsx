import { IProduct } from '../components/products/types/IProduct'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductPage(): JSX.Element {
  const { productId } = useParams()
  const [product, setProduct] = useState<IProduct | undefined>(undefined)

  async function fetchProduct(): Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const obj = await res.json()
    setProduct(obj)
  }

  useEffect(() => {
    fetchProduct()
  }, [productId])

  return (
    <div>
      <h2>ProductPage</h2>
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.category}</p>
      <img src={product?.image} alt="product" />
      <Link to="../components/products">К списку товаров</Link>
    </div>
  )
}
