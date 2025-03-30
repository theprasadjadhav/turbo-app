"use server"

import { prismaClient } from "@repo/db";

export async function getTodos() {
  try {
    const todos = await prismaClient.todo.findMany();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
} 