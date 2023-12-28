
import { Link } from "react-router-dom";


function SecondPage({pageSection}) {

    return (
        <>
            
            <section ref={pageSection} className="container-fluid whole-pager second-page d-flex align-items-center">
            <div className="space-navbar"></div>
            
                <div className="row second-page-row position-relative h-100">

                    <div className="col-md p-3 d-flex flex-column justify-content-center">

                        <div className="appearFromLeft">
                            <h2 className="ps-3 ">Hi, Armando here.</h2>

                                <p className="ps-3 opacity-75 ">
                                    I'm a passionate front-end web developer with expertise in WordPress, React, HTML, CSS, and JavaScript. My journey into web development began with a certification, and since then, I've been on a continuous learning path, expanding my skills independently. 
                                </p>                            
                        </div>


                            <div className="d-flex justify-content-center gap-5 mt-5 flex-wrap">
                                <i className="fa-brands fa-wordpress fa-4x"></i>
                                <i className="fa-brands fa-react fa-4x"></i>
                                <i className="fa-brands fa-square-js fa-4x"></i>

                            </div>
                    </div>
                    <div className="col-md pt-5">
                        <div className=" d-flex flex-column justify-content-between h-100 white-square-home">
                            <div className="appearFromRight">



                            </div>




                        </div>

                    </div>
                    <div className="line"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    <div className="line4"></div>
                    <div className="line5"></div>
                </div>
            </section>    
        </>
    );
}

export default SecondPage;