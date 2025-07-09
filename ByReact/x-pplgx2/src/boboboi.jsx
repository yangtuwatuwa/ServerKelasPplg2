import Hal1 from "./HEADER"
import Hal2 from "./papah"
import Hal3 from "./main2"
import Footer from "./footer"

export default function(){
    return (
        <div>
            <header>
                <Hal1 />
            </header>
            <main>
                <Hal2 />
                <Hal3 />
            </main>
            <br />
           <br /> 
            <footer>
                <Footer/>
            </footer>
            
        </div>
    )
}