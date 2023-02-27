export default function EntraEnContacto(){
    return(
<div className="box-border flex flex-row justify-center items-center bg-[#E3DED7] py-0 px-[40px]">   
    <div className="flex flex-row justify-between items-center p-0 gap-[24px] opacity-90 w-full ">
        <div className="flex flex-col items-start py-[116px] px-0 gap-[32px]">
            <div id="#formularioLink" className="flex flex-col items-start p-0 gap-[12px]">
                <h3 className="font-semibold text-lg leading-6 text-gray-900">Entra en contacto con nosotros</h3>
                <p className="font-normal text-sm leading-4 text-gray-600">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[24px]">
                <p className="font-normal text-sm leading-4 text-gray-600">También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                <div className="flex flex-col items-start p-0 font-normal text-sm leading-4 text-gray-600">
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                </div>
                <div className="flex flex-col items-start p-0 font-normal text-sm leading-4 text-gray-600 gap-[12px]">
                    <div className="flex flex-row items-start p-0 gap-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M1 3.39258C1 2.28801 1.89543 1.39258 3 1.39258H6.27924C6.70967 1.39258 7.09181 1.66801 7.22792 2.07635L8.72574 6.56979C8.88311 7.0419 8.66938 7.55789 8.22427 7.78044L5.96701 8.90908C7.06925 11.3538 9.03878 13.3233 11.4835 14.4256L12.6121 12.1683C12.8347 11.7232 13.3507 11.5095 13.8228 11.6668L18.3162 13.1647C18.7246 13.3008 19 13.6829 19 14.1133V17.3926C19 18.4971 18.1046 19.3926 17 19.3926H16C7.71573 19.3926 1 12.6768 1 4.39258V3.39258Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="flex flex-row items-start p-0 gap-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M3 8.39258L10.8906 13.653C11.5624 14.1008 12.4376 14.1008 13.1094 13.653L21 8.39258M5 19.3926H19C20.1046 19.3926 21 18.4971 21 17.3926V7.39258C21 6.28801 20.1046 5.39258 19 5.39258H5C3.89543 5.39258 3 6.28801 3 7.39258V17.3926C3 18.4971 3.89543 19.3926 5 19.3926Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                        <p>support@example.com</p>
                    </div>
                </div>
                <p>¿Buscas un trabajo?<a className="font-semibold text-black underline cursor-pointer">Ver nuestras ofertas.</a></p>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center bg-white shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
            <form action="" className="flex flex-col items-start py-[32px] px-[67px] gap-[24px] ">
                <div className="flex flex-col items-start p-0 w-full gap-[4px]">
                    <label className="font-normal text-xs leading-4 text-gray-800" htmlFor="name">Nombre completo</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="text" name="name" id="name" required />
                </div>
                <div className="flex flex-col items-start p-0 w-full gap-[4px]">
                    <label className="font-normal text-xs leading-4 text-gray-800" htmlFor="email">Email</label>
                    <input className="hover:border-[1px] hover:border-solid  hover:border-[#9B9EA3] focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] w-full flex flex-row items-center bg-white rounded-md py-[9px] px-[13px] border-[1px] border-solid border-[#D1D5DB] shadow-header" type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col items-start p-0 w-full gap-[4px]">
                    <label htmlFor="tel" className="font-normal text-xs leading-4 text-gray-800">Teléfono</label>
                    <div className=" focus:outline-none !important focus:border-[1px] focus:border-solid focus:border-[#3F8F6B] focus:rounded-[6px] hover:border-[1px] hover:border-solid hover:border-[#9B9EA3] box-border flex flex-row items-center p-0 bg-white rounded-md w-full border-[1px] border-solid border-[#D1D5DB] shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)]">
                        <select className="focus:outline-none rounded-md flex flex-row items-center bg-white shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)] border-0 py-[9px] px-[13px] gap-[4px]" name="tel" id="tel">
                            <option className="text-black" value="">US</option>
                        </select>
                        <input className="focus:outline-none flex flex-row items-center w-full border-0 py-[9px] pr-[13px] pb-0 placeholder:" type="tel" id="tel"  placeholder="+1 (555) 987-6543" />
                    </div>
                </div>
                <div className="flex flex-col items-start p-0 w-full gap-[4px]">
                    <label htmlFor="help"></label>
                    <textarea className="hover:border-[1px] hover:border-solid hover:border-[#9B9EA3] focus:outline-none focus:border-[1px] focus:border-solid focus-border-[#3F8F6B] placeholder:absolute placeholder:w-40 placeholder:h-4 placeholder:text-gray-600 placeholder:top-[13px] placeholder:left-[17px] bg-white rounded-md w-full h-32 relative border-[1px] border-solid border-[#D1D5DB] shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)]"  name="help" id="help" cols="30" rows="10" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <div className="flex flex-row items-start p-0 w-full gap-[12px]">
                    <input className="accent-green-700" id="checkbox" type="checkbox"/>
                    <div className="flex flex-row items-start p-0 gap-[3px] w-[442px]">
                        <p className="flex flex-row items-start p-0 font-normal text-sm leading-4 text-gray-800">Acepto la Política de Privacidad ,</p>
                        <p className="flex flex-row items-start p-0 font-normal text-sm leading-4 text-gray-800">        Términos y condiciones.</p>
                    </div>
                </div>
                <button className="cursor-pointer flex flex-row items-start bg-[#2A5B45] rounded text-white py-[12px] px-[24px] border-0 gap-[8px]">Enviar</button>
            </form>
        </div>
    </div>
</div>        
    )
}