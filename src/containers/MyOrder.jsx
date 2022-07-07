import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// components
import { OrderItem } from '@components/OrderItem'
import { AppContext } from '@context/AppContext'

// assets
import arrow from '@icons/flechita.svg'
import styles from '@styles/MyOrder.module.scss'

export const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    let total = 0
    state.cart.forEach((product) => {
      total += product.price * state.countProducts[product.title]
    })

    return total
  }
  sumTotal()

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>{sumTotal()}</p>
        </div>

        <Link href="/checkout">
          <a className={styles['primary-button']}>Checkout</a>
        </Link>
      </div>
    </aside>
  )
}
