import React from 'react'
import Login from './Login/Login'
import Register from './Login/Register'
import { UserUI } from './Components/UserUI'
import { ItemList } from './Database/ItemList'

const initialState = {
  valid: false,
  page: 'news',
  itemList: ItemList,
  userCart: [],
  ordered: false,
  register: '',
  deliveryInfo: {
    Address1: "",
    Address2: "",
    county: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    postCode: "",
    townCity: "",
    username: ""
  },
  user: {
    id: '',
    username: '',
    password: '',
    joined: '',
    orders: []
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        username: data.username,
        joined: data.joined,
        orders: data.orders
      }
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    console.log(name, value)
    name === 're-order' ? this.setState({ordered: false}) : this.setState({[name]: value})
  }
  
  handleSubmit = () => {
    this.setState({ valid: true })
  }

  handleDeliveryInfo = info => {
    const { name, value  } = info.target
    const { deliveryInfo } = this.state
    const obj = {...deliveryInfo, [name]: value}
    console.log('handleDeliveryInfo', obj)
    this.setState({ deliveryInfo: obj })

  }

  handleOrder = () => {
    const { deliveryInfo, userCart, user } = this.state
    fetch('https://git.heroku.com/enigmatic-mesa-83961.git/order', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: this.state.user.id,
          attemptOrder: [userCart, {...deliveryInfo, username: user.username}]
      })
    })
    .then(response => response.json())
    .then(data => {
        if(data === 'failed') console.log('failed')
        else{
            this.setState({ ordered: true })
            console.log('ordered', !this.state.ordered)
            this.destroy()
        }
    })
    .catch(console.log('failed'))
    
  }
  
  handleShoppingCartChange = e => {
    const {name, id} = e.target
    if(id === 'drop') this.drop()
    else if (id === 'checkedAll') this.checkedAll()
    else{
      fetch('https://git.heroku.com/enigmatic-mesa-83961.git/itemlist', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          id: id,
        })
      })
      .then(res => res.json())
      .then(item => {
        switch(id) {
          case 'add':         this.add(item)
                              break
          case 'isChecked':   this.isChecked(item)
                              break
          case 'addcounter':  this.addcounter(item)
                              break
          case 'decrement':   this.decrement(item)
                              break
          default:
      }
      })
    }
    
    


  } 

  add = (item) => {
    const { userCart } = this.state
    let bool = false
    for(let cartItem of userCart){
      if (cartItem.itemid === item.itemid) {
          bool = true
          break
        }
    }
    
    if(!bool) {
      const arr = [...userCart, {...item, attemptquantity: 1, itemchecked: false}]
      console.log('add', arr)
      this.setState({ userCart: arr })
    }
  }

  drop = () => {
    const { userCart } = this.state
    const arr = userCart.filter(cartItem => cartItem.itemchecked === false)
    console.log('drop', arr)
    this.setState({ userCart: arr })
  }

  destroy = () => {
    console.log('destroy')
    this.setState({ userCart: [] })
  }
  
  addcounter = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemid === item.itemid && cartItem.attemptquantity < cartItem.limitedquantity) ? {...cartItem, attemptquantity: cartItem.attemptquantity + 1} : cartItem)
    console.log('addcounter', arr)
    this.setState({ userCart: arr })
  }

  decrement = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemid === item.itemid && cartItem.attemptquantity > 1) ? {...cartItem, attemptquantity: cartItem.attemptquantity - 1} : cartItem)
    console.log('decrement', arr)
    this.setState({ userCart: arr })
      
  }


  isChecked = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemid === item.itemid) ? {...cartItem, itemchecked: !cartItem.itemchecked} : cartItem)
    console.log('isChecked', arr)
    this.setState({ userCart: arr })
  }

  checkedAll = () => {
    const { userCart } = this.state
    const arr = userCart.map(cartItem => {return {...cartItem, itemchecked: !cartItem.itemchecked}} )
    console.log('checkedAll', arr)
    this.setState({ userCart: arr })
  }
  

  render() {
    return (
      <div>
        {!this.state.register && !this.state.valid ?
          <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} loadUser={this.loadUser} />
         :
         this.state.register ?
          <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          : 
          <UserUI 
              handleChange={this.handleChange} 
              username={this.state.user.username} 
              page={this.state.page} 
              handleSCChange={this.handleShoppingCartChange} 
              userCart={this.state.userCart}
              handleOrder={this.handleOrder}
              ordered={this.state.ordered}
              deliveryInfo={this.state.deliveryInfo}
              handleDeliveryInfo={this.handleDeliveryInfo}
          />
         }
      </div>
    )
  }
}

export default App;