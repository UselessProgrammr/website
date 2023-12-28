import { Link } from "react-router-dom";

const MainMenu = ({isOpen, closingMenu}) => {

    let randomNum;

    if (isOpen == "") {
        randomNum = Math.floor(Math.random() * 10);
        
    }
    else {
        randomNum = 10;

    }

    return(
        <>
            <section className={ `left-menu container-fluid ${isOpen}` }>
                <div className="row">
                    <div className="col-md main-menu">
                        <ul className="main-menu-ul">    
                            <div>
                                <h1 className="text-center main-menu-title blackUnderLineAnimation">Menu</h1>
                                <Link to="/website/"><li onClick={() => {closingMenu()}}><p  className="blackUnderLineAnimation">Home</p></li></Link>
                                <Link to="/website/contact/"><li onClick={() => {closingMenu()}}><p  className="blackUnderLineAnimation">Contact</p></li></Link>
                                <Link to="/website/personalprojects/"><li onClick={() => {closingMenu()}}><p  className="blackUnderLineAnimation">Personal Projects</p></li></Link>
                                <Link to="/website/experience/"><li onClick={() => {closingMenu()}}><p className="blackUnderLineAnimation" >Experience</p></li></Link>
                                {randomNum <= 2 ? <Link to="/website/goaway/"><li onClick={() => {closingMenu()}}><p  className="blackUnderLineAnimation">D̴̝̉ỏ̶̱̳̳̈̃͝n̸̠͉̳͗̇̇͜͝'̷̺͎̅t̴̼͎̒͊̑ ̶̙̦̗̉͜č̵̗̺͂̂͝o̸̢̯̙͍͐̽͆̔m̸̼̗̿̈́͌e̴̛̬̝ ̶̗̽̉͌͆͜h̴̛̞̱̋̆̏ͅe̶͇̣̓r̸̠̈́͐e̵͓̿̆͘̚</p></li></Link> : null}
                                <hr />
                            </div>

                            

                            <div className="menu-footer">
                                <div>
                                    <h3>Armando Tedesco</h3>
                                    <h5 className="contact-number">07599-441-987</h5>   
                                </div>
                            </div>


                            



                        </ul>
                    </div>

                    <div onClick={() => {closingMenu()}} className="col-md main-menu-backdrop">

                    </div>
                </div>
            </section>
        </>
    );
}

export default MainMenu;