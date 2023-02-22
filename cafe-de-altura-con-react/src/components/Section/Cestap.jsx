import CestaProducto from "../CestaProducto/CestaProducto"
import Envio from "../Envio/Envio"
import TotalCarrito from "../TotalCarrito/TotalCarrito"
import ContadorCesta from "../ContadorCesta/ContadorCesta"
export default function Cestap (){
    return(
        <div className="flex flex-col items-center p-10 w-full gap-[24px] ">
            <ContadorCesta/>
            <div className="flex flex-row justify-center items-start p-0 w-full gap-[24px]">
                <div className="flex flex-col items-start p-2 h-auto gap-[24px]">
                    <h3 className="not-italic font-semibold text-lg leading-6">Productos</h3>
                    <CestaProducto/>
                    <CestaProducto/>
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