import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './shop.css';

function Shop() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        getproducts();
    }, []);
    const getproducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setproducts(json))
    }
    return (
        <div className="row mx-3 justify-content-center mt-5 ">
        {products.map(product => {

            return (
                    <Link className="position-relative text-dark col-3 mx-3  shadow p-2 mb-5 bg-body rounded text-decoration-none text-center" to={`/Shop/${product.id}`} key={product.id}>
                       <div className="rating btn text-white m-2   p-0  position-absolute top-0 start-0" >{product.rating.rate}</div> 
                        <figure className="productimg m-auto"><img src={product.image} alt=""  className="w-100 my-3"/></figure>
                        <div className="mb-2">{product.category}</div>
                        <h6>{product.title}</h6>
                        <div>{product.price}$</div>
                    </Link>
            )
        }

        )}
        </div>
)
};

export default Shop;