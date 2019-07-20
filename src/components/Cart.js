import React from 'react';

export default class Cart extends React.Component {
  render() {
    let cartItems = this.props.cart;
    let selectedItems = cartItems.map(item => {
      let addButton = <button onClick={() => this.props.addToCart(item)}>Add</button>;
      let subButton = <button onClick={() => this.props.removeFromCart(item)}>Remove</button>;
      return <div className="item"><span>{item.name}</span> <span>{item.count}</span>{addButton} {subButton}</div>
    });
    return (
      <div><p>Cart</p>
        {selectedItems}
        </div>
    );
  }
}
