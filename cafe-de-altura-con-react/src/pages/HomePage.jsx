import Header from "../components/Section/Header.jsx"
import DeLaPlantaATuCasa from "../components/Section/DeLaPlantaATuCasa"
import MejoresCondiciones from "../components/Section/MejoresCondiciones.jsx"
import Novedades from "../components/Section/Novedades.jsx"
import Preguntas from "../components/Section/Preguntas.jsx"
import PruebaNuestroCafe from "../components/Section/PruebaNuestroCafe.jsx"
import EntraEnContacto from "../components/Section/EntraEnContacto.jsx"
import Footer from "../components/Section/Footer.jsx"

export default function HomePage (){

    return(
        <>
        <Header/>
        <DeLaPlantaATuCasa/>
        <MejoresCondiciones/>
        <Novedades />
        <Preguntas/>
        <PruebaNuestroCafe/>
        <EntraEnContacto/>
        <Footer/>
        </>
    )
}