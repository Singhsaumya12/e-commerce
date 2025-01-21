//create a context
//provider
//consumer => useContext Hook

import axios from "axios";
import { createContext, useContext ,useEffect, useReducer} from "react";
import reducer from "../reducer/productReducer"

const API_URL = process.env.REACT_APP_MyBackendServerUrl;
const AppContext = createContext();

const API = API_URL;
console.log("API_URL:", API_URL); // Debugging
console.log("API:", API);  
const initialState = {
    isLoading: false,
    isError: false,
    products:[],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct: {},
}

const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initialState);
    
    const getProducts =  async (url) =>
    {   
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            // console.log("-file: productcontex.js -line 10 - getproducts - res",
            //    res 
            // );
            const products = await res.data;
            //  console.log("-file: productcontex.js -line 10 - getproducts - products",
            //    products
            // );
            dispatch({type:"SET_API_DATA",payload: products})
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }
    

    // 2nd Api for single product

    const getSingleProduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"});
      try {
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type:"SET_SINGLE_PRODUCT",payload: singleProduct})
      } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"});
      }  
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return ( 
    <AppContext.Provider value={{...state ,getSingleProduct}}>{children}</AppContext.Provider>
    );
};

//custom hooks used to get method that call api

const useProductContext = () => {
    return useContext(AppContext);
}
    
export {AppProvider , AppContext ,useProductContext};