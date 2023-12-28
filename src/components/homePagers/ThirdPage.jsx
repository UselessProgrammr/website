import { useState } from "react";
import background1 from "../../assets/images/pawel-czerwinski-2Catb-oy3Z8-unsplash.jpg";
import background2 from "../../assets/images/pawel-czerwinski-3HcWH-K1-mk-unsplash.jpg";
import background3 from "../../assets/images/tareq-ajalyakin-H-Vp8Jhn-8o-unsplash.jpg";
import background4 from "../../assets/images/richard-horvath-WOA3QKFjlo8-unsplash.jpg";


function ThirdPage({pageSection}) {
    const [bg , setBG] = useState(background1);
    const [anim , setanim] = useState("");


    function complexBGanimation(bgNumber) {

        if (anim == "fade-effect") {
            return
        }

        if (bgNumber == 1) {
            setBG(background1);
            
        }
        else if (bgNumber == 2) {

            setBG(background2);
        }
        else if (bgNumber == 3) {
            setBG(background3);
        }

        else if (bgNumber == 4) {
            setBG(background4);
        }

        setanim("fade-effect")
        setTimeout(() => setanim("") , 900)

    }


    return (
        <>
            <section ref={pageSection} className="container-fluid whole-pager third-page">

                    <div style={{backgroundImage: "url(" + bg + ")" }}  className={`row bg-changing-row ${anim} brightnessIntro`}>
                        <div onMouseEnter={() => complexBGanimation(1)} id="thirdPcolumn1"  className="col-lg bg-changing-column">
                            <h2 className="text-center">Web Development</h2>

                        </div>
                        <div onMouseEnter={() => complexBGanimation(2)} id="thirdPcolumn2" className="col-lg bg-changing-column">
                            <h2 className="text-center">Web Design</h2>

                        </div>
                        <div onMouseEnter={() => complexBGanimation(3)} id="thirdPcolumn3" className="col-lg bg-changing-column">
                            <h2 className="text-center">React</h2>

                        </div>
                        <div onMouseEnter={() => complexBGanimation(4)} id="thirdPcolumn4" className="col-md last-bg-changing-column">
                            <h2 className="text-center">Wordpress</h2>

                        </div>
                    </div>
            </section>    
        </>
    );
}

export default ThirdPage;