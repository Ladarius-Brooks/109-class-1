import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = {
        quantity: this.props.value,
        name: "Ladarius"
    };
    render() { 

        return (
            <div className="quantityPicker">
                <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
                <label className="quantity-value">{this.state.quantity}</label>
                <button onClick={this.decrease} disabled={this.state.quantity === this.props.minimum} className="btn btn-sm btn-info">-</button>
            </div>
            
          );
    }

    increase = () => {
        let val = this.state.quantity + 1;
        this.setState({ quantity: val});
        this.props.onValueChange(val)

    };

    decrease = () => {
        let newVal = this.state.quantity -1;
        if(newVal>= this.props.minimum) {
            this.setState({ quantity: newVal});
            this.props.onValueChange(newVal);
        }
        
    };
}
 
export default QuantityPicker;