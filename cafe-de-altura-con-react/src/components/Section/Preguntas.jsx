import Pregunta from "../Pregunta/Pregunta"
export default function Preguntas(){
    return(
       <div className="bg-green-800 flex flex-col items-center py-12 px- gap-[24px]">
            <h2 className="font-medium text-2xl leading-7 text-white">Preguntas frecuentes</h2>
            <div className="flex flex-col items-center p-0 gap-[16px]">
                <Pregunta titulo={"¿Cómo hago el pedido?"} texto={"Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café."}/>
                <Pregunta titulo={"¿Por qué los precios son tan bajos?"} texto={"Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible."}/>
                <Pregunta titulo={"¿Es posible enviar café a mi oficina?"} texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus iure ipsam nulla nam tempore nostrum odio, doloremque natus voluptatibus excepturi dolor distinctio atque deleniti aut. Laborum ipsam molestiae alias? Davi paso por aki"}/>
            </div>
            <div className="flex items-center p-0 gap-[16px] font-semibold text-sm leading-4 underline text-white">
                <p className="text-white">Resolvemos tus dudas</p>
                <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.39258L19 5.39258M19 5.39258L15 9.39258M19 5.39258L1 5.39258" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </div>

       </div>
    )
}