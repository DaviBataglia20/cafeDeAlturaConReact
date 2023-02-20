import LogoCafe from "../LogoCafe/LogoCafe"
import NavLink from "../NavLink/Navlink"
import IconoTelefono from "../IconoTelefono/IconoTelefono"
import Button from "../Button/Button"
import IconoCesta from "../IconoCesta/IconoCesta"

export default function Header(){
    return(
    <div className="w-full bg-gray-900 flex flex-row justify-between items-center py-3 px-10 shadow-header">
       <LogoCafe/>
       <div className="flex flex-row items-center gap-8 p-0">
        <NavLink path={"/Shop"} text={"Tienda"}/>
        <NavLink path={"#formularioLink"} text={"Suscripción"}/>
        <NavLink path={"#formularioLink"} text={"Para empresas"}/>
        <NavLink path={"#formularioLink"} text={"Sobre nosotros"}/>
        <NavLink path={"#formularioLink"} text={"Contacto"}/>
       </div>
       <div className="flex gap-6 items-center">
            <div className="flex gap-px items-center">
                <IconoTelefono/>
                <p className="text-white no-underline font-semibold text-sm leading-4">+34 919 49 05 18</p>
            </div>
            <Button estilo={"cursor-pointer bg-gris-clarito rounded text-white font-semibold text-sm leading-4 py-3 px-6 border-solid rounded border-2 border-gris-clarito"} text={"Iniciar sesión"}/>
        </div>
        <div className="flex flex-row items-center p-0 w-12 h-6 cursor-pointer gap-2">
            <IconoCesta/>
        </div>
    </div>
    )
}