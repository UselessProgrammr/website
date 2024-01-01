
import { useParams } from "react-router-dom";
import "../css/projects.css";

function ProjectsPageID(image) {

    let {id} = useParams();

    const projects = [
        {

     },
        {
        "name" : "Neon Line Studios" , 
        "description" : "I developed a responsive website for a graphic design company. I used HTML, CSS, and JavaScript to create an attractive and user-friendly interface across various devices. Additionally, I implemented smooth animations and visual effects, just as the client desired, to enhance the user experience. It was a genuine pleasure working with them!" ,
        "image" :  "https://uselessprogrammr.github.io/website/assets/neonLinePage-ryZpiWF3.png"
     },
        {
        "name" : "Project 2" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eligendi nobis cum corrupti, eius est hic nesciunt, optio, eum molestias aut maxime eos quidem at numquam odit doloribus consequatur error." ,
        "image" :  "https://uselessprogrammr.github.io/website/assets/jr-korpa-9XngoIpxcEo-unsplash-cQ-nXO77.jpg"
     },
        {
        "name" : "Project 3" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente!" ,
        "image" :  "https://uselessprogrammr.github.io/website/assets/jr-korpa-9XngoIpxcEo-unsplash-cQ-nXO77.jpg"
     },
        {
        "name" : "Project 4" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eligendi nobis cum corrupti, eius est hic nesciunt, optio, eum molestias aut maxime eos quidem at numquam odit doloribus consequatur error." ,
        "image" : "https://uselessprogrammr.github.io/website/assets/jr-korpa-9XngoIpxcEo-unsplash-cQ-nXO77.jpg"
     },
        {
        "name" : "Project 5" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente!" ,
        "image" :  "https://uselessprogrammr.github.io/website/assets/jr-korpa-9XngoIpxcEo-unsplash-cQ-nXO77.jpg"
     },
        
    ]
    

    return (
        <>
            <section className="container pt-5">
                <div className="row flex-wrap justify-content-between">
                    <div className="col-lg-4 p-5 projectText">
                        <h2 translate="no" className="mb-5"> {projects[id].name} </h2>
                        <p className="projectID-text">
                            {projects[id].description}
                        </p>

                        <a className="projectID-aLink" href="https://neonlinestudios.netlify.app/">Take me to the website!</a>
                            
                        
                    </div>

                    <div className="col-lg-8">
                        <a href="https://neonlinestudios.netlify.app/">
                            <img className="projectImage" src={projects[id].image} alt="" />
                        </a>
                        
                    </div>
                </div>
            </section>


            
        </>
    );
}

export default ProjectsPageID;