import { useProductCard } from '../hooks/useProductCard'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
  product: Product
}

interface Product {
  id: string
  title: string
  img?: string
}

export const ProductCard = ({ product }: Props) => {

  const { counter, increaseBy } = useProductCard()

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.img ? product.img : noImage} alt="No Image" />

      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >-</button>

        <div className={styles.countLabel}>{ counter }</div>

        <button
          className={styles.buttonAdd}
          onClick={() => increaseBy(1)}
        >+</button>
      </div>

    </div>
  )
}
