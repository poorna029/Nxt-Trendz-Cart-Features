import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import {Component} from 'react'

import Context from './context/Context'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {cartList: [], orderState: false}

  setOrder = () => {
    this.setState({orderState: true})
  }

  resetOrder = () => {
    this.setState({orderState: false})
  }

  addCartItem = product => {
    const {cartList} = this.state
    this.setState({orderState: false})

    const res = cartList.filter(p => p.id === product.id)
    if (res.length) {
      console.log('exists')
      this.setState(p => ({
        cartList: p.cartList.map(z => {
          if (z.id === product.id) {
            return {...z, quantity: z.quantity + 1}
          }
          return z
        }),
      }))
    } else {
      this.setState(p => ({cartList: [...p.cartList, product]}))
    }
    console.log('druvitha')
  }

  deleteCartItem = productId => {
    const {cartList} = this.state
    const newList = cartList.filter(p => p.id !== productId.id)
    this.setState({cartList: newList})
    console.log('delete')
  }

  decrementCartItem = product => {
    const {cartList} = this.state
    if (product.quantity === 1) {
      this.deleteCartItem(product)
    } else {
      this.setState(s => ({
        cartList: s.cartList.map(x => {
          if (x.id === product.id) {
            return {...x, quantity: x.quantity - 1}
          }
          return x
        }),
      }))
    }
  }

  removeAllItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList, orderState} = this.state

    return (
      <BrowserRouter>
        <Context.Provider
          value={{
            cartList,
            orderState,
            resetOrder: this.resetOrder,
            setOrder: this.setOrder,
            addCartItem: this.addCartItem,
            incrementCartItemQuantity: this.addCartItem,
            decrementCartItemQuantity: this.decrementCartItem,
            removeAllCartItems: this.removeAllItems,
            removeCartItem: this.deleteCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    )
  }
}

export default App
