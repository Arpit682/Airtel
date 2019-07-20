import React from 'react';
import Item from './Item';

export default class Items extends React.Component {

  addToCart = (item) => {
    this.props.addToCart(item);
  }

  render() {
    let listOfItems = [{
      id: 1,
      name: "Apple",
      count: 1
    }, {
      id: 2,
      name: "Orange",
      count: 1
    }, {
      id: 3,
      name: "Mango",
      count: 1
    }, {
      id: 4,
      name: "Banana",
      count: 1
      }];

    let itemMap = listOfItems.map((item) => {
      let className;
      if (item.name.includes(this.props.searchValue) && this.props.searchValue !== '') {
        className = "boldSearch";
      } else {
        className = "";
      }
      return <Item key={item.id} options={className} item={item} addToCart={this.props.addToCart}/>
    })
    return (
      <div className="items">
        <p>Items</p>
        {itemMap}
      </div>

    );
  }
}
