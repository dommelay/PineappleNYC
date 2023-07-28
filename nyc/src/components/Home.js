import {Link} from 'react-router-dom'
import {useState, useEffect } from 'react'

const Home = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }



    return (

        <>

                    
    <div className='container'>

    <div onClick= {handleMenu} className='logodiv'>
                        {/* <img className='logo' src='/images/pinelogo.png' alt='pineapplenyc logo'/> */}

                        <img src='/images/menu.png' alt='menu icon' className='menubar'/>
                        </div>
            <div className='homecontainer'>

        <div className='homediv1'>
            <h1 className='hometitle1'>PINEAPPLE NEW YORK</h1>
        </div>
                <div className='header'>

                <img className='logo' src='/images/pinelogo.png' alt='pineapplenyc logo'/>
                    <h1 className='hometitle'>PINEAPPLE NEW YORK</h1>
                 <img className='logo' src='/images/pinelogo.png' alt='pineapplenyc logo'/>
                
                    {/* <div className='homeaddress'>
                        <h2 className='address'>203 East 26th St</h2>
                        <h2 className='address'>Kips Bay, NYC 10010</h2>
                    </div> */}
                   
                </div>
                
                <div className='homeimgcontainer'>
                    <img className='homeimg home1' src='/images/pinehome1.jpg' alt='home'/>
                    <img className='homeimg home2' src='/images/pinehome2.jpg' alt='home'/>
                    <img className='homeimg home3' src='/images/pinehome3.jpg' alt='home'/>
                </div>

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

        </div>
        </>


    )
}


export default Home