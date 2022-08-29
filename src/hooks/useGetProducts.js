import { useEffect, useState } from "react";
import axios from 'axios'

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

	useEffect(()=>{
		async function fetchApi(){
			const response = await axios(API)
			setProducts(response.data)
		}
		fetchApi()
	},[])
  return products
}

export default useGetProducts