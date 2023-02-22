import SumarRestarProducto from "../SumarRestarProducto/SumarRestarProducto"
export default function CestaProducto(){
    return(
        <div className="flex flex-col items-start p-0 gap-[24px] w-[776px]">
            <div className="flex items-center p-0 h-12 gap-[14px] w-[776px]">
                    <SumarRestarProducto/>
                    <div><img className="w-[55.66px] h-[55.66px]" src="" alt="" /></div>
                <div className="flex flex-col items-start p-0 h-8 gap-[4px] w-[506.34px]">
                    <p className="not-italic font-semibold text-sm leading-4">cafe colombia</p>
                    <p className="not-italic font-normal text-sm leading-4">Paquete de café, 250 gr</p>
                </div>
                <div className="flex flex-row items-end p-0 w-12 h-6 gap-[8px]">
                    <p className="not-italic font-semibold text-lg leading-6">9,00</p>
                </div>
            </div>    
        </div>
    )
}