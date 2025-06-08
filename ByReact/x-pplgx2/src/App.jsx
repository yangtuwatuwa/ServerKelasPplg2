import HalUt from "./boboboi"
import Album from "./albumFoto"
import {Routes,Route  } from "react-router-dom";
function dalaman() {
    return(
        <div>

            <Routes>
                <Route path='/' element ={<HalUt />} />
                <Route path='/albumFoto' element={<Album />} />
            </Routes>
        </div>
    );
}
export default dalaman