import React, { useEffect, useState } from 'react'
import { ListProducts } from '../Data/Data'



const Product = ({ match, location, history }) => {
    // console.log(typeof match.params.id)
    // const [product, setProduct] = useState({});
    // console.log(product)

    // useEffect(() => {
    //     setProduct(ListProducts.find(product => product.id === +match.params.id))
    // }, [match.params.id]);
    console.log(location.state)

    const product = location.state


    return (
        <div className="productDetails">
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <img src={product.img} alt={product.name} className="productImg" />
            <button onClick={() => history.goBack()}>GoBack</button>
            <button onClick={() => history.push('/about')}>Go to About</button>
        </div>
    )
}

export default Product
