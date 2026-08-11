import Navbar from "../../components/Navbar/Navbar";
import HeroContact from "./HeroContact/HeroContact";
import Forms from "./Forms/Forms";



import Footer from "../../components/Footer/Footer";

import "./Contact.scss";


export default function Contact() {

    return (

        <>

            <Navbar />
            <HeroContact />
            <Forms />
       

            <main>

             
                <Footer />
            </main>

        </>

    );

}