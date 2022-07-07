import React from 'react'
import Link from 'next/link'

// assets
import styles from '@styles/Menu.module.scss'

export const Menu = () => {
  const paths = {
    root: '/',
  }

  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href={paths.root}>
            <a href={paths.root} className={styles.title}>
              My orders
            </a>
          </Link>
        </li>
        <li>
          <Link href={paths.root}>
            <a href={paths.root}>My account</a>
          </Link>
        </li>
        <li>
          <Link href={paths.root}>
            <a href={paths.root}>Sign out</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
