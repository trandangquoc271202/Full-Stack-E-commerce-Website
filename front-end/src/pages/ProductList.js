import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/product')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {products.map(product => (
                <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h2>{product.title}</h2>
                    <p>Slug: {product.slug}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Sold: {product.sold}</p>
                    <p>Total Rating: {product.totalrating}</p>
                    <div>
                        {product.images.length > 0 ? (
                            product.images.map(image => (
                                <img key={image._id} src={image.url} alt={product.title} style={{ width: '100px', marginRight: '10px' }} />
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                    <div>
                        {product.ratings.length > 0 ? (
                            product.ratings.map(rating => (
                                <div key={rating._id}>
                                    <p>Rating: {rating.star}</p>
                                    <p>Comment: {rating.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No ratings available</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
