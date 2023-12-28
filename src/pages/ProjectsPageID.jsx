
import { useParams } from "react-router-dom";
import "../css/projects.css";

function ProjectsPageID(image) {

    let {id} = useParams();

    const projects = [
        {

     },
        {
        "name" : "Neon Line Studios" , 
        "description" : "An entire website I have made for a graphic design studio. By the way, the entire experience was wonderful! They were so friendly it was a pleasure to work with them." ,
        "image" :  "https://uselessprogrammr.github.io/website/src/assets/images/neonLinePage.PNG"
     },
        {
        "name" : "Project 2" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eligendi nobis cum corrupti, eius est hic nesciunt, optio, eum molestias aut maxime eos quidem at numquam odit doloribus consequatur error." ,
        "image" :  "/src/assets/images/jr-korpa-9XngoIpxcEo-unsplash.jpg"
     },
        {
        "name" : "Project 3" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente!" ,
        "image" :  "/src/assets/images/jr-korpa-9XngoIpxcEo-unsplash.jpg"
     },
        {
        "name" : "Project 4" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eligendi nobis cum corrupti, eius est hic nesciunt, optio, eum molestias aut maxime eos quidem at numquam odit doloribus consequatur error." ,
        "image" : "/src/assets/images/jr-korpa-9XngoIpxcEo-unsplash.jpg"
     },
        {
        "name" : "Project 5" , 
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem perspiciatis architecto sapiente!" ,
        "image" :  "/src/assets/images/jr-korpa-9XngoIpxcEo-unsplash.jpg"
     },
        
    ]
    

    return (
        <>
            <section className="container pt-5">
                <div className="row justify-content-between">
                    <div className="col-md-4 p-5 projectText">
                        <h2 className="mb-5"> {projects[id].name} </h2>
                        <p>
                            {projects[id].description}
                        </p>
                            
                        
                    </div>

                    <div className="col-md-8">
                        <img className="projectImage" src={projects[id].image} alt="" />
                    </div>
                </div>
            </section>


            
        </>
    );
}

export default ProjectsPageID;