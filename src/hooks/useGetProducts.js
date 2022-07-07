import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetProducts = ({ api, limit = 30, offset = 0 }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      return axios
        .get(`${api}?limit=${limit}&offset=${offset}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error))
    }

    getProducts()
  }, [api, limit, offset])

  return products
}
