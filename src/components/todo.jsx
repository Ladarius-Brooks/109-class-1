import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import "./todo.css"

class Todo extends Component {
    state = {
        todoText: ""
    };
    render() { 
        return ( 
            <div>
                <h1 className = "title">List of Task</h1>
                <div>
                    <input type="text" value={this.state.todoText} onChange={this.onTextChanged} placeholder="Todo text"></input>
                    <button onClick={this.addTodo} className= "btn btn-primary">Add</button>
                </div>

                <div className="list">
                    {this.props.todo.map((t) => <div className="item">{t}</div>)}
                    <hr></hr>
                    { this.getTodoCount() }
                </div>
            </div>
         );
    }

    getTodoCount = () => {
        let count = this.props.todo.length;
        if(count ===1) {
            return <label className="listAmount">We have 1 element in the list</label>;
        }

        return <label className="listAmount">We have {count} elements in the list</label>;
    };

    onTextChanged = (event) => {
        this.setState ({todoText: event.target.value });
    };

    addTodo = () => {
       // let inputTxt = this.state.todoText;
        
        if(this.state.todoText) {
            this.props.addTodo(this.state.todoText);
            this.setState({todoText: ""});
           // let todoList = [...this.state.todoList, inputTxt];
        } // in case that only spaces were inserted in the input, clean
            //this.setState({ todoList, todoText: ""}) mean the same thing
           
        };
    };


// create an item component div/img/price and quantity picker

const mapStateToProps = (state) => {
    return{
        todo: state.todo,
    }
};
 
export default connect(mapStateToProps, {addTodo})(Todo);