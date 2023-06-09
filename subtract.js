const express=require('express')
const app=express();
app.use(express.json());
app.get('/subtract',(req,res)=>{
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2)
    if(isNaN(num1)|| isNaN(num2)){
        res.send({
            error:"not a valid input"
        })
        return
    }
    const sub=num1-num2;
    res.send({sub})
})
app.listen(3002,()=>{
    console.log("server is running")
})
app.get('/addList',(req,res)=>{
    const num=req.query.Number="1,2,3,4"
    const number=num.split(",")
    console.log(number);
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum+=Number(number[i]);
    }
    res.send({sum})
})
