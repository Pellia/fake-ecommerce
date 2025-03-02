const AddCart = ({ product, setStorage }) => {
    const handleAdd = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]++;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
            setStorage(JSON.parse(localStorage.getItem("cart")) || {});
        } else {
            localStorage.setItem("cart", JSON.stringify({ [product.id]: [product.title, product.price, 1], ...previousData }));
            setStorage(JSON.parse(localStorage.getItem("cart")) || {});
        }
    };

    return (
        <div className="flex gap-2 items-center">
            <button onClick={() => handleAdd(product)} className="p-2 bg-blue-400 rounded-xl text-white">
                Add to Cart
            </button>
        </div>
    );
};

export default AddCart;
