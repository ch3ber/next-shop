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
            src={product?.images[0]}
            alt={product?.title}
            width={70}
            height={70}
            className={styles['OrderItem-image-item']}
          />
        </figure>
        <span className={styles.countItem}>{getCountProduct(product)}</span>
      </div>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={closeIcon} alt="close" onClick={() => removeFromCart(product)} />
    </div>
  )
}
