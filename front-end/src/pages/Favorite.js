import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import API_URL from "../env/Constants";
import FavoriteCard from "../components/FavoriteCard";

const Favorite = () => {
    const [grid, setGrid] = useState(2);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        axios.get(`${API_URL}/api/user/favorite`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const toggleFavorite = (productId) => {
        axios.put(`${API_URL}/api/product/favorite`, {prodId: productId })
            .then(response => {
               // Sau khi xoa se goi lai ham ferchFavorite de cap nhat lai danh sach yeu thich
                fetchFavorites();
            })
            .catch(error => {
                setError(error.message);
            });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <Meta title="Sản phẩm yêu thích"></Meta>
            <BreadCrumb title="Sản phẩm yêu thích"></BreadCrumb>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl justify-content-center">
                    <div className="row gap-10 justify-content-lg-start">
                        {products.length > 0 ? products.map(product => (
                            <FavoriteCard
                                key={product._id}
                                product={product}
                                grid={grid}
                                toggleFavorite={toggleFavorite}
                            />
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Favorite;
