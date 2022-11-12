export const setProducts = (products) => {
    return {
        type: 'productList/setProducts',
        payload: products,
    };
};

export const selectProduct = (product) => {
    return {
        type: 'product/selectProduct',
        payload: product,
    };
};
export const removeProduct = () => {
    return {
        type: 'product/removeProduct',
    };
};
