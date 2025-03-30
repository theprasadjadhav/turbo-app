"use client"
import { getTodos } from "./actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos,setTodos]= useState<TodosType[]>([])

  useEffect(() => {
    getTodos().then((todos) => {
      console.log(todos);
      setTodos(todos);
    });
  }, []);

  return (
    <div>
      <h1>Hello World go</h1>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title} {todo.body}</h2>
        </div>
      ))}
    </div>
  );
}


type TodosType= {
  id: string;
  title: string;
  body: string;
  status: boolean;
}