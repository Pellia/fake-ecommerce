import { useState, useEffect } from "react";
import AddCart from "./AddCart";
import CounterCart from "./CounterCart";

const Product = ({ storage, categoriesFilter }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="flex gap-2 justify-center flex-wrap mt-5 ">
            {products &&
                products.map((product, index) => {
                    return product.category === categoriesFilter || categoriesFilter === "all" ? (
                        <div key={index} className="border border-blue-900 p-2 rounded-xl flex flex-col gap-2 items-center">
                            <h2 className="">{product.title}</h2>
                            <img className="w-36 h-36 min-w-24 min-h-24 object-contain" src={product.image} alt="" />
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            {product.id in storage ? <CounterCart product={product} /> : <AddCart product={product} />}
                        </div>
                    ) : null;
                })}
        </div>
    );
};

export default Product;
