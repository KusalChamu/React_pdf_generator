export default function AddProductGrid({ product, onRemove }) {
    return(
        <div>
            {product.map((item) => (
                <div
                 key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}