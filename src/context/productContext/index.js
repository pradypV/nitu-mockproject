import { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from '../../reducer/productReducer'
import axios from "axios";
const ProductContext = createContext();

let getLocalProductData = () => {
    let localProductData = localStorage.getItem("productItems");
    if (localProductData === null){
        return [];
    }else{
        return  JSON.parse(localProductData)
    }
}
let initialState = {
    // products:[],
    loading:true,
    error:'',
    products: getLocalProductData(),
}


const ProductProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            dispatch({type:"FETCH_SUCCESS", payload: response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_ERROR"})
        })
      }, []);
      
      //products add
    const addNewProduct = (products) => {
        dispatch({type: "ADD_NEW_PRODUCT", payload: products});
    };

       //products add
       const editProduct = (products) => {
        dispatch({type: "EDIT_PRODUCT", payload: products});
    };



    //remove products
    const deleteProduct = (id) =>{
        dispatch({type:"REMOVE_PRODUCT", payload: id});
    }



    //store products data in local storage 
    useEffect(()=>{
        localStorage.setItem("productItems", JSON.stringify(state.products));
    },[state.products])


    return(
    <ProductContext.Provider 
    value={{
        ...state,
        deleteProduct,
        addNewProduct,
        editProduct,
    }}>
    {children}
    </ProductContext.Provider>
    )
};

const useProducContext = () => {
    return useContext(ProductContext);
}
export {ProductProvider, useProducContext};