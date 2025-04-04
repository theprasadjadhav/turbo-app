import { prismaClient } from '@repo/db';


Bun.serve({
    port: 3002,
    fetch(req,server){
        if(server.upgrade(req)){
            return
        }
        return new Response("upgrade failed",{status:500})
    },
    websocket:{
        message(ws,message){
            const req = typeof message === "string" ?  JSON.parse(message) : ""
            if(req.type==="create"){
                prismaClient.todo.create({
                    data:{
                        title: req.title,
                        body:req.body,
                        status:false,
                    }
                }).then((todo)=>{
                    ws.send(JSON.stringify({message: "created todo",todo}))
                })
            }else if(req.type === "get"){
                prismaClient.todo.findMany()
                .then((todos)=>{
                    ws.send(JSON.stringify(todos))
                })
            }
        }
    }
})