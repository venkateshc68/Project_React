import React, { Component } from 'react'
import './contact.css';
import Footer from './components/Footer'
import axios from 'axios';

export default class Contactus extends Component {
  state={
    name:"",
    mobno:"",
    email:"",
    message:"",
    sent:false
}
//handle inputs
handleName=(e)=>{
this.setState({
    name:e.target.value
})

}
handleMobNo=(e)=>{
this.setState({
    mobno:e.target.value
})

}
handleEmail=(e)=>{
this.setState({
    email:e.target.value
})

}
handleMessage=(e)=>{
this.setState({
    message:e.target.value
})

}

formSubmit=(e)=>{
e.preventDefault();
let data={
    name:this.state.name,
    mobno:this.state.mobno,
    email:this.state.email,
    message:this.state.message
}
axios.post('/api/forma',data).then(res=>{
    this.setState({
        sent:true,
    },this.resetForm())
}).catch(()=>{
    console.log("messge not sent")
})
}
//reset form
resetForm=()=>{
this.setState({
    name:"",
    mobno:"",
    email:"",
    message:""
})
setTimeout(()=>{
    this.setState({
        sent:false,
    })
},3001)
}
    
    render() {
        return (
            <div>
              <div className="container">
             <form>
                 <div className="singleItem">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" className="name" placeholder="your name"
                     value={this.state.name} onChange={this.handleName}
                     required>
                     </input>
                 </div>
                 <div className="singleItem">
                     <label htmlFor="mobno">Mob No</label>
                     <input type="number" name="name" className="name" placeholder="your name"
value={this.state.mobno} onChange={this.handleMobNo}
                     
                     required>
                         
                     </input>
                 </div>
                 <div className="singleItem">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="name" className="name" placeholder="your name" required
value={this.state.email} onChange={this.handleEmail}>
                         
                     </input>
                 </div>
                 <div className="textArea singleItem">
                     <label htmlFor="message">Message</label>
                     <textarea name="message" id="" rows="5" cols="30" placeholder="message"
                     
                     value={this.state.message} onChange={this.handleMessage}>

                     </textarea>
                 </div>
                 <div className="msg">Message has been sent</div>
                 <div className="btn">
                     <button type="submit">Submit</button>
                 </div>
             </form>
            </div>

<Footer/>
            </div>
        )
    }
}
