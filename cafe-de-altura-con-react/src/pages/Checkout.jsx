import Header from "../components/Section/Header"
import SecondFooter from "../components/SecondFooter/SecondFooter"
import FormularioEnvio from "../components/FormularioEnvio/FormularioEnvio"
import FormularioPago from "../components/FormularioPago/FormularioPago"
import Envio from "../components/Envio/Envio"
import TotalCarrito from "../components/TotalCarrito/TotalCarrito"
import { useContext, } from "react"
import { CartContext } from "../App"


export default function Checkout({envio}){
  
    const {cart} =useContext(CartContext)
    return(<>
        <Header/>
        <h3 className="font-medium text-2xl text-green-800 text-center pt-11">Checkout</h3>
        <div className="flex justify-between p-16">
            <div className="flex flex-col gap-3 pb-24 w-[50%]">
                <h2 className="not-italic font-semibold text-lg leading-6 text-black">Seleccionar metodo de pago</h2>
                <Envio titulo={"Tarjeta de débito"} texto={"Opción estándar sin seguimiento"} />
                <FormularioEnvio/>
                <hr className="bg-gray-300 flex justify-center w-[1000px] h-[1px]"></hr>
                <Envio  titulo={"Transferencia bancaria a la cuenta ES12 1234 1234 123457890"} texto={"Será necesario recibir el comprobante de la transferencia para preparar tu pedido"} />
                <hr className="bg-gray-300 flex justify-center w-[1000px] h-[1px]"></hr>
                
                <FormularioPago/>
            </div>
            <TotalCarrito cart={cart} envio={envio} />
        </div>
        <SecondFooter/>
    </>)
}