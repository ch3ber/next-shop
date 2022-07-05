import React from 'react'

// components
import { ProductItem } from '@components/ProductItem'

// hooks
import { useGetProducts } from '@hooks/useGetProducts'

// assets
import styles from '@styles/ProductList.module.scss'

export const API = 'https://api.escuelajs.co/api/v1/products'

export const ProductList = () => {
  const products = useGetProducts({ api: API })

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          const haveImage = product.images.length > 0
          const haveUrl = product.images[0] !== ''
          const isString = typeof product.images[0] === 'string'

          if (haveImage && haveUrl && isString) {
            return <ProductItem product={product} key={product.id} />
          }
        })}
      </div>
    </section>
  )
}
