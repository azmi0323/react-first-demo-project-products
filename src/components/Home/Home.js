import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    
    return (
        <div>
            <div className="container">
                <Product></Product>
            </div>
        </div>
    );
};

export default Home;