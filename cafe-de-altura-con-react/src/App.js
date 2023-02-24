import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import Cesta from "./pages/Cesta"
import Checkout from "./pages/Checkout";
import Sucess from "./pages/Sucess";

export const CartContext = createContext();

function App() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
 
  const[counter,setCounter] = useState("ola")

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    setCounter(prev => {
      const len = cart.reduce((acc,e) => acc += e.quantity , 0)
      return len
  })
  },[cart])

  const [envio,setEnvio] = useState("GRATIS");


  return (
    <div className="w-full  min-h-screen relative">
      <BrowserRouter>
        <CartContext.Provider value={{cart, setCart,counter}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Cesta" element={<Cesta envio={envio} setEnvio={setEnvio} />} />
            <Route path="Checkout" element={<Checkout envio={envio} />} />
            <Route path="Sucess" element={<Sucess envio={envio}/>}/>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
