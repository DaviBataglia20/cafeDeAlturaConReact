import imageubicacion from "../fotoubi/imageubicacion.jpg"
export default function PruebaNuestroCafe(){
    return(
        <div className="py-[44px] px-[40px] bg-[#F7F5F3]">
            <div className="flex items-center justify-between p-0 gap-[24px]">
                <div className="flex flex-col items-start p-0 gap-4">
                    <h2 className="text-green-800 font-medium text-2xl leading-7">Pruébalo en nuestro coffee shop</h2>
                    <p className="font-normal text-sm leading-4 text-gray-900">Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <div className="flex items-center gap-4 p-0 underline">
                        <p className="not-italic font-semibold text-sm leading-4 text-black ">Cómo llegar</p>
                        <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 1.39258L19.5 5.39258M19.5 5.39258L15.5 9.39258M19.5 5.39258L1.5 5.39258" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <img src={imageubicacion} className="rounded-[30px] shadow-botones " alt="" />
            </div>
        </div>
    )
}