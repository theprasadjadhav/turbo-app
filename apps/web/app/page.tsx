import { prismaClient } from "@repo/db";

export default async function Home() {
  const todos = await prismaClient.todo.findMany();

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

//this will force to do generate static page and it will be server side component
export const dynamic = "force-dynamic"