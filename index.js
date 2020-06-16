const express=require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('welcome to my forma')
})
app.post('/api/forma',(req,res)=>{
    let data=req.body
    let smtpTransport=nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:"venkateshve203@gmail.com"
            
            
        }
            });
            let mailOptions={
                from:data.email,
                to:'venkateshve203@gmail.com',
                subject:'message from ${data.name}',
                Name:'${data.name}',
                MobNo:'${data.mobno}',
                Email:'${data.email}',
                Message:'${data.message}'

                
                
            };
        
smtpTransport.sendMail(mailOptions,(error,response)=>{
    if(error){
        res.send(error)
    }
    else{

    res.send(succeess);
    }
})
smtpTransport.close();

})