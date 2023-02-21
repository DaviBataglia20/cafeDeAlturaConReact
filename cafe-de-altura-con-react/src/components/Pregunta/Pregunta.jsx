import {useState} from 'react'

export default function Pregunta ({titulo,texto}){


    const [hide,setHide] = useState(true)
    const handleCLick = () => {
        setHide(prev => !prev)
    }




    return(
        <div className="flex flex-col p-[24px] gap-[16px] bg-white rounded-xl w-[668px]">
            <div className="flex justify-between items-center p-0">
                <h3 className='font-semibold text-lg leading-6 text-black'>{titulo}</h3>
                <svg className={`${!hide ? 'rotate-180' : ''} transition-transform duration-300`} onClick={handleCLick} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.685471C0.683416 0.294947 1.31658 0.294947 1.7071 0.685471L4.99999 3.97836L8.29288 0.685471C8.6834 0.294947 9.31657 0.294947 9.70709 0.685471C10.0976 1.076 10.0976 1.70916 9.70709 2.09968L5.7071 6.09968C5.31657 6.49021 4.68341 6.49021 4.29289 6.09968L0.292893 2.09968C-0.0976309 1.70916 -0.0976309 1.076 0.292893 0.685471Z" fill="#111827"/>
                </svg>
            </div>
            <div className={`${hide ? 'hidden' : ''} border-[1px] border-solid border-[#E3DED7] `}></div>
            <p className={`${hide ? 'hidden' : ''}`}>{texto}</p>
        </div>
    )
}