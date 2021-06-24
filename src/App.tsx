import * as React from 'react'
import Login from './Login/Login'
import Register from './Login/Register'
import { UserUI } from './Components/UserUI'

interface IState {
  valid: boolean;
  page: string;
  userCart: Array<ICartItem>;
  ordered: boolean;
  register: boolean;
  deliveryInfo: {
    Address1: string;
    Address2: string;
    county: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    postCode: string;
    townCity: string;
    username: string;
  },
  user: {
    id: number;
    username: string;
    password?: string;
    joined: string;
    orders: string[];
  }
}

const initialState = {
  valid: false,
  page: 'news',
  userCart: [],
  ordered: false,
  register: false,
  deliveryInfo: {
    Address1: "",
    Address2: "",
    county: "",
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    postCode: "",
    townCity: "",
    username: ""
  },
  user: {
    id: 0,
    username: '',
    password: '',
    joined: '',
    orders: []
  }
}

interface IProps {

}

interface IApiData {
  itemchecked: boolean;
  ​itemdescription: string;
  ​itemid: number;
  ​itemimage: string;
  ​itemname: string;
  ​itemprice: number;
  ​itemquantity: number;
  ​itemtype: string;
  ​limitedquantity: number;
}

export interface ICartItem {
  attemptquantity: number;
  itemchecked: boolean;
  itemdescription: string;
  itemid: number;
  itemimage: string;
  itemname: string;
  itemprice: number;
  itemquantity: number;
  itemtype: string;
  limitedquantity: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = initialState
  }

  private loadUser = (data: any) : void => {
    this.setState({
      user: {
        id: data.id,
        username: data.username,
        joined: data.joined,
        orders: data.orders
      },
      deliveryInfo: {
        ...initialState.deliveryInfo,
        username: data.username
      }
    })
  }

  protected handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const {name, value} = e.currentTarget
    console.log(name, value)
    switch(name) {
      case 'logout':    this.setState(initialState);
                        break;
      case 're-order':  this.setState({ordered: false});
                        break;
      case 'register':  this.setState({register: !this.state.register});
                        break;
      default:          this.setState(prevState => ({...prevState, [name]: value}));
                        break;
    }
  }
  
  protected handleSubmit = () : void => {
    this.setState({ valid: true })
  }

  protected handleDeliveryInfo = (info: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name, value  } = info.currentTarget
    const { deliveryInfo } = this.state
    const obj = {...deliveryInfo, [name]: value}
    this.setState({ deliveryInfo: obj })

  }

  private async readOrderApi() {
    const response = await fetch('https://enigmatic-mesa-83961.herokuapp.com/order', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: this.state.user.id,
          attemptOrder: [this.state.userCart, {...this.state.deliveryInfo, username: this.state.user.username}]
      })
    })
    const data = response.json();
    return data
  }

  protected handleOrder = () : void => {
    this.readOrderApi()
    .then((data: string) => {
        if(data === 'failed') console.log('failed')
        else{
            this.setState({ ordered: true })
            console.log('ordered', data)
            this.destroy()
        }
    })
    
  }

  private async readItemListApi(e: React.SyntheticEvent<HTMLInputElement>) {
    const response = await fetch('https://enigmatic-mesa-83961.herokuapp.com/itemlist', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: e.currentTarget.name,
        id: e.currentTarget.id,
      })
    })
    const data: IApiData = await response.json()
    return data
  }
  
  protected handleShoppingCartChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { id } = e.currentTarget
    if(id === 'drop') this.drop()
    else if (id === 'checkedAll') this.checkedAll()
    else{
      this.readItemListApi(e)
      .then((item: IApiData) => {
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
      .catch(err => console.error(err))
    }
  } 


  private add = (item: IApiData) : void => {
    const { userCart } = this.state
    let bool = false

    for(let cartItem of userCart){
      console.log('usercart' , userCart, cartItem)
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

  private drop = () : void => {
    const { userCart } = this.state
    const arr = userCart.filter((cartItem: ICartItem) => cartItem.itemchecked === false)
    console.log('drop', arr)
    this.setState({ userCart: arr })
  }

  private destroy = () : void => {
    console.log('destroy')
    this.setState({ userCart: [] })
  }
  
  private addcounter = (item: IApiData) : void => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem: ICartItem) => (cartItem.itemid === item.itemid && cartItem.attemptquantity < cartItem.limitedquantity) ? {...cartItem, attemptquantity: cartItem.attemptquantity + 1} : cartItem)
    console.log('addcounter', arr)
    this.setState({ userCart: arr })
  }

  private decrement = (item: IApiData) : void => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem: ICartItem) => (cartItem.itemid === item.itemid && cartItem.attemptquantity > 1) ? {...cartItem, attemptquantity: cartItem.attemptquantity - 1} : cartItem)
    console.log('decrement', arr)
    this.setState({ userCart: arr })
      
  }


  private isChecked = (item: IApiData) : void => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem: ICartItem) => (cartItem.itemid === item.itemid) ? {...cartItem, itemchecked: !cartItem.itemchecked} : cartItem)
    console.log('isChecked', arr)
    this.setState({ userCart: arr })
  }

  private checkedAll = () : void => {
    const { userCart } = this.state
    const arr = userCart.map((cartItem: ICartItem) => {return {...cartItem, itemchecked: !cartItem.itemchecked}} )
    console.log('checkedAll', arr)
    this.setState({ userCart: arr })
  }
  

  render(): JSX.Element {
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