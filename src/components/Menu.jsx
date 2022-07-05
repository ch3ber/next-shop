import React from 'react'

// assets
import styles from '@styles/Menu.module.scss'

export const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <a href='/' className='title'>
            My orders
          </a>
        </li>
        <li>
          <a href='/'>My account</a>
        </li>
        <li>
          <a href='/'>Sign out</a>
        </li>
      </ul>
    </div>
  )
}
