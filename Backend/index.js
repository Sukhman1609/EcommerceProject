const express=require("express");
const categoryRoute = require("./Routing/categories");

const Port=7000;
const app=express()
app.use(express.json())
const cors=require("cors")
// const blog = require("./Routing/blog");
app.use(cors({
        origin:"*"
}))

app.use("/api",categoryRoute);
app.get('/',(req,res)=>{
        console.log('Homme page')
     res.send('API is running fine')   
})


app.listen(7000,()=>{
        try{
                console.log(`Server is running fine-${Port}`)
        }
        catch(err){
                console.log(`Error occured in the code-${err}`)
        }
})












