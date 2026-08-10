import Navbar from "../../components/Navbar/Navbar";
import HeroAbout from "./HeroAbout/HeroAbout";
import SecondAbout from "./SecondAbout/SecondAbout";
import Footer from "../../components/Footer/Footer";    
import "./About.scss";


export default function About() {

    return (

        <>

            <Navbar />
        <HeroAbout />
        <SecondAbout />
            <main>

             
                <Footer />
            </main>

        </>

    );

}