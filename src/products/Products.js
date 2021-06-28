import React from 'react'

const Products = ({ items = [] }) => {
    if (items.length <= 0) {
        return (
            <div>
                No items found
            </div>
        )
    } else {
        return <div>
            {items.map((item, index) => {
                return <div className="products" key={index}><h1>{item}</h1></div>
            })}
        </div>
    }
}

export default Products
