import { createSelector } from "reselect"

export const selectProductSelector = (state) => state.selectProduct.product

export const productListSelector = (state) => state.allProducts.productList

export const cartListSelector = (state) => state.cartListProducts.cartList

export const searchTextSelector = (state) => state.searchText.searchText

export const remainProducts = createSelector(
    productListSelector,
    searchTextSelector,
    (productList, searchText) => {
        return productList.filter((product) => product.product_name.toLowerCase().includes(searchText.toLowerCase()));
    }
)