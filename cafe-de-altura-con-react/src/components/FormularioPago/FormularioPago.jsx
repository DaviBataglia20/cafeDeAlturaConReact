export default function FormularioEnvio (){
    return(
        <div className="w-full flex flex-col gap-[16px] ">

            <h2 className="not-italic font-semibold text-lg leading-6 text-black">Direccion de envio</h2>
            <form className=" flex flex-col gap-[16px]" action="">
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Nombre</label>
                    <input className=" hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id=""/>
                </div>
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Apellidos</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Telefono</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="+34 600 6000 600" />
                </div>
                <div className="flex flex-col">
                    <label className="not-italic font-normal text-xs leading-4 text-black"  htmlFor="">Email</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                </div>
                <label className="not-italic font-normal text-xs leading-4 text-black"  htmlFor="">País</label>
                <div className=" focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] hover:border-[1px] hover:border-solid hover:border-[#9B9EA3] box-border flex flex-row items-center p-0 bg-white rounded-md w-full border-[1px] border-solid border-[#D1D5DB] shadow-[0px 1px 2px rgba(0, 0, 0, 0.05) ]">
                        <select className="focus:outline-none rounded-md flex flex-row  items-center bg-white shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)] border-0 py-[9px] px-[13px] gap-[4px] w-full " name="tel" id="tel">
                            <option className="text-[#515051]" value="">Seleccionar</option>
                            <option className="text-[#515051]" value="">España</option>
                            <option className="text-[#515051]" value="">Brasil</option>
                        </select>
                </div>
                <div className="flex w-full justify-between gap-10" >
                    <div className="flex flex-col w-[50%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Poblacion</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col w-[60%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">Cp</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" placeholder="123" />
                    </div>
                </div>
                <div className="flex w-full justify-between gap-10" >
                    <div className="flex flex-col w-[50%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">calle</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id=""/>
                    </div>
                    <div className="flex flex-col w-[60%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">n</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">piso</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col w-[60%]">
                        <label  className="not-italic font-normal text-xs leading-4 text-black" htmlFor="">puerta</label>
                        <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="" id="" />
                    </div>
                </div>
            </form>
        </div>
    )
}