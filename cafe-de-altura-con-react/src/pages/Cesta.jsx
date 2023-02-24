import Header from "../components/Section/Header";
import SecondFooter from "../components/SecondFooter/SecondFooter";
import Cestap from "../components/Section/Cestap";
export default function Cesta ({envio,setEnvio}){
    return(
        <>
        <Header/>
        <Cestap envio={envio} setEnvio={setEnvio}/>
        <SecondFooter/>
        </>
    )
}