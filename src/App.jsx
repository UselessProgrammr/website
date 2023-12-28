import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import PersonalProjects from "./pages/PersonalProjects";
import Experience from "./pages/Experiece";
import "./css/index.css"
import MainMenu from "./components/MainMenu";
import { useRef, useState } from "react";
import ProjectsPageID from "./pages/ProjectsPageID";
import GoAway from "./pages/GoAway";

function App() {

    const [showMenu , setShowMenu] = useState(false)

    const [isOpen , setIsOpen] = useState("")
    
    let pageRef = useRef(null)
    let anotherPageRef = useRef(null)


    function closingMenu() {
        setIsOpen("closingMenu");
        setTimeout(() => setShowMenu(false) , 250 )
    }

    function openingMenu() {
        setIsOpen("");
        if (showMenu) {
            closingMenu()
        }
        else {
            setShowMenu(true)
        }
    }

    return (
        <>
            <Navbar pageRef={pageRef} anotherPageRef={anotherPageRef} openingMenu={openingMenu} showMenu={showMenu} />
            {showMenu ? (<MainMenu isOpen={isOpen} closingMenu={closingMenu} />) : (null)}

            <Routes>
                <Route path="/website/" element={<Home pageRef={pageRef} anotherPageRef={anotherPageRef} />} />
                <Route path="/website/contact/" element={<Contact />} />
                <Route path="/website/personalprojects/" element={<PersonalProjects />} />
                <Route path="/website/experience/" element={<Experience />} />
                <Route path="/website/projectid/" element={<ProjectsPageID />} />
                <Route path="/website/projectid/:id/" element={<ProjectsPageID />} />
                <Route path="/website/goaway/" element={<GoAway />} />
            </Routes>

        </>
    );
}

export default App;