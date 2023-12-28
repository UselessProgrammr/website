import { useRef, useState, useEffect } from "react";
import FrontPage from "../components/homePagers/FrontPage";
import "../css/home.css"
import SecondPage from "../components/homePagers/SecondPage";
import ThirdPage from "../components/homePagers/ThirdPage";
import FourthPage from "../components/homePagers/FourthPage";
import PageCounter from "../components/PageCounter";
import LoadingPage from "../components/LoadingPage";


function Home({pageRef , anotherPageRef}) {

    const [page , setPage] = useState(1);
    const [isLoading , setIsLoading] = useState(true);
    let content = "";


    function getCurrentDimension(){
        return {
              width: window.innerWidth,
              height: window.innerHeight
        }
    }

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [screenSize])




    let pageSection = useRef(null);

    if ( page == 1) {
        content = <FrontPage pageSection={pageSection} />
    }
    else if (page == 2) {
        content = <SecondPage pageSection={pageSection} />
    }
    else if (page == 3) {
        content = <ThirdPage pageSection={pageSection} />
    }
    else if ( page == 4) {
        content = <FourthPage pageSection={pageSection} />
    }


    setTimeout( () => setIsLoading(false) , 2600)

    let mobileContent =            
    <>
        <FrontPage pageSection={pageSection} />
        <SecondPage pageSection={pageSection} />
        <ThirdPage pageSection={pageSection} />
        <FourthPage pageSection={pageSection} />
    </> ;
    


    return (
        <>
            { isLoading ? <LoadingPage /> : null}
            {screenSize.width > 1000 ? content : mobileContent } 
            
            {screenSize.width > 1000 ? <PageCounter pageSection={pageSection} pageRef={pageRef} anotherPageRef={anotherPageRef} page={page} setPage={setPage} /> : null}
        </>

    );
}

export default Home;