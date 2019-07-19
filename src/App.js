import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      searchValue: ''
    }
  }

  addToCart = (item) => {
    let cart = this.state.cart;
      let itemPresent = cart.find(r=> r.id === item.id);
      if (itemPresent) {
        itemPresent.count++;
      } else {
        itemPresent = item;
        cart.push(itemPresent);
      }
      this.setState({
        cart: cart
      });

  }

  search = (ev) => {
    this.setState({
      searchValue: ev.target.value
    });
  }

  render() {
    return (
      <div className="App">
        Search<input onChange={(ev) => this.search(ev)}/>
        <Items addToCart={this.addToCart} searchValue={this.state.searchValue}/>
        <Cart cart={this.state.cart}/>
      </div>
    );
  }
}

export default App;
