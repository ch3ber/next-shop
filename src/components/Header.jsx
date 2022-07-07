import React, { useContext, useState } from 'react'
import Link from 'next/link'
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
      <div className={styles.menu}>
        <Image src={menu} alt="menu" />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/">
          <div className={styles['nav-logo']}>
            <Image priority src={logo} alt="logo" />
          </div>
        </Link>

        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>
            <button
              className={(styles['Header-button'], styles['Header-user-name'])}
              onClick={handleToggle}>
              platzi@example.com
            </button>
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <button
              className={styles['Header-button']}
              onClick={() => setToggleOrders(!toggleOrders)}>
              <Image src={shoppingCart} alt="shopping cart" />
              {getAllCountProducts() > 0 && <div>{getAllCountProducts()}</div>}
            </button>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}
