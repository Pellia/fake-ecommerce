const CounterBtn = ({ product, storage, setStorage }) => {
    const handleAdd = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]++;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        }
        setStorage(JSON.parse(localStorage.getItem("cart")) || {});
    };

    const handleSub = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]--;
            if (previousData[product.id][2] === 0) {
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
            <p>{`In Cart: ${storage[product.id][2]}`}</p>
            <button onClick={() => handleAdd(product)} className="bg-green-300 p-2 rounded-xl w-12">
                +
            </button>
        </div>
    );
};

export default CounterBtn;
