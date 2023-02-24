export default function FormularioPago (){
    return(
        <div className="w-80 flex flex-col">
            <form className=" flex flex-col gap-[16px]" action="">
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Titular</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="Nombre del titular" />
                </div>
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Número de la Tarjeta</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="1234 1234 1234 1234"/>
                </div>

                <div className="flex w-full justify-between gap-10" >
                    <div className="flex flex-col w-[55%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Fecha de caducidad</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="MM / YY"/>
                    </div>
                    <div className="flex flex-col w-[60%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header">CVC</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="123" />
                    </div>
                </div>
            
            </form>
        </div>
    )
}