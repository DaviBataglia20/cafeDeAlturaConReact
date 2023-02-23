import { useContext, } from "react"
import { CartContext } from "../../App"
export default function ContadorCesta(){
    const {counter} =useContext(CartContext)
    
    

    return(
        <h2 className="font-medium text-2xl text-green-800 text-shadow-texto-sombra">Cesta ({counter})</h2>
    )
}