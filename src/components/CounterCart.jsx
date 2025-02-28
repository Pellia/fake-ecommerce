const CounterCart = ({ product }) => {
    const handleAdd = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]++;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        }
    };

    const handleSub = (product) => {
        const previousData = JSON.parse(localStorage.getItem("cart")) || {};
        if (product.id in previousData) {
            previousData[product.id][2]--;
            localStorage.setItem("cart", JSON.stringify({ ...previousData }));
        }
    };

    return (
        <>
            <button onClick={() => handleSub(product)}>-</button>
            counter
            <button onClick={() => handleAdd(product)}>+</button>
        </>
    );
};

export default CounterCart;
