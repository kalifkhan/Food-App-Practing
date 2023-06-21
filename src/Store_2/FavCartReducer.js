import React, { useContext } from "react";
import FavCartContext from "./FavCartContext";

const FavCartReducer=(props)=>{
    //const favItemCon = useContext(FavCartContext);
    
    const passData = "Biryani"; 
    return (<FavCartContext.Provider  value={passData}>
            {props.children}
    </FavCartContext.Provider>
)}
export default FavCartReducer;


