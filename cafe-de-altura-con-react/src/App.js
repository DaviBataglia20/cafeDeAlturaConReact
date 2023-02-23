import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import Cesta from "./pages/Cesta"

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


  return (
    <div className="w-full  min-h-screen">
      <BrowserRouter>
        <CartContext.Provider value={{cart, setCart,counter}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Cesta" element={<Cesta />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
