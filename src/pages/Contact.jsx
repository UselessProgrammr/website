import { useState } from "react";
import "../css/contact.css"

const Contact = () => {

    let copiedText;

    const [openToast , setOpenToast] = useState(false);

    function copyToClipboard(textToCopy) {
        
        copiedText = navigator.clipboard.writeText(textToCopy);
        if (openToast == true) {return}
        setOpenToast(true);
        
        setTimeout(() => setOpenToast(false) , 2000);
    }




    return (
        <>
            <section className="container contact-container">


                <div className="contactSquare">
                    <div onMouseDown={() => copyToClipboard("armandxtco@gmail.com")} className="contactUnit leftUnit top-left-round-corner">
                        <div><h5 translate="no">Business Email</h5></div>
                        <div translate="no" className="contactDesc leftDesc contactDesc-Leftcorner"><p>armandxtco@gmail.com</p></div>
                    </div>
                    
                    <div onMouseDown={() => copyToClipboard(".fuaaaaaaa")} className="contactUnit rightUnit top-right-round-corner">
                        <div translate="no"><h5>Discord</h5></div>
                        <div className="contactDesc rightDesc contactDesc-Rightcorner"><p>.fuaaaaaaa</p></div>
                    </div>

                    <div  className="contactUnit leftUnit bottom-left-round-corner">
                        <div><h5>Business number</h5></div>
                        <div className="contactDesc leftDesc contactDesc-Leftcorner"><p>Coming up soon.</p></div>
                    </div>
                    
                    <div className="contactUnit rightUnit bottom-right-round-corner">
                        <div><a href="https://www.linkedin.com/in/armando-tedesco-6624502a7/"><h5 translate="no">LinkedIn</h5></a></div>
                        <div className="contactDesc rightDesc contactDesc-Rightcorner"><p>My profile</p></div>
                    </div>

                    
                </div>


                {openToast ? <div className="copiedToast">
                    <p>Copied</p>
                </div> : null}
                
            </section>
        </>
    );
}

export default Contact;