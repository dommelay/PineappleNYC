import {Link} from 'react-router-dom'

const Home = () => {


    return (

        <>
    <div className='container'>

            <div className='homecontainer'>

                <div className='header'>
                    <h1 className='hometitle'>PINEAPPLENYC</h1>
                    <div className='homeaddress'>
                        <h2 className='address'>203 East 26th St</h2>
                        <h2 className='address'>Kips Bay, NYC 10010</h2>
                    </div>
                    <div className='logodiv'>
                        <img className='logo' src='/images/pinelogo.png' alt='pineapplenyc logo'/>
                    </div>
                </div>
                
                <div className='homeimgcontainer'>
                    <img className='homeimg home1' src='/images/pinehome1.jpg' alt='home'/>
                    <img className='homeimg home2' src='/images/pinehome2.jpg' alt='home'/>
                    <img className='homeimg home3' src='/images/pinehome3.jpg' alt='home'/>
                </div>

            </div>

            <div className='navcontainer'>
                <div className='nav'>
                    <Link to = {'/'}><h3 className='navlink'>Home</h3></Link>
                     <Link to = {'/about'}><h3 className='navlink'>About</h3></Link>
                    
                </div>
            </div>
        

        </div>
        </>


    )
}


export default Home