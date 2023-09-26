import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Sections from "./Components/Sections"
import { config } from "./config"


export default function App(){
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="font-mukta bg-white">
                <Sections>
                    <About />
                    <Projects username={config.username} />
                    <Contact connectLinks={config.connectLinks} />
                </Sections>
            </main>
        </>
    )
}