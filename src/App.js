import React from 'react'
import { UserList } from './UserList/UserList'
import { Login } from './Login/Login'
import { UserUI } from './Components/UserUI'
import { ItemList } from './Database/ItemList'
import { DeliveryInfo } from './Database/DeliveryInfo'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      valid: false,
      page: 'news',
      itemList: ItemList,
      userCart: [],
      userList: UserList,
      ordered: false,
      deliveryInfo: DeliveryInfo,
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    name === 're-order' ? this.setState({ordered: false}) : this.setState({[name]: value})
  }
  
  handleSubmit = () => {
    this.state.userList.forEach(user => (user.username === this.state.username && user.password === this.state.password) ? this.setState({valid: true}) : console.log('failed'))
  }

  handleDeliveryInfo = info => {
    const { name, value} = info.target
    const { deliveryInfo } = this.state
    const arr = deliveryInfo.map(user => (user.username === this.state.username) ? {...user, [name]: value} : user)
    console.log('handleDeliveryInfo', arr)
    this.setState({ deliveryInfo: arr })

  }

  handleOrder = () => {
    const { userList, deliveryInfo, userCart } = this.state
    const arr = userList.map((user, idx) => (user.username === this.state.username) ? {...user, order: [...user.order, [ userCart, deliveryInfo[idx] ] ]} : user)
    this.setState({ userList: arr, ordered: true })
    console.log('ordered', !this.state.ordered, arr)
    this.destroy()
  }
  
  handleShoppingCartChange = e => {
    const {name, id} = e.target

    switch(id) {
        case 'add':         this.state.itemList.forEach((item) => (item.itemName === name)? this.add(item) : false) 
                            break
        case 'drop':        this.drop()
                            break
        case 'isChecked':   this.state.itemList.forEach((item) => (item.itemName === name)? this.isChecked(item) : false) 
                            break
        case 'addcounter':  this.state.itemList.forEach((item) => (item.itemName === name)? this.addcounter(item) : false) 
                            break
        case 'decrement':   this.state.itemList.forEach((item) => (item.itemName === name)? this.decrement(item) : false) 
                            break
        case 'checkedAll':  this.checkedAll() 
                            break
        default:
    }
  } 

  add = (item) => {
    const { userCart } = this.state
    let bool = false
    for(let cartItem of userCart){
      if (cartItem.itemId === item.itemId) {
          bool = true
          break
        }
    }
    
    const arr = [...userCart, {...item, attemptQuantity: 1}]
    console.log('add', arr)
    if(!bool) this.setState({ userCart: arr })
  }

  drop = () => {
      const { userCart } = this.state
      const arr = userCart.filter(cartItem => cartItem.itemChecked === false)
      console.log('drop', arr)
      this.setState({ userCart: arr })
  }

  destroy = () => {
    console.log('destroy')
    this.setState({ userCart: [] })
  }
  
  addcounter = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemId === item.itemId && cartItem.attemptQuantity < cartItem.limitedQuantity) ? {...cartItem, attemptQuantity: cartItem.attemptQuantity + 1} : cartItem)
    console.log('addcounter', arr)
    this.setState({ userCart: arr })
  }

  decrement = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemId === item.itemId && cartItem.attemptQuantity > 1) ? {...cartItem, attemptQuantity: cartItem.attemptQuantity - 1} : cartItem)
    console.log('decrement', arr)
    this.setState({ userCart: arr })
      
  }


  isChecked = (item) => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem) => (cartItem.itemId === item.itemId) ? {...cartItem, itemChecked: !cartItem.itemChecked} : cartItem)
    console.log('isChecked', arr)
    this.setState({ userCart: arr })
  }

  checkedAll = () => {
    const { userCart } = this.state
    const arr = userCart.map(cartItem => {return {...cartItem, itemChecked: !cartItem.itemChecked}} )
    console.log('checkedAll', arr)
    this.setState({ userCart: arr })
  }
  

  render() {
    return (
      <div>
        {!this.state.valid ?
         <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          : 
          <UserUI 
              handleChange={this.handleChange} 
              username={this.state.username} 
              page={this.state.page} 
              handleSCChange={this.handleShoppingCartChange} 
              userCart={this.state.userCart}
              handleOrder={this.handleOrder}
              ordered={this.state.ordered}
              deliveryInfo={this.state.deliveryInfo}
              handleDeliveryInfo={this.handleDeliveryInfo}
              userList={this.state.userList}
          />
         }
      </div>
    )
  }
}

export default App;