import './App.css'
import HeaderData from './Header/HeaderData';
import ItemList from './ItemsList/ItemList';
import Cart from './Header/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider'

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
    <CartProvider>
    <div className="App">
     {cartIsShow && <Cart onHide={hideCartIsShow}> </Cart>}
      <HeaderData onShowCart={showCarthandle}> </HeaderData>
      
      <h2> Hello </h2>
      <ItemList> </ItemList>
    </div>
    </CartProvider>
  );
}

export default App;
