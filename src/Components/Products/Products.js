import React from 'react'
import { ListProducts } from '../Data/Data'
import ProductCard from '../ProductCard/ProductCard'


const Products = () => {
    return (
        <div className="productsContent">
            <h2>This is the Page Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium ad rerum dolor ullam tenetur deserunt natus pariatur in, eligendi aliquam explicabo omnis perferendis quisquam molestias earum nemo sed nostrum vitae voluptatem incidunt maxime maiores odio fuga! Nam ex enim deserunt tempora nemo ratione, odit, a pariatur tempore qui, repellendus maiores vitae! Magni minima laborum vero totam nostrum cupiditate iste optio excepturi blanditiis magnam? Totam ipsa commodi, nisi rem nostrum ipsum soluta, ratione doloremque odit, in iure. Hic doloribus quia dolorem facere eligendi temporibus nam nostrum dicta eum, voluptate autem qui voluptatem error amet, labore sint, tempore a nihil unde!</p>
            <hr />
            <div className="listProducts">
                {ListProducts.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </div >
    )
}

export default Products
