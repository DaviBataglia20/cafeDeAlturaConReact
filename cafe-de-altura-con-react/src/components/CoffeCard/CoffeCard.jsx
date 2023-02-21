export default function CoffeCard(){
    return(
        <div className="group hover:bg-[#E3DED7] bg-white flex flex-col justify-end items-center p-6 rounded-lg gap-[24px] shadow-coffeCard transition-all duration-300 cursor-pointer active:bg-green-300 hover:shadow-coffeCardHover ">
            <img className="w-[100px] h-[200px]" src="https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_640.jpg" alt="gatito" />
            <div className="flex flex-col items-center p-0 gap-[12px]">
                <h2 className="not-italic font-semibold text-sm leading-4 text-black">Gatito</h2>
                <p className="text-black font-normal text-sm leading-4 text-center">Gatito</p>
            </div>
            <div className="cursor-pointer p-2 rounded font-semibold text-sm leading-4 text-white bg-[#2a5b45b3] border-0 transition-all duration-300 group-hover:bg-[#2A5B45]">Comprar</div>
        </div>
    )
}