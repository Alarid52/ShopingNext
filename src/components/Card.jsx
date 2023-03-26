export const Card = ({ product, insertItem }) => {

    return (
        <div className="card">
            <img src={product.image} alt="img-item" />
            <h3>{product.title}</h3>
            <p>Rating: {product.rating.rate} / 5</p>
            <h4>Price: ${product.price}</h4>
            <button className="add-cart" onClick={() => insertItem(product)}>Add to cart</button>
        </div>
    )
}