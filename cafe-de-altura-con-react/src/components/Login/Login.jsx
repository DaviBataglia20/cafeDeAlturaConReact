import { useState } from "react";
export default function Login(){
    const[estaRegistrandose,setEstaRegistrandose] = useState(false);
    return(
        <div className=" bg-gray-300 p-2 flex flex-col justify-center items-center w-[300px] rounded shadow-lg absolute top-5 rigth-6 font-medium text-black">
            <h1 >{estaRegistrandose?"Registrate":"inicia sesion"}</h1>
            <button>{estaRegistrandose?"Registrate":"inicia sesion"}</button>
            <button onClick={()=> setEstaRegistrandose(!estaRegistrandose)}>{estaRegistrandose?"¿Ya tienes cuenta? Inicia sesion":"¿No tienes cuenta?Registrate"}</button>
        </div>
    
            )
}