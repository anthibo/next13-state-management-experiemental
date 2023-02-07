import { Todo } from '@/types/todo';
import Link from 'next/link';
import React from 'react'



const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  console.log('todos', todos);
  return todos

}
export default async function TodoList() {
  const todos = await fetchTodos();
  return (
    <>
    {todos.map((todo) => (
      <p key={todo.id}>
        <Link href={`todos/${todo.id}`}>Todo: {todo.title}</Link>
      </p>

    ))}
    </>
  )
}
