import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Electronics from './Electronics'
import Iphone from './Iphone'
import Mobiles from './Mobiles'
import Watches from './Watches'
import LinkCompo from './LinkComp'
import ContextAPI from './ContextAPI'
import Mi from './SubRoutes/Mobile/Mi'
import Samsung from './SubRoutes/Mobile/Samsung'
import Vivo from './SubRoutes/Mobile/Vivo'
import Realme from './SubRoutes/Mobile/Realme'
import Poco from './SubRoutes/Mobile/Poco'
import Login from './login/Login'
import Register from './login/Register'
import Detail from './Details'
import { CartProvider } from './Cart/CartContext'
import CartPage from './Cart/cartPage'
const RouteComp = () => {
  return (
    <div>
      <BrowserRouter>
      
      <ContextAPI>  
      <Routes>
        <Route path='/' element={<><LinkCompo/><Home/></>}/>
        <Route path='/store' element={<><LinkCompo/><Store/></>}/>
        <Route path='/electronics' element={<><LinkCompo/><Electronics/></>}/>
        <Route path='/iphone' element={<><LinkCompo/><Iphone/></>}/>
        <Route path='/mobiles' element={<><LinkCompo/><Mobiles/></>}/>
        <Route path='/watches' element={<><LinkCompo/><Watches/></>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> 

        {/* SubRoutes of Mobiles */}
        <Route path='/mobiles/subMi' element={<Mi/>}/>
        <Route path='/mobiles/subSamsung' element={<Samsung/>}/>
        <Route path='/mobiles/subVivo' element={<Vivo/>}/>
        <Route path='/mobiles/subRealme' element={<Realme/>}/>
        <Route path='/mobiles/subPoco' element={<Poco/>}/>
        <Route path='/store/subWatches' element={<Watches/>}/>
        <Route path='/store/subWatches' element={<Watches/>}/>
      </Routes>
      </ContextAPI>
     
      </BrowserRouter>
    </div>
  )
}

export default RouteComp
