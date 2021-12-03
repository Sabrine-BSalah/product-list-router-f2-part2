import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
    return (
        <div className="productCard">
            {/* <Link to={`/product/${product.id}`}>
                <h3 className="prodName">{product.name}</h3>
            </Link> */}
            <Link to={{
                pathname: `/product/${product.id}`,
                state: product
            }}>
                <h3 className="prodName">{product.name}</h3>
            </Link>
            <img src={product.img} alt={product.name} className="productImg" />
        </div>
    )
}

export default ProductCard
