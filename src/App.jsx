import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './protected/ProtectedRoute'
import ProtectedLayout from './protected/ProtectedLayout'


import { ToastContainer,Bounce } from 'react-toastify'
import Help from './pages/Help'
const App = () => {
  return (
      
     
     <BrowserRouter>
         <div>
      
          <Navbar/>
       
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

        <Routes>

               <Route path='/' element={<Home/>}/>
               <Route path="/help" element={<Help/>}/>
               
             <Route element={<ProtectedLayout/>}>
               <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
             </Route>
             
            
               <Route element={<ProtectedRoute/>}>
                 <Route path="/products" element={<Products/>}/>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/about" element={<About/>}/>
               </Route>
        </Routes>
           
        </div>
    </BrowserRouter>

     
  )
}

export default App