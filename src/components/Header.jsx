import React, { useContext, useState } from 'react'
import Image from 'next/image'

// components
import { Menu } from '@components/Menu'
import { MyOrder } from '@containers/MyOrder'
import { AppContext } from '@context/AppContext'

// assets
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import styles from '@styles/Header.module.scss'

export const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { getAllCountProducts } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className={styles.Nav}>
      <Image priority src={menu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Image priority src={logo} alt="logo" className={styles['nav-logo']} />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className={styles['navbar-shopping-cart']}
            onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" />
            {getAllCountProducts() > 0 && <div>{getAllCountProducts()}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}
