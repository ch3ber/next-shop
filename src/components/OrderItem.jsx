import React, { useContext } from 'react'
import Image from 'next/image'

// components
import { AppContext } from '../context/AppContext'

// assets
import closeIcon from '@icons/icon_close.png'
import styles from '@styles/OrderItem.module.scss'

export const OrderItem = ({ product }) => {
  const { removeFromCart, getCountProduct } = useContext(AppContext)

  return (
    <div className={styles.OrderItem}>
      <div className={styles['OrderItem-image']}>
        <figure>
          <Image
            className={styles['OrderItem-image-item']}
            loader={() => product.images[0]}
            src={product.images[0]}
            alt={product.title}
            width={70}
            height={70}
            layout='responsive'
          />
        </figure>
        <span>{getCountProduct(product)}</span>
      </div>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image src={closeIcon} alt='close' onClick={() => removeFromCart(product)} />
    </div>
  )
}
