import Categories from "../components/Categories";
import Product from "../components/Product";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const storage = useOutletContext();

    return (
        <>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold mt-2">Home</h1>
            </div>
            <Categories />
            <Product storage={storage} />
            {/* <h1>Hello</h1>
            <div>outlet{1}</div> */}
        </>
    );
};

export default Home;
