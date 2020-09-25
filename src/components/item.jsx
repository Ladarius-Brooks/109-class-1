import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";
import "font-awesome/css/font-awesome.css";

class Item extends Component {
    state = {
        minimum: this.props.product.minimum || 1,
        quantity: this.props.product.minimum || 1,
     };
    render() { 
        return ( 
            <div className="item">
                <img src={"/images/products/" + this.props.product.image} alt="Product"></img>

                <h4>{this.props.product.title}</h4>

                <div className="prices">
                    <h5><span className="price-title">Total</span> ${this.props.product.price * this.state.quantity}</h5>
                    <h6><span className="price-title">Price</span> ${this.props.product.price}</h6>
                </div>

                <QuantityPicker minimum={this.state.minimum} value={this.state.quantity} onValueChange={ (qnt) => this.handleQuantityChange(qnt) }></QuantityPicker>

                <button className= "btn-add btn btn-sm btn-primary"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
            </div>
         );
    }

    handleQuantityChange = (qnt) => {
        this.setState({ quantity: qnt});
    };
}
 
export default Item;