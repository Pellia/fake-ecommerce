import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const [storage, setStorage] = useOutletContext();

    // console.log(JSON.stringify(storage));
    return (
        <div className="max-w-7xl mx-auto mt-24">
            {/* {storage && storage.map((item, i) => {
                return ()
            })} */}
            <div className="mx-5">Cart</div>
        </div>
    );
};

export default Cart;
