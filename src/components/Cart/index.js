import Context from '../../context/Context'
import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary/CartSummary'

import './index.css'

const Cart = () => (
  <Context.Consumer>
    {value => {
      const {removeAllCartItems, cartList} = value

      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>

              {cartList.length > 0 ? (
                <div className="dis">
                  <button
                    type="button"
                    className="shop-button"
                    onClick={removeAllCartItems}
                    test-id="remove"
                  >
                    Remove All
                  </button>
                </div>
              ) : null}
              <CartListView />
              <CartSummary />
            </div>
          </div>
        </>
      )
    }}
  </Context.Consumer>
)

export default Cart
