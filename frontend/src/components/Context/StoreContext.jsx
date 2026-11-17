import { createContext, useEffect, useState } from "react"
import { food_list } from "../../assets/assets"

export const StoreContext=createContext()


const StoreContextProvider=(props)=>{
const[cartItems,setCartItems]=useState({})
const url="http://localhost:4000"
const [token,setToken]=useState("")

const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}

const removeFromcart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalItems += cartItems[item];
        }
    }

    return totalItems;
}

useEffect(()=>{
   if(localStorage.getItem('token')){
    setToken(localStorage.getItem("token"))

   }
},[])


 const getTotalCartAmount=()=>{
    let totalamount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item)
            totalamount+=itemInfo.price*cartItems[item]
        }
    }
    return totalamount

}

const contextValue={
    food_list,
    addToCart,
    removeFromcart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    token,setToken

}


return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
        
    </StoreContext.Provider>
)
}
export default StoreContextProvider