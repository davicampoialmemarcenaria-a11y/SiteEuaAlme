import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Seconds from "./Seconds/Seconds";
import Project from "./Project/Project";
import CardSection from "./cardsection/cardsection";
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

            </main>

        </>

    );

}