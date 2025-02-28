const AddCart = ({ product }) => {
    const handleAdd = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]++;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        } else {
            localStorage.setItem("cart", JSON.stringify({ [product.id]: [product.title, product.price, 1], ...previousData }));
        }
    };

    return (
        <button onClick={() => handleAdd(product)} className="p-2 bg-blue-400 rounded text-white">
            Add to Cart
        </button>
    );
};

export default AddCart;
