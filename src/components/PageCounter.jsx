function PageCounter({ pageSection ,pageRef,anotherPageRef,page , setPage}) {

    function pager(direction) {
        console.log(page)

        if (direction == "down" )  {
            if (page == 4) {
                return
            }
            else {
                if (pageRef.current.className == "firstLogoLetter mainLogoAnim") {return}
                pageRef.current.className = "firstLogoLetter mainLogoAnim";
                anotherPageRef.current.className = "secondLogoLetter mainLogoAnim2";
                

                pageSection.current.className += " newPageAnimationUp";
 
                setTimeout(() => pageRef.current.className = "firstLogoLetter" , 500)
                setTimeout(() => anotherPageRef.current.className = "secondLogoLetter" , 500)

                setTimeout(() => setPage(page + 1) , 500);
                
            }
        }

        else if (direction == "up") {
            if (page == 1) {
                return
            }
            else {
                if (pageRef.current.className == "firstLogoLetter mainLogoAnim") {return}
                pageRef.current.className = "firstLogoLetter mainLogoAnim";
                anotherPageRef.current.className = "secondLogoLetter mainLogoAnim2"
                
                pageSection.current.className += " newPageAnimationDown";

                setTimeout(() => pageRef.current.className = "firstLogoLetter" , 500)
                setTimeout(() => anotherPageRef.current.className = "secondLogoLetter" , 500)
                setTimeout(() => setPage(page - 1) , 500);
            }
        } 
    }

    return (
        <>
            <div className="home-pagecounter">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div onClick={() => {pager("up")}} className="pagecounter-arrow">
                        <i className="fa-solid fa-chevron-up fa-2x"></i>    
                    </div>

                    <div className="pagecounter-number">
                        <p id="pagecounter">{page}</p> 
                    </div>
                    
                    <div className="pagecounter-arrow">
                        <i onClick={() => {pager("down")}} className="fa-solid fa-chevron-down fa-2x"></i>    
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}

export default PageCounter;