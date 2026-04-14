import { ReactElement } from 'react'

import { useProductCard } from '../hooks/useProductCard'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
}

interface Product {
  id: string
  title: string
  img?: string
}

interface ProductButtonsProps {
  counter: number
  increaseBy: (x: number) => void
}

export const ProductImage = ({ img = '' }) => {
  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="Product Image" />
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <span className={styles.productDescription}>{title}</span>
  )
}

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
  return (
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
  )
}

export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProductCard()

  return (
    <div className={styles.productCard}>

      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />

      <ProductButtons
        counter={counter}
        increaseBy={increaseBy}
      /> */}

      { children }

    </div>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
