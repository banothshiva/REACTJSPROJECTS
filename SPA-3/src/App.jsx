import React from "react";
import {Link,Routes , Route} from 'react-router-dom';
import Dell from './components/Dell'
import Hp from './components/Hp'
import Lenovo from './components/Lenovo'
import Iphone from './components/Iphone'
import Vivo from './components/Vivo'
import Samsung from './components/Samsung'
import Mobile from "./components/Mobile";
import Electronics from "./components/Electronics";

 const App=()=>{
    return(<>
    <h3>WELCOME TO HOME PAGE DATA </h3>
    <Link to="" style={{marginRight:100}}>Electronics</Link>
            <Link to="/mobile">Mobile</Link>
            <br></br>
            <Routes>
                <Route path="/" element={<Electronics></Electronics>}>
                    <Route index element={<Dell></Dell>}></Route>
                    <Route path='electronics/dell' element={<Dell></Dell>}></Route>
                    <Route path="electronics/hp" element={<Hp></Hp>}></Route>
                    <Route path="electronics/lenovo" element={<Lenovo></Lenovo>}></Route>
                </Route>
                <Route path="/mobile" element={<Mobile></Mobile>}>
                    <Route index element={<Iphone></Iphone>}></Route>
                    <Route path='mobile/iphone' element={<Iphone></Iphone>}></Route>
                    <Route path="mobile/vivo" element={<Vivo></Vivo>}></Route>
                    <Route path="mobile/samsung" element={<Samsung></Samsung>}></Route>
                </Route>
            </Routes>
        </>
    )
}
export default App;
