import Header from "../components/Section/Header"
import SecondFooter from "../components/SecondFooter/SecondFooter"
import { useContext,useEffect,useState } from "react"
import CestaProducto from "../components/CestaProducto/CestaProducto"
import { CartContext } from "../App"
import IconoCondition from "../components/IconoConditon/IconoCondition"
import Button from "../components/Button/Button"
import { Link } from "react-router-dom"
export default function Sucess({envio}){
    const {cart} =useContext(CartContext)
    
    const [subtotal,setSubtotal] = useState()
    const total = (envio === "GRATIS")?subtotal:(subtotal + 9)
    
    useEffect(() => {
        
        setSubtotal(prev => {
            const totalPrice = 0
            const sub = cart.reduce((acc,e) => acc += e.quantity * e.price , totalPrice)
            return sub
        })

        
      },[cart])
 return(
    <>
    <Header/>
    <div className="flex flex-col items-center pt-5 w-[400px] gap-4 mx-auto">
        <IconoCondition icono={<svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.70776 18.6262C8.31723 18.2357 7.68407 18.2357 7.29354 18.6262C6.90302 19.0168 6.90302 19.6499 7.29354 20.0404L8.70776 18.6262ZM11.334 22.6667L10.6269 23.3738C11.0174 23.7643 11.6506 23.7643 12.0411 23.3738L11.334 22.6667ZM18.7078 16.7071C19.0983 16.3166 19.0983 15.6834 18.7078 15.2929C18.3172 14.9024 17.6841 14.9024 17.2935 15.2929L18.7078 16.7071ZM23.6673 7.66667V27.6667H25.6673V7.66667H23.6673ZM21.334 30H4.66732V32H21.334V30ZM2.33398 27.6667V7.66667H0.333984V27.6667H2.33398ZM4.66732 5.33333H8.00065V3.33333H4.66732V5.33333ZM18.0007 5.33333H21.334V3.33333H18.0007V5.33333ZM4.66732 30C3.37865 30 2.33398 28.9553 2.33398 27.6667H0.333984C0.333984 30.0599 2.27408 32 4.66732 32V30ZM23.6673 27.6667C23.6673 28.9553 22.6226 30 21.334 30V32C23.7272 32 25.6673 30.0599 25.6673 27.6667H23.6673ZM25.6673 7.66667C25.6673 5.27343 23.7272 3.33333 21.334 3.33333V5.33333C22.6226 5.33333 23.6673 6.378 23.6673 7.66667H25.6673ZM2.33398 7.66667C2.33398 6.378 3.37865 5.33333 4.66732 5.33333V3.33333C2.27408 3.33333 0.333984 5.27343 0.333984 7.66667H2.33398ZM7.29354 20.0404L10.6269 23.3738L12.0411 21.9596L8.70776 18.6262L7.29354 20.0404ZM12.0411 23.3738L18.7078 16.7071L17.2935 15.2929L10.6269 21.9596L12.0411 23.3738ZM11.334 2H14.6673V0H11.334V2ZM14.6673 6.66667H11.334V8.66667H14.6673V6.66667ZM11.334 6.66667C10.0453 6.66667 9.00065 5.622 9.00065 4.33333H7.00065C7.00065 6.72657 8.94075 8.66667 11.334 8.66667V6.66667ZM17.0007 4.33333C17.0007 5.622 15.956 6.66667 14.6673 6.66667V8.66667C17.0606 8.66667 19.0007 6.72657 19.0007 4.33333H17.0007ZM14.6673 2C15.956 2 17.0007 3.04467 17.0007 4.33333H19.0007C19.0007 1.9401 17.0606 0 14.6673 0V2ZM11.334 0C8.94075 0 7.00065 1.9401 7.00065 4.33333H9.00065C9.00065 3.04467 10.0453 2 11.334 2V0Z" fill="white"/>
</svg>} />
        <h2 className="font-medium text-2xl text-green-800 text-center pt-11">El pedido ha sido realizado con éxito</h2>
        <p className="not-italic font-semibold text-sm leading-4 w-[60%]">El pedido #12387 se encuentra en preparación. 
Lo recibirás dentro de las fechas acordadas en tu envío. 
Hemos enviado un ticket a tu correo electrónico.</p>
    </div>
    <div className="flex flex-col justify-center items-center h-[1000px] gap-[24px]">
        <div className="flex flex-col items-start h-auto gap-[24px] bg-[#F7F5F3] w-[65%] p-8">
                        <h3 className="not-italic font-semibold text-lg leading-6">Tu pedido</h3>
                        {cart.map((product, i) => {
                            return (
                                <CestaProducto _id={product._id}  brand={product.brand} img_url={product.img_url} price={product.price} quantity={product.quantity} key={i}/>
                            )
                        })}
                          <hr className="bg-gray-300 flex justify-center w-80 h-[1px]"></hr>
        <div className="flex justify-between w-full">
            <p className="not-italic font-normal text-sm leading-4">SUBTOTAL</p>
            <p className="not-italic font-semibold text-sm leading-4">{subtotal},00 €</p>
        </div>
        
        <div className="flex flex-row justify-between items-start p-0 h-4 w-full">
            <p className="not-italic font-normal text-sm leading-4">ENVÍO</p>
            <p className="not-italic font-semibold text-sm leading-4">{(envio === "GRATIS"?"GRATIS":"9,00€")}</p>
        </div>
        <hr className="bg-gray-300 flex justify-center w-80 h-[1px]"></hr>
        <div className="flex flex-row justify-between items-start p-0 h-10 w-full">
            <p className="not-italic font-semibold text-sm leading-4">TOTAL</p>
            <div className="flex flex-col items-end p-0 w-full h-10 pr-3 pt-2">
                <p className="w-12 h-4 not-italic font-semibold text-sm leading-4">{total},00€</p>
                <p className="not-italic font-normal text-xs leading-4">Incluye {(total/100)*4} de IVA</p>
            </div>
        </div> 
        </div>
        <Link to="/"><Button estilo={"flex flex-row items-center justify-center w-[200px] h-10 bg-green-800 rounded no-underline not-italic font-semibold text-sm leading-4 text-white"} text={"Volver  a la tienda"}/></Link>
    </div>
    <SecondFooter/>
    </>
 )   
}