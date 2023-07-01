import React from 'react'

const Context = React.createContext({
  cartList: [],
  orderState: false,
  setState: () => {},
  addCartItem: () => {},
  deleteCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  resetOrder: () => {},
  removeAllCartItems: () => {},
})

export default Context
