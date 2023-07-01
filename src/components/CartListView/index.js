import Context from '../../context/Context'

import CartItem from '../CartItem'

import NoProductsView from '../NoProductsView/NoProductsView'

import './index.css'

// const cartList = [
//   {
//     title: 'Product 1',
//     brand: 'Brand Name',
//     id: 1001,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 5,
//   },
//   {
//     title: 'Product 2',
//     brand: 'Brand Name',
//     id: 1002,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 2,
//   },
// ]

const CartListView = () => (
  <Context.Consumer>
    {value => {
      const {cartList, orderState} = value

      if (cartList.length === 0) {
        return <NoProductsView />
      }

      if (orderState) {
        return null
      }

      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </Context.Consumer>
)
export default CartListView
