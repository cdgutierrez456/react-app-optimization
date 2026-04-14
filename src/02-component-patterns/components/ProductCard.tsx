import { createContext } from 'react'

import { useProductCard } from '../hooks/useProductCard'

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {

  const { counter, increaseBy } = useProductCard()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>

        { children }

      </div>
    </Provider>
  )
}
