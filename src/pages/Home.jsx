// Hooks
import { useState } from "react";

// Router
import { useOutletContext } from "react-router-dom";

// Components
import Categories from "../components/Categories";
import Product from "../components/Product";

const Home = () => {
    const [storage, setStorage] = useOutletContext();
    const [categoriesFilter, setCategoriesFilter] = useState("all");

    return (
        <>
            <Categories setCategoriesFilter={setCategoriesFilter} />
            <Product storage={storage} categoriesFilter={categoriesFilter} setStorage={setStorage} />
        </>
    );
};

export default Home;
