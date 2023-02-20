import IconoCondition from "../IconoConditon/IconoCondition";

export default function ConditionCard({icono,titulo,texto}){
    return(
    <div className="h-56 bg-white rounded-lg flex flex-col justify-center items-center w-[316px] h-[232px]">
        <IconoCondition icono={icono} />
        <h3 className="font-semibold text-lg leading-6 text-gray-900">{titulo}</h3>
        <p className="text-center font-normal text-sm leading-4 text-gray-900">{texto}</p>
    </div>
    )
}

