import { createSelector } from "reselect"

export const selectProductSelector = (state) => state.selectProduct.product

export const productListSelector = (state) => state.allProducts.productList

export const cartListSelector = (state) => state.cartListProducts.cartList
export const cartpopupSelector = (state) => state.cartListProducts.cartPopUp.status
export const searchTextSelector = (state) => state.filter.searchText
export const sortSelector = (state) => state.filter.sortValue
export const currentUser = (state) => state.auth.login.currentUser
export const currentProfile = (state) => state.profile.user.userInfor

export const remainProducts = createSelector(
    productListSelector,
    searchTextSelector,
    sortSelector,
    (productList, searchText, sortValue) => {
        const currentList = productList.filter((product) => product.product_name.toLowerCase().includes(searchText.toLowerCase()));
        if (sortValue === "0") {
            return currentList;
        }
        else if (sortValue === "1") {
            return currentList.sort((a, b) => a.product_name.localeCompare(b.product_name));
        }
        else if (sortValue === "2") {
            return currentList.sort((a, b) => b.product_name.localeCompare(a.product_name));
        }
        else if (sortValue === "3") {
            return currentList.sort((a, b) => a.price - b.price);
        }
        else return currentList.sort((a, b) => b.price - a.price);
    }
)

export const remainUser = createSelector(
    currentUser,
    currentProfile
)