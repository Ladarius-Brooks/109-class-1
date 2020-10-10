import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCartCounter } from '../store/actions/index';
import ItemInCart from "./itemInCart";


class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className ="cartTitle">Items you added to the cart will be here</h1>
                <h3 className ="cartTitle">There are {this.props.products.length} items on your cart</h3>

               <div className="itemsInCart">
                   {this.props.products.map(product => 
                   <ItemInCart key={product.product.id} info={product}></ItemInCart> )}
               </div>

            </div>
         );
    }


};

const mapStateToProps = (state) => {
    return{
        products: state.cart,
    };
};


export default connect(mapStateToProps, { incrementCartCounter } )(Cart);