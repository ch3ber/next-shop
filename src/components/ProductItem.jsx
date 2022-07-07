import React, { useContext } from 'react'
import Image from 'next/image'

// modules
import { AppContext } from '@context/AppContext'

// assets
import buttonImage from '@icons/bt_add_to_cart.svg'
import styles from '@styles/ProductItem.module.scss'

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className={styles.ProductItem}>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={100}
        height={100}
        layout="responsive"
        loading="lazy"
      />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button
          className={styles['ProductItem-button']}
          onClick={() => handleClick(product)}>
          <figure>
            <Image src={buttonImage} alt="shopping cart" />
          </figure>
        </button>
      </div>
    </div>
  )
}
