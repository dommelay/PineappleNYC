import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import{useState, useEffect} from 'react'


const App = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(true)
    // alert('clicked');
  }

  return (

   <>

    <div onClick = {handleMenu} className='appcontainer'>

      <div onClick = {handleMenu} className='menudiv'>
        <img src='/images/menu.png' alt='menu bar' className='menubar'/>
      </div>

{ menu ? 

<div onClick = {handleMenu} className='navcontainer'>
    <div className='nav'>
        <Link to = {'/'}><h3 className='navlink'>Home</h3></Link>
        <Link to = {'/about'}><h3 className='navlink'>About</h3></Link>

         <h3 className='navlink'>Contact</h3>
         <h3 className='navlink'>Vendors</h3>
         <h3 className='navlink'>Lookbook</h3>
         <h3 className='navlink'>Events</h3>
        
    </div>
</div>

:

<></>

}




    <BrowserRouter>
      <Routes>
        
      <Route path='/about' element = {<About/>}/>
      <Route path='/' element = {<Home/>}/>

      </Routes>
    </BrowserRouter>


    </div>
   </>

  )
}




export default App