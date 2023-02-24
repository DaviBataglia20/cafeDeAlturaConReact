import Button from "../Button/Button"
import FotoMejorCafe from "../FotoMejorCafe/FotoMejorCafe"
export default function DeLaPlantaATuCasa(){
    return(
    <div className="px-12 py-10 bg-MejorCafe">
        <div className="flex justify-between items-center gap-6 ">
            <div className="flex flex-col gap-4">
            <h3 className="text-green-800 font-semibold text-lg leading-6 text-shadow-texto-sombra">De la planta a tu taza</h3>
                    <h1 className="font-semibold text-4xl text-shadow-texto-sombra">El mejor café del mundo, ahora en tu casa</h1>
                    <p className="font-normal text-sm leading-4 text-shadow-texto-sombra">Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
            <div className="flex gap-4">
                <Button estilo={"cursor-pointer font-semibold text-sm leading-4 text-white rounded py-3 px-6 shadow-botones	 border-0 bg-gray-900"} text={"Descubrir orígenes"} />
                <Button estilo={"cursor-pointer font-semibold text-sm leading-4 text-white rounded py-3 px-6 shadow-botones	 border-0 bg-green-800 "} text={"Comprar café"} />
            </div>
            </div>
            <FotoMejorCafe/>
        </div>
    </div>    
    )
}