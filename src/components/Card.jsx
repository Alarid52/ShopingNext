import Image from 'next/image'

export const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt="img-item"/>
            <h3>{product.title}</h3>
            <p>Rating: {product.rating.rate} / 5</p>
            <h4>Price: ${product.price}</h4>
            <button className="add-cart">Add to cart</button>
        </div>
    )
}
