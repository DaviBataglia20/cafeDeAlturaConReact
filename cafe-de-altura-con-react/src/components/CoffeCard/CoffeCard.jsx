export default function CoffeCard({img_url, price,brand,available}){
    
    let claseDiv = "group hover:bg-[#E3DED7] bg-white flex flex-col justify-end items-center p-6 rounded-lg gap-[24px] shadow-coffeCard transition-all duration-300 cursor-pointer active:bg-green-300 hover:shadow-coffeCardHover"
    if (!available) {
        claseDiv = claseDiv.concat(" opacity-40", " cursor-default")
    }
    return(
        <div className={claseDiv}>
            <img  src={img_url}alt={brand} />
            <div className="flex flex-col items-center p-0 gap-[12px]">
                <h2 className="not-italic font-semibold text-sm leading-4 text-black">{brand}</h2>
                <p className="text-black font-normal text-sm leading-4 text-center">{price},00 €</p>
            </div>
            <div 
            className= "cursor-pointer p-2 rounded font-semibold text-sm leading-4 text-white bg-[#2a5b45b3] border-0 transition-all duration-300 group-hover:bg-[#2A5B45]"
            disabled={(available)?true:false}
            >{(!available)?"Agotado":"Añadir"}</div>
        </div>
    )
}