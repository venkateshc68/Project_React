import React from 'react'
import Slides from './components/Slides'
import Serve from './components/Serve';
import Get from './components/Get'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div>
            <br></br>
            <Slides/>
            
       <div>
           <br></br>
        <h4 className= "text-center" style={{fontFamily:"verdana"}}>Our Services...</h4><br></br>
        <Serve/>
        <br></br>
        <Get/>
        <Footer/>
        </div>
    </div>
    )
}
