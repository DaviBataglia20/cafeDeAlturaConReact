export default function Envio({titulo,texto,total}){
    return(
        <div className="box-content flex flex-row items-center p-0 h-8 gap-[16px] w-[776px]">
            <input className="inputEnvio"  checked  type="radio"  name="tipoDeEnvio" id={titulo} value = ""/>
            <div className="flex flex-col items-start p-0 h-8 gap-[4px] w-[657px]">
                <h2 className="not-italic font-semibold text-sm leading-4 text-black">{titulo}
</h2>
                <p className="not-italic font-normal text-sm leading-4">{texto}</p>
            </div>
            <div>
                <h3 className="not-italic font-semibold text-lg leading-6 text-black">{total}</h3>
            </div>
        </div>
    )
}