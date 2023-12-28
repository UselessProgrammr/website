
export default function LoadingPage() {

    let lineDelay = []

    for (let i = 1 ; i < 7 ; i++) {
        let RNGenerator = Math.floor(Math.random() * 250);
        lineDelay.push(`${RNGenerator}ms`);
        
    }

    console.log(lineDelay)

  return (

    <section className="container-fluid loadingScreenPage d-flex align-items-center justify-content-center">

            <svg  width="100" height="100">
                <rect id="loadingScreenSVG" x="20" y="-20" width="50" height="5" style={{animationDelay : lineDelay[0]}} className="loadingScreenStyles"  />
                <rect id="loadingScreenSVG" x="40" y="-40" width="50" height="5" style={{animationDelay : lineDelay[1]}} className="loadingScreenStyles" />
                <rect id="loadingScreenSVG" x="0" y="0" width="50" height="5" style={{animationDelay : lineDelay[2]}} className="loadingScreenStyles"/>
                <rect id="loadingScreenSVG" x="20" y="20" width="50" height="5" style={{animationDelay : lineDelay[3]}} className="loadingScreenStyles"/>
                <rect id="loadingScreenSVG" x="40" y="40" width="50" height="5" style={{animationDelay : lineDelay[4]}} className="loadingScreenStyles"/>
                <rect id="loadingScreenSVG" x="60" y="60" width="50" height="5" style={{animationDelay : lineDelay[5]}} className="loadingScreenStyles"/>
            </svg>

    </section>
  );
}
