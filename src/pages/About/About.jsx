import Navbar from "../../components/Navbar/Navbar";
import HeroAbout from "./HeroAbout/HeroAbout";
import SecondAbout from "./SecondAbout/SecondAbout";
import Questions from "./Questions/Questions";
import Footer from "../../components/Footer/Footer";
import Vem from "./Vem/Vem";    
import Values from "./Values/Values";
import "./About.scss";


export default function About() {

    return (

        <>

            <Navbar />
        <HeroAbout />
        <SecondAbout />
        <Questions />
        <Vem />
        <Values />
            <main>

             
                <Footer />
            </main>

        </>

    );

}