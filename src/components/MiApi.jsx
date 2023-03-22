import { useEffect, useState } from "react";
import Search from "./Search";
import TodoList from "./TodoList";

export default function MiApi(){
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");

  const getData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data)
  };

  useEffect(() => {
    getData();
  }, []);

 const filterTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));
 const sortedTodos = filterTodos.sort((a, b) => a.title.localeCompare(b.title));


return (
    <>
    <Search 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />

<TodoList  filterTodos={sortedTodos} />
</>
);
}