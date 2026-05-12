import { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product } from '../interfaces/interfaces'

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '/coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe Mug 2 - Card',
  img: '/coffee-mug2.png'
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart(oldShoppingCart => {

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart

        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count
        }
      }
    })
  }

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, productInCart]) => (
            <ProductCard
              key={key}
              product={productInCart}
              className='bg-dark text-white'
              style={{ width: '100px' }}
              value={productInCart.count}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
