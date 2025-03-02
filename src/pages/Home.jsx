import Categories from "../components/Categories";
import Product from "../components/Product";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const [storage, categoriesFilter] = useOutletContext();
    // const [, categoriesFilter] = useOutletContext();
    // console.log(categoriesFilter);

    return (
        <>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold mt-2">Home</h1>
            </div>
            <Categories />
            <Product storage={storage} categoriesFilter={categoriesFilter} />
        </>
    );
};

export default Home;
