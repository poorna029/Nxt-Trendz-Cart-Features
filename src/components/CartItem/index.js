import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import Context from '../../context/Context'

import './index.css'

const CartItem = ({cartItemDetails}) => (
  <Context.Consumer>
    {value => {
      const {
        cartList,
        addCartItem,
        decrementCartItemQuantity,
        removeCartItem,
      } = value

      const {title, brand, quantity, price, imageUrl} = cartItemDetails

      const onIncrementQty = () => {
        addCartItem(cartItemDetails)
      }

      const onDecrementQty = () => {
        decrementCartItemQuantity(cartItemDetails)
      }

      const onDelete = () => {
        removeCartItem(cartItemDetails)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                test-id="minus"
                onClick={onDecrementQty}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onIncrementQty}
                test-id="plus"
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-delete-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                testid="remove"
                className="remove-button"
                type="button"
                onClick={onDelete}
              >
                Remove
              </button>
            </div>
          </div>
          <button className="delete-button" type="button" onClick={onDelete}>
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </Context.Consumer>
)

export default CartItem
