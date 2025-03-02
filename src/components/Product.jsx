// Hooks
import { useState, useEffect } from "react";

// Components
import AddCart from "./AddCart";
import CounterCart from "./CounterCart";

const Product = ({ storage, categoriesFilter, setStorage }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 justify-center my-5 mx-5">
                {products &&
                    products.map((product, index) => {
                        return product.category === categoriesFilter || categoriesFilter === "all" ? (
                            <div key={index} className="bg-white p-4 rounded-xl flex flex-col gap-2 items-center border border-neutral-300">
                                <h2 className="font-bold">{product.title.slice(0, 30)}</h2>
                                <img className="w-36 h-36 min-w-24 min-h-24 object-contain my-4" src={product.image} alt="" />
                                <p className="font-bold">{`$${product.price}`}</p>
                                {product.id in storage ? <CounterCart product={product} storage={storage} setStorage={setStorage} /> : <AddCart product={product} setStorage={setStorage} />}
                            </div>
                        ) : null;
                    })}
            </div>
        </div>
    );
};

export default Product;
