import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { useShoppingCart } from '../hooks/useShoppingCart'

import { products } from '../data/products'

import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart()

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
            value={shoppingCart[product.id]?.count || 0}
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
              onChange={(productInCart) => onProductCountChange(productInCart)}
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
