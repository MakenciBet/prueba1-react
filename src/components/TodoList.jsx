import Card from "./Card";

export default function TodosList(props) {
    return  (
        <ul>
            {props.filterTodos.map((todo) => (
                <Card 
                todo={todo} 
                key={todo.id} />
      )) } 
  </ul> 
  );
}