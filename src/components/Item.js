import React from 'react';

export default class Item extends React.Component {
  render() {
    let finalClass = "item " + this.props.options;

    return (
      <div className={finalClass} onClick={() => this.props.addToCart(this.props.item)}>
        {this.props.item.name}
      </div>

    );
  }
}
