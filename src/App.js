import './App.css'
import HeaderData from './Header/HeaderData';
import ItemList from './ItemsList/ItemList';
import Cart from './Header/Cart';
import { useState } from 'react';

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
    <div className="App">
     {cartIsShow && <Cart onHide={hideCartIsShow}> </Cart>}
      <HeaderData onShowCart={showCarthandle}> </HeaderData>
      
      <h2> Hello </h2>
      <ItemList> </ItemList>
    </div>
  );
}

export default App;
