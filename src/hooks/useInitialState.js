import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  
  // Agregar Al carrito
  const addToCart = (payload) => {
    setState(
      {
        ...state,
        cart: [
          ...state.cart,
          payload
        ]
      }
    )
  }

  //Quitar del carrito
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    })
  }


  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState