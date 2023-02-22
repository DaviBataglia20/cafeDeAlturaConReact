import Button from "../Button/Button"
import SecondFooter from "../SecondFooter/SecondFooter";
import NavLink from "../NavLink/Navlink";
import LogoCafe from "../LogoCafe/LogoCafe";
export default function Footer(){
    return(
    <>
    <div className="box-border bg-[#1F1815] relative w-full h-auto">
        <div className="flex flex-col items-start pt-[28px] pr-[40px] pb-[77px] pl-[16px] gap-[10px]">
            <div className="flex flex-row items-center p-0">
                <LogoCafe/>
            </div>
            <div className="flex  p-0 gap-[16px] justify-between w-[1132px]">
                <div className="flex flex-col items-start p-0 gap-[16px]">
                    <h3 className="font-semibold text-lg leading-6 text-center text-white">Te ayudamos en</h3>
                    <div className="cursor-pointer flex flex-row items-start bg-[#515051] rounded py-[12px] px-[24px] border-0 gap-[8px] text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    <Button estilo={""} text={"+34 919 49 05 18"}/>
                    </div>
                    <div className="cursor-pointer flex flex-row items-start bg-[#515051] rounded py-[12px] px-[24px] border-0 gap-[8px] text-white">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Button estilo={""} text={"hola@cafedealtura.com"}/>
                    </div>

                </div>
                <div className="flex flex-col items-start p-0 gap-[10px] h-[300px]">
                    <NavLink path={"/Shop"} text={"Tienda"}/>
                    <NavLink path={"#formularioLink"} text={"Suscripción"}/>
                    <NavLink path={"#formularioLink"} text={"Para empresas"}/>
                    <NavLink path={"#formularioLink"} text={"Sobre nosotros"}/>
                    <NavLink path={"#formularioLink"} text={"Contacto"}/>    
                </div>
                <div className="flex flex-col items-start p-0 w-64 h-20 relative gap-[16px] ">
                    <p className="cursor-pointer font-semibold text-sm leading-4 text-white">Política de privacidad</p>
                    <p className="cursor-pointer font-semibold text-sm leading-4 text-white">Política de cookies</p>
                    <p className="cursor-pointer font-semibold text-sm leading-4 text-white">Política de cookies</p>
                </div>
            </div>
        </div>
        <SecondFooter/>
    </div>
    </>
    )
}