import React, { useContext } from "react";
import FavCartContext from "../Store_2/FavCartContext";

const Favorite=(props)=>{

    const pass  = useContext(FavCartContext);

    console.log("favorite Component render");
    console.log(pass)

    return <div> 
        <h2> favorites list items {pass} </h2>
        <button> Favorite  </button>
         
    </div>
}

export default Favorite
