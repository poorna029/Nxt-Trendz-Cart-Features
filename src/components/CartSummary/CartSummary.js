import {AiFillCheckCircle} from 'react-icons/ai'

import Context from '../../context/Context'

import './index.css'

const CartSummary = () => (
  <Context.Consumer>
    {value => {
      const {cartList, orderState, setOrder} = value
      let total

      if (cartList.length > 0) {
        total = cartList.map(q => q.price * q.quantity).reduce((a, i) => a + i)
      }

      const checkoutHandler = () => (
        <div className="order">
          <div className="suborder">
            <AiFillCheckCircle size={50} />
            <h1>Order placed</h1>
            <h3 style={{color: 'green'}}>Thank you , visit again</h3>
          </div>
        </div>
      )
      if (orderState === true) {
        return checkoutHandler()
      }

      if (cartList.length === 0) {
        return null
      }

      return (
        <div className="poorna">
          <div className="wi">
            <h1 style={{color: 'blue'}}>
              Order Total : <span style={{color: 'teal'}}>{total} /-</span>
            </h1>
            <h3 style={{color: 'purple'}}>
              <span>
                <h2 style={{display: 'inline-block', color: 'teal'}}>
                  {cartList.length}
                </h2>
              </span>
              : No of Items in Cart
            </h3>
            <button type="button" className="but" onClick={setOrder}>
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default CartSummary
