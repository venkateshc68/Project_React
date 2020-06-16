import React from 'react'
import './Gallery.css'
import gard from './images/gard.jpg'
import Footer from './components/Footer'


export default function Gallery() {
    return (
        <div>
        <div class="container gallery-container">
<br></br>
    <h6 className="text-center" style={{fontFamily:"verdana"}}>

Please take a moment to view some photos of our recent projects.</h6>

    
    
    <div class="tz-gallery">

        <div class="row">
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox"  href="">
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox"  href="">
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>

                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="">
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="" >
                    <img src={gard} alt=".."></img>
                </a>
            </div>
        </div>

    </div>

</div>
<Footer/>
</div>

    )
}
