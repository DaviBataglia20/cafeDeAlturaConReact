import { Outlet, Link } from "react-router-dom";
import CoffeCard from "../CoffeCard/CoffeCard";

export default function Novedades(){
    return(
        <>
        <div className="p-10 bg-white flex flex-col items-center gap-[40px]">
            <h3 className="text-green-800 font-semibold text-xl leading-6 text-shadow-texto-sombra">Novedades</h3>
            <div className="flex flex-wrap flex-row justify-center items-center p-0 gap-[24px]">
                <CoffeCard/>
                <CoffeCard/>
                <CoffeCard/>
                <CoffeCard/>
                <CoffeCard/>
                <CoffeCard/>
            </div>
            <Link to="Shop" className="cursor-pointer flex flex-row items-center p-0 gap-[16px]">
                    <p className="text-black not-italic font-semibold text-sm leading-4 text-shadow-texto-novedades underline">Ver Todos</p>
                    <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 1.39258L19.5 5.39258M19.5 5.39258L15.5 9.39258M19.5 5.39258L1.5 5.39258" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </Link>
        </div>
        <Outlet/>
        </>
    )
}