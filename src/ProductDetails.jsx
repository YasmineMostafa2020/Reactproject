import { useEffect, useState } from "react";

function ProductDetails(match) {
    const [item, setitem] = useState({})
    useEffect(() => {
        getdetails();
    }, [])

    const getdetails = () => {
        return fetch(`https://fakestoreapi.com/products/${match.match.params.id}`)
            .then(res => res.json())
            .then(json => setitem(json))

    }
    return (
        <div>
            {item
                ?
                <div className="w-50 m-auto text-center   border border-white mt-5">
                  <figure className="w-50 m-auto">  <img src={item.image} alt="" className="w-100 shadow p-2 mb-5 bg-body rounded  px-3" /></figure>
                    <div className="mt-2">{item.category}</div>
                    <h6>{item.title}</h6>
                    <p>{item.price}$</p>
                </div>
                :
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                }

        </div>

    );
}
export default ProductDetails;