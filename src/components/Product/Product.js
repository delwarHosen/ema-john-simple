import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p>Raiting: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-info'>
                <p className='btn-name'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;