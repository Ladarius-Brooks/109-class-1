export const incrementCartCounter = () => {
    return {
        type: 'INCREMENT',
    };
};

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text
    };
};
export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    };
};