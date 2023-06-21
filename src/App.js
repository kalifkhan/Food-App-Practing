import './App.css'
import HeaderData from './Header/HeaderData';
import ItemList from './ItemsList/ItemList';
import Cart from './Header/Cart';
import { Fragment, useState } from 'react';
import CartProvider from './store/CartProvider'

import Favorite from './Favorites/Favorite';
import FavCartReducer from './Store_2/FavCartReducer';
function App() {

  const [cartIsShow , setCartIsShow] = useState(false);

  const showCarthandle=()=>
  {
    setCartIsShow(true);
  }
  const hideCartIsShow =()=>{
    setCartIsShow(false);
  }


  return (
    <Fragment>
      <div className="App">
    <CartProvider>
    
     {cartIsShow && <Cart onHide={hideCartIsShow}> </Cart>}
      <HeaderData onShowCart={showCarthandle}> </HeaderData>
      
      <h2> Hello </h2>
      <ItemList> </ItemList> 
    
    </CartProvider>
    <h2> helelde,e </h2>
    <FavCartReducer> 
      
      <Favorite> </Favorite> 
    </FavCartReducer>
    </div>
    </Fragment>
  );
}

export default App;
