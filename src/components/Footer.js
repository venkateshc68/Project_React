import React from 'react'

export default function Footer() {
    return (
        <div>
            <div style={{width:"100%",height:"550px",background:"#343a40"}}>
            <p style={{color: "WHITE",paddingTop:"10px"}}></p>
            <div class="container">
         <div class="row">
             <div class="col">
                 <h6 className="list-unstyled" style={{color:"white"}}>Quick Links</h6>
                 <br></br>
                 <ul>
                     <li  style={{color:"red"}}><i class="bx bx-chevron-right"></i> <a href="/Aboutus" style={{color:"white"}}><i class="bx bx-chevron-right"></i> About us</a></li>
                     <li style={{color:"red"}}><a href="Gallery" style={{color:"green"}}>Gallery</a></li>
                     <li style={{color:"red"}}><a href="/Services" style={{color:"green"}}>Services</a></li>
                     <li style={{color:"red"}}><a href="/Contactus" style={{color:"green"}}>Contact us</a></li>



                    
                 </ul>
                 
             </div>
             <div class="col">
                 <h6 className="list-unstyled" style={{color:"white"}}>About us</h6>
                 <br></br>
                 <p style={{color:"green"}}> GH Landscape & Maintenance is a  landscape management company having 15+years of great experience. We are located in Bengaluru, and give our services throughout Karnataka and other states .</p>
                
                 
             </div>
             <div class="col">
                 <h6 className="list-unstyled" style={{color:"white"}}>Our Address</h6>
                 <br></br>
                 <h6 style={{color:"green"}}>#54 Narayanaghatta <br></br><br></br>Anekal(T)<br></br><br></br>Bengaluru 560099 <br></br><br></br>MOB:9845401729</h6>
                 
             </div>
             
         </div>
         
    <br></br><br></br>
    <div className="container-fluid bg-secondry text-white text-center py-3">
        <div className="text-white" style={{fontSize:"3"}}>2020 &copy; GH Landscape All Rights Reserved.. Design Developed and maintained By <span style={{color:"yellow"}}>GH Landscape</span></div>
        
    </div>
    
     </div>
     
        </div>
        </div>
    )
}
