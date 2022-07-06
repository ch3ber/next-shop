import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetProducts = ({ api, limit = 30, offset = 0 }) => {
  const [products, setProducts] = useState([])
  // https://api.escuelajs.co/api/v1/products?limit=30&offset=0
  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${api}?limit=${limit}&offset=${offset}`)
      setProducts(response.data)
    })()
  }, [])

  return products
}
