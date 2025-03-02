// Router
import { useOutletContext } from "react-router-dom";

// Components
import Categories from "../components/Categories";
import Product from "../components/Product";

const Home = () => {
    const [storage, categoriesFilter, setStorage] = useOutletContext();

    return (
        <>
            <Categories />
            <Product storage={storage} categoriesFilter={categoriesFilter} setStorage={setStorage} />
        </>
    );
};

export default Home;
