import React, { Component } from 'react';
import Item from "./item";
import ItemService from "../services/itemService";
import "./catalog.css";


class Catalog extends Component {
    state = { 
        items: [],
        categories: [],
        selectedCategory: "",
     };
    render() {
        let itemsToDisplay = this.state.items; 
        /**
         * if selectedCategory is not ""
         * filter items to Display
         * itemsToDisplay = itemsToDisplay.filter( DO THE MAGIC )
         * and a all category
         */
        if(this.state.selectedCategory) {
            itemsToDisplay = itemsToDisplay.filter((item) => item.category === this.state.selectedCategory);
        }


        return ( 
            <div className="catalog-page">
                <div className="categories">
                    <div 
                        key="" 
                        className="category" 
                        onClick={() => this.selectCategory("")}>

                        <h6>All Items</h6>
                    </div>

                    {this.state.categories.map((category) => (
                        <div
                            className={this.getCategoryClass(category)}

                            key={category}
                            onClick={() => this.selectCategory(category)}
                        >
                            <h6>{category}</h6>
                        </div>
                    ))}
                    </div>                
                <h5 className="section">Our Amazing Catalog</h5>

                <div className="products">
                    { itemsToDisplay.map((i) => (
                        <Item key={i.id} product={i}></Item>
                    ))}
                </div>
            </div>
         );
    }
    getCategoryClass = (catName) => {
        let catClass = "category";
        if (catName === this.state.selectedCategory) {
            catClass += " active-cat";
        }


        return catClass;
    }

    selectCategory = (catName) => {
        this.setState({selectedCategory: catName});
    };

    async componentDidMount() {
        // perfect place to get data from server / DB / AJAX call
        let service = new ItemService();
        const data = await service.getProducts();
        this.setState({ items: data });

        // identify the unique categories from data
        /**
         * travel the array and get each product
         * temp array to store the categories that i have seen
         * you ask, if this cat does not exist inside my temp array,
         * push it to the temp array
         */
        let cats = [];
        for(let i=0; i< data.length; i++) {
            let item = data[i];
            if(!cats.includes(item.category)){
                cats.push(item.category);
            }
        }
        // create an array with those cats
        // set it to the state
        this.setState({ categories: cats});
    }
}
 

export default Catalog;