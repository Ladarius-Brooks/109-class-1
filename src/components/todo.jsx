import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class Todo extends Component {
    state = {
        todoText: "",
        todoList: [],
    };
    render() { 
        return ( 
            <div>
                <div>
                    <input type="text" value={this.state.todoText} onChange={this.onTextChanged} placeholder="Todo text"></input>
                    <button onClick={this.addTodo} className= "btn btn-primary">Add</button>
                </div>

                <div className="list">
                    {this.state.todoList.map((t) => <div className="item">{t}</div>)}
                    <hr></hr>
                    { this.getTodoCount() }
                </div>
            </div>
         );
    }

    getTodoCount = () => {
        let count = this.state.todoList.length;
        if(count ===1) {
            return <label>We have 1 element in the list</label>;
        }

        return <label>We have {count} elements in the list</label>;
    };

    onTextChanged = (event) => {
        this.setState ({todoText: event.target.value });
    }
;
    addTodo = () => {
        if(this.state.todoText) {
            let todoList = [...this.state.todoList, this.state.todoText];
            this.setState({ todoList: todoList, todoText: "" });
            //this.setState({ todoList, todoText: ""}) mean the same thing
        }
    };
}

// create an item component div/img/price and quantity picker


 
export default Todo;