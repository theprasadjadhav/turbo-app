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

//server side components without props are statically generated at build time to force then to not do so iuse below exports 

//this will force to do generate static page and it will be server side component
export const dynamic = "force-dynamic";

// This will auto revalidate the page every 15 seconds
// export const revalidate = 15; 