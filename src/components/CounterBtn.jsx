const CounterBtn = ({ product, storage, setStorage }) => {
    // Add to Cart
    const handleAdd = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][3]++;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        }
        setStorage(JSON.parse(localStorage.getItem("cart")) || {});
    };

    // Remove from Card
    const handleSub = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][3]--;
            if (previousData[product.id][3] === 0) {
                delete previousData[product.id];
            }
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        }
        setStorage(JSON.parse(localStorage.getItem("cart")) || {});
    };

    return (
        <div className="flex gap-2 items-center">
            <button onClick={() => handleSub(product)} className="bg-amber-300 p-2 rounded-xl w-12 text-xl font-bold">
                -
            </button>
            <p>{`In Cart: ${storage[product.id][3]}`}</p>
            <button onClick={() => handleAdd(product)} className="bg-green-300 p-2 rounded-xl w-12">
                +
            </button>
        </div>
    );
};

export default CounterBtn;
