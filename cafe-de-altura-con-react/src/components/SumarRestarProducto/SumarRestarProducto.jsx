import { useContext, useState } from "react"
import { CartContext } from "../../App"
export default function SumarRestarProducto({quantity,_id}){
    
    const {cart,setCart} =useContext(CartContext)
    

    const sum = () =>{
        setCart(prev =>{
            const i = prev.findIndex(e => e._id === _id)
            prev[i].quantity += 1
            return [...prev]
        })
    }
    const res = () =>{
        setCart(prev =>{
            const i = prev.findIndex(e => e._id === _id)
            if(prev[i].quantity > 1) {
                prev[i].quantity -= 1
            } else {
                prev.splice(i, 1);
            }
            return [...prev]
        })
    }

    return(
        <>
        <button onClick={res} className="bg-white cursor-pointer border-0"><svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.83008H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
        <div className="flex flex-col justify-center items-center p-2 w-6 h-6 gap-[8px] bg-[#2a5b451a] rounded-[50px] pt-2"><p className="not-italic font-normal text-xs leading-4 text-[#2A5B45]">{quantity}</p></div>
        <button onClick={sum} className="bg-white cursor-pointer border-0"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1.83008V7.83008M7 7.83008V13.8301M7 7.83008H13M7 7.83008H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
        </>
    )
}