import { createContext , useContext, useEffect, useReducer} from "react";
import axios from 'axios'
import productReducer from "../reducer/ProductsReducer";


const AppContex = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
  isLoading : false,
  isError : false,
  products : [],
  featureProducts : [],
  isSingleLoading : false,
  singleProduct : {}
}

const AppProvider = ({children})=>{

  const [state , dispatch] = useReducer(productReducer,initialState)

    const getproducts = async (url)=>{
      dispatch({type : "SET_LOADING"})
       try {
         const res = await axios.get(url)
         const products = await res.data;
         dispatch({type : "SET_API_DATA", payload : products})
        // console.log(products);  
       } catch (error) {
        dispatch({type : "API_ERROR"})
       }
    }


    // 2 api call

    const getSingleProducts = async  (url)=>{
      dispatch({type : "SET_SIGLE_LOADING"})
            try {
        const res = await axios.get(url)
        const singleproducts = await res.data;
       
        dispatch({type : "SET_SINGLE_PRODUCT",payload : singleproducts})
            } catch (error) {
              dispatch({type : "SET_SINGE_ERROR"})
            }
    }



useEffect(()=>{
    getproducts(API)
},[])
    
  return <AppContex.Provider value={{ ...state,getSingleProducts }}>
    {children}
  </AppContex.Provider>
}

// custom Hooks

const useProductContext = ()=>{
    return useContext(AppContex)
}
export {AppProvider ,AppContex , useProductContext} ;