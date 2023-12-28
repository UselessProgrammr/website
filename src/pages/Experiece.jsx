import { useState } from "react";
import "../css/experience.css";

import XPContent2 from "../components/XPContent/XPContent2";
import XPContent3 from "../components/XPContent/XPContent3";
import XPContent1 from "../components/XPContent/XPContent";

function Experience() {

    const [XPContent , setXPContent] = useState("webdesign");
    let content;

    if (XPContent == "webdesign") {
        content = <XPContent1 />
    }
    else if (XPContent == "webdev") {
        content = <XPContent2 />
    }

    else if (XPContent == "stats") {
        content = <XPContent3 />
    }

    return (
        <>
            <section className="container">
                <div className="row justify-content-center rowXPlist">

                    <div onMouseEnter={() => {setXPContent("webdesign")}} className="col-md rowXPobject">
                        <h2>Web Design</h2>
                    </div>

                    <div onMouseEnter={() => {setXPContent("webdev")}} className="col-md rowXPobject">
                        <h2>Web Development</h2>
                    </div>

                    <div onMouseEnter={() => {setXPContent("stats")}} className="col-md rowXPLastobject">
                        <h2>Stats</h2>
                    </div>
                </div>
            </section>

            <section className="container d-flex justify-content-center">
                <div className="XPContent">
                    {content}
                </div>
            </section>
        </>
    );
}

export default Experience;