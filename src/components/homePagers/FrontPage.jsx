import frontpagevideo from "../../assets/videos/frontpagevideo.mp4";

const FrontPage = ({pageSection}) => {

    return (
        <>
            <section ref={pageSection} className="container-fluid front-page-general d-flex align-items-center justify-content-center">
                <div>
                    <h1 translate="no" data-text="Armando Tedesco" className="text-center">Armando Tedesco</h1>
                    <h4 className="text-center"><span>Front-End</span> Web Developer</h4>   
                </div>
                
                <video className="front-page-video brightnessIntro" autoPlay loop muted src={frontpagevideo} ></video>
            </section>    
        </>

    );
}

export default FrontPage;