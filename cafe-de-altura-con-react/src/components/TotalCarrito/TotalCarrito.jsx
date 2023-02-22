import Button from "../Button/Button"
export default function TotalCarrito(){
    return(
        <div className="flex flex-col items-start p-6 bg-[#F7F5F3] gap-[16px] w-[384px] h-[280px]">
            <div className="flex flex-col items-start p-0 h-40 gap-[16px] w-[336px]">
                <h3 className="not-italic font-semibold text-lg leading-6 text-black">Total del carrito</h3>
                <hr className="bg-gray-300 flex justify-center w-80 h-[1px]"></hr>
                <div className="flex flex-row justify-between items-start p-0 h-4">
                    <p className="not-italic font-normal text-sm leading-4">SUBTOTAL</p>
                    <p className="not-italic font-semibold text-sm leading-4"></p>
                </div>
                
                <div className="flex flex-row justify-between items-start p-0 h-4">
                    <p className="not-italic font-normal text-sm leading-4">ENVÍO</p>
                    <p className="not-italic font-semibold text-sm leading-4"></p>
                </div>
                <hr className="bg-gray-300 flex justify-center w-80 h-[1px]"></hr>
                <div className="flex flex-row justify-between items-start p-0 h-10 w-[350px]">
                    <p className="not-italic font-semibold text-sm leading-4">TOTAL</p>
                    <div className="flex flex-col items-end p-0 w-24 h-10">
                        <p className="w-12 h-4 not-italic font-semibold text-sm leading-4">a</p>
                        <p className="not-italic font-normal text-xs leading-4">Incluye<span></span> de IVA</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-start p-0 h-10 gap-[16px] w-[310px]">
                <Button estilo={"flex flex-row items-center justify-center w-32 h-10 bg-green-800 rounded no-underline not-italic font-semibold text-sm leading-4 text-white"} text={"Ir a checkout"}/>
                <Button estilo={"flex flex-row items-center justify-center w-40 h-10 rounded bg-transparent no-underline not-italic font-semibold text-sm leading-4 text-green-800"} text={"Seguir comprando"} />
            </div>
        </div>
    )
}