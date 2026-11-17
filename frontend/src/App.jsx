
import { Routes,Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Cart from './components/Pages/Cart/Cart'
import ExploreMenu from './components/Pages/exploremenu/ExploreMenu'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import FoodItems from './components/FoodItems/FoodItems'
import { useState } from 'react'
import Login from './components/Login/Login'
import Footer from './components/Pages/Footer/Footer'

function App() {
  const[showLogin,setShowLogin]=useState(false)

  return (

<>
{
  showLogin?<Login setShowLogin={setShowLogin}/>:<></>
}
 <Navbar setShowLogin={setShowLogin}/>
  <div className='app'>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/exploremenu' element={<ExploreMenu/>}/>
  <Route path='/order' element={<PlaceOrder/>}/>
  <Route path='/exploremenu' element={<ExploreMenu/>}/>
  <Route path='/foodDisplay' element={<FoodDisplay/>}>
  <Route path='foodItems' element={<FoodItems/>}/>
  </Route>
 </Routes>
 <Footer/>
</div>
</>
  )
}

export default App
