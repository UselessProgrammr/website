import { Link } from "react-router-dom";

function FourthPage({pageSection}) {

    let delays = []

    for (let cube = 1 ; cube < 41; cube ++) {

        let randomDelay = Math.floor(Math.random() * 3000);
        delays.push(randomDelay);
    }


    return (
        <>
            <section ref={pageSection} className="container-fluid py-5 d-flex px-2 whole-pager">

                <div className="fourth-page">
                    <div className="contact-card d-flex flex-column justify-content-between">

                        <h1 className="contactPagerTitle">Contact Me</h1>

                        <button className="btn">
                            <Link to="/website/contact/" className="button-border1">Look.</Link>
                        </button>
                            
                    </div>

                    

                    <div className=" particles-container">

                        <div className="particles">

                            {delays.map(function(delay) { return (<div style={{animationDelay : delay + "ms"}}></div>);})}

                        </div>  

                    </div>

                </div>
                  
            </section>    
        </>
    );
}

export default FourthPage;