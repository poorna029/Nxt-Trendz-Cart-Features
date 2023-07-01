import {Link} from 'react-router-dom'

import './index.css'

const NoProductsView = () => (
  <div className="p">
    <h1 style={{color: 'purple'}}>Your Cart is Empty!</h1>
    <Link to="/products">
      {' '}
      <button className="shop-button">Shop Now</button>
    </Link>
  </div>
)

export default NoProductsView
