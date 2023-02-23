import CestaProducto from "../CestaProducto/CestaProducto"
import Envio from "../Envio/Envio"
import TotalCarrito from "../TotalCarrito/TotalCarrito"
import ContadorCesta from "../ContadorCesta/ContadorCesta"
import { useContext } from "react"
import { CartContext } from "../../App"
export default function Cestap (){
    const {cart} =useContext(CartContext)
    return(
        <div className="flex flex-col items-center p-10 w-full gap-[24px] ">
            <ContadorCesta/>
            <div className="flex flex-row justify-center items-start p-0 w-full gap-[24px]">
                <div className="flex flex-col items-start p-2 h-auto gap-[24px]">
                    <h3 className="not-italic font-semibold text-lg leading-6">Productos</h3>
                    {cart.map((product, i) => {
                        return (
                            <CestaProducto _id={product._id}  brand={product.brand} img_url={product.img_url} price={product.price} key={i}/>
                        )
                    })}
                    <h3 className="not-italic font-semibold text-lg leading-6">Seleccionar envío</h3>
                    <Envio titulo={"Envío 5-7 días"} texto={"Opción estándar sin seguimiento"} total={"GRATIS"}/>
                    <div></div>
                    <Envio titulo={"Envío urgente 24h"} texto={"Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00)."} total={"9,00"}/>
                </div>
            <TotalCarrito/>
            </div>    
        </div>
    )
}