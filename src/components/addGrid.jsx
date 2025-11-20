export default function AddGrid({ lista, onRemove }) {
  return (
    <div>
      {lista.map((item) => (
        <div key={item.id}>
          <span>{item.movie}</span>
          <button onClick={() => onRemoveMovies(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
