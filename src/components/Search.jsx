export default function Search(props) {
return (
    <input type="text" 
    placeholder="Buscar..." 
    onChange={props.onChange} 
    value={props.search} 
    />
);
}


