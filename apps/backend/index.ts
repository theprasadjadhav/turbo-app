import  express  from 'express';
import {prismaClient }from "@repo/db"

const app = express()

app.use(express.json())

app.get("/", async(req,res)=>{

    const todos = await prismaClient.todo.findMany()

    res.json({
        todos
    })
    
})

app.post("/",async (req,res)=>{
    await prismaClient.todo.create({
        data:{
            title: req.body.title,
            body:req.body.body,
            status:false,
        }
    })
    res.send("created successfuly")
})

app.listen(3000)