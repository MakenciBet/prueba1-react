import { useEffect, useState} from "react";
import MiApi from "./components/MiApi";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

export default function App(){

    return (
    <div>
      <h1>Mi página de API</h1>

      <p>Es increible todo lo que podemos buscar... ven realiza tu búsqueda</p>

      <MiApi />

      <footer>Todos los derechos NO son reservados</footer>
        
    </div>
  );
}
