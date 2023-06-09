const express=require('express')
const app=express();
app.use(express.json());

app.get('/add',(req,res)=>{
    
   
    const num1=Number(req.query.num1)
    const num2=Number(req.query.num2);
    if(isNaN(num1) || isNaN(num2))
    {
        console.log("Not valid input")
        res.send({error:"please provide valid input"})
        return
    }
    const sum=num1+num2;
    console.log(sum);
    res.send({sum});
})
app.listen(3002,()=>{
    console.log("server is running in 3002")
})