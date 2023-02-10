import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from '../../reducer/cartReducer'
const CartContext = createContext();

let getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData === null){
        return [];
    }else{
        return  JSON.parse(localCartData)
    }
}
let initialState = {
    // cart:[],
    cart: getLocalCartData(),
    total_item:'',
    total_price:''
}


const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState)
    const addToCart = (product) => {
        dispatch({type: "ADD_TO_CART", payload:{product}});
    };

    //remove item
    const removeItem = (id) =>{
        dispatch({type:"REMOVE_ITEM", payload: id});
    }

    //increment and decrement product
    const handleDec = (id) =>{
        dispatch({type:"SET_DECREMENT", payload: id});
    }

    const handleInc = (id) =>{
        dispatch({type:"SET_INCREMENT", payload: id});
    }


    //store cart data in local storage and cart count and cart price
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
    },[state.cart])

    //clear cart
     const clearCart = () =>{
        dispatch({type:"CLEAR_CART"})
     }

    return(
    <CartContext.Provider 
    value={{
        ...state, 
        addToCart,
        removeItem,
        handleDec,
        handleInc,
        clearCart,
    }}>
    {children}
    </CartContext.Provider>
    )
};

const useCartContext = () => {
    return useContext(CartContext);
}
export {CartProvider, useCartContext};