import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
const App = () => {




  return (

   <>

    <BrowserRouter>
      <Routes>
        
      <Route path='/' element = {<Home/>}/>

      </Routes>
    </BrowserRouter>

   </>

  )
}




export default App