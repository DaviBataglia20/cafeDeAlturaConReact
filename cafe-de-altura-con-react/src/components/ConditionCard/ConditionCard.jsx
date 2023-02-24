import IconoCondition from "../IconoConditon/IconoCondition";

export default function ConditionCard({icono,titulo,texto}){
    return(
    <div className="bg-white rounded-lg flex flex-col gap-[16px] justify-center items-center w-[316px] h-[232px] p-[24px]">
        <IconoCondition icono={icono} />
        <h3 className="font-semibold text-lg leading-6 text-gray-900">{titulo}</h3>
        <p className="text-center font-normal text-sm leading-4 text-gray-900">{texto}</p>
    </div>
    )
}

