import React, { useContext } from 'react'

import { AppContext } from '@context/AppContext'

// components
import { OrderItem } from '@components/OrderItem'

// assets
import styles from '@styles/Checkout.module.scss'

export const Checkout = () => {
  const { state } = useContext(AppContext)

  return (
    <div className={styles.Checkout}>
      <div className={styles['Checkout-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['Checkout-content']}>
          <div className={styles.order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Checkout
