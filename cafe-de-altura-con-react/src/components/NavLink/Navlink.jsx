import { Outlet, Link } from "react-router-dom";

export default function NavLink ({path,text}){
    return(
    <>
    <Link to ={path}>
        <p className="no-underline text-white font-semibold p-2.5 hover:bg-[#403E3F] rounded-[10px]">{text}</p>
    </Link>
    <Outlet/>
    </>
    )
}