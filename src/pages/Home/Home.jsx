import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Seconds from "./Seconds/Seconds";
import Project from "./Project/Project";
import CardSection from "./cardsection/cardsection";
import Brasil from "./Brasil/Brasil";
import Footer from "../../components/Footer/Footer";    
import "./Home.scss";


export default function Home() {

    return (

        <>

            <Navbar />

            <main>

                <Hero />
                <Seconds />
                <Project />
                <CardSection />
                <Brasil />
                <Footer />
            </main>

        </>

    );

}