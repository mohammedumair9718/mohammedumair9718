
import { Route, Routes ,useLocation} from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Backgoundimg } from './Componants/backImg'
import { Ragester } from './pages/Ragester'
import { Cart } from './pages/Cart'
import NavaBar from './Componants/NaveBar'
import { About } from './pages/About'
import { Contact } from './pages/Contact-us'
import { Product } from './pages/Product'
import { ProductsDetails } from './Componants/ProductDetails'
import { Cartdetails } from './pages/Cartdetails'


function App() {

  const location = useLocation();
  const cuurRoute = location.pathname;
  return (
    <>
    
      
      <div>
      {
        cuurRoute === "" || cuurRoute === '/Ragister' ? <></> : <NavaBar/>
      }
        <Routes>
        <Route path='/'element={<Backgoundimg/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='Ragister' element={<Ragester/> }></Route>
          <Route path='/Cart' element={<Cart/> }></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact'element={<Contact/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/Product-details/:id' element={<ProductsDetails/>}></Route>
          {/* <Route path='Cart-details/:id' element={<Cartdetails/>}></Route>   */}

          
        </Routes>

      </div>



    </>
  )
}

export default App
