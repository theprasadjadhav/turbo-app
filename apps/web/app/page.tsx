"use client"
import { prismaClient } from "@repo/db";
import { useEffect, useState } from "react";


type TodosType= {
  id: string;
  title: string;
  body: string;
  status: boolean;
}

export default function Home() {



  const [todos,setTodos]= useState<TodosType[]>()
  

  useEffect(() => {

    async function getTodos() {
      const todos = await prismaClient.todo.findMany()
      setTodos(todos)
    }

    getTodos()

  }, [todos])

  return (
    <div>
      {JSON.stringify(todos)}
      <button onClick={()=>alert("hi there")}></button>
    </div>
  );
}
