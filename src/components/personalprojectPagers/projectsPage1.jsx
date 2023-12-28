import previewImage from "../../assets/images/jr-korpa-9XngoIpxcEo-unsplash.jpg";
import neonLineIMG from "../../assets/images/neonLinePage.png";
import "../../css/projects.css"
import { Link } from "react-router-dom";

function ProjectsPage1() {

    return (
        <>
            <section className="collage container mt-5">


                <div className="projects-title desktop-hidden">
                    <h1>Personal Projects</h1>
                </div>


                <div className="project-grid">


                    <div id="project1" className=" project row2-column1">
                        <Link to="/projectid/1">
                            <img className="project-img" src= {neonLineIMG} alt="" />
                        

                        <div className="project-previewDesc">
                            <h2>Neon Line Studios</h2>
                            <p>An entire website I have made for a graphic design studio. They wanted a neon and colourful style. By the way, the entire experience was wonderful! They were so friendly it was a pleasure to work with them.</p>
                        </div>
                        </Link>
                    </div>
                    <div id="project2" className=" project ">
                        <Link to="/projectid/2">
                            <img className="project-img" src={previewImage} alt="" />
                        

                        <div className="project-previewDesc">
                            <h2>Project 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error?</p>
                        </div>
                        </Link>
                    </div>
                    <div id="project3" className=" project bigproject">
                        <Link to="/projectid/3">
                            <img className="project-img" src={previewImage} alt="" />
                        

                        <div className="project-previewDesc">
                            <h2>Project 3</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error?</p>
                        </div>
                        </Link>
                    </div>

                    <div id="project4" className=" project ">
                        <Link to="/projectid/4">
                            <img className="project-img" src={previewImage} alt="" />
                        

                        <div className="project-previewDesc">
                            <h2>Project 4</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error?</p>
                        </div>
                        </Link>
                    </div>
                    <div id="project5" className=" project row1column2">
                        <Link to="/projectid/5">
                            <img className="project-img" src={previewImage} alt="" />
                        

                        <div className="project-previewDesc">
                            <h2>Project 5</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error?</p>
                        </div>
                        </Link>
                    </div>
                    <div id="project6" className=" project rightRow1Column2 mobile-hidden">
                        <h1>Personal Projects</h1>
                    </div>

                </div>
                
            </section>
        </>
    );
}

export default ProjectsPage1;