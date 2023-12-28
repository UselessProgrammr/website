const Navbar = ({ pageRef , anotherPageRef , openingMenu , showMenu }) => {

    let logo;
    let sVG;
    
    if (showMenu) {
        logo = "ATlogo black-color mb-0 h1 ";
        sVG = "black"
        
    }
    else {
        logo = "ATlogo mb-0 h1";
        sVG = "white"
    }



    return (
        <>
            <nav className="navbar main-navbar fixed-top ">
                <div className="container-fluid px-5">
                    <div id="menuSVG" onClick={() => openingMenu() } className={logo}> 
                    <svg width="40" height="15">
                        <rect id="menuLine1" x="0" y="0" width="20" height="2" style={{fill : sVG , transition : "width 500ms ease-in-out" }}  />
                        <rect id="menuLine2" x="0" y="10" width="40" height="2" style={{fill : sVG , transition : "width 500ms ease-in-out"}}  />
                    </svg>
                    <span className="main-menu-button ms-2">menu</span> 
                    
                    </div>
                    <div className="ATlogo mb-0 h1"><span ref={pageRef} className="firstLogoLetter">A</span><span ref={anotherPageRef} className="secondLogoLetter">T</span></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;