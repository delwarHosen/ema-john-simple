import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCurt] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCurt(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product
                            handleAddToCart={handleAddToCart}
                            key={product.id}
                            product={product}
                        ></Product>
                    )
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;