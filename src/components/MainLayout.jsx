// Hooks
import { useState } from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import NavBar from "./NavBar";

const MainLayout = () => {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("cart")) || {});
    const [categoriesFilter, setCategoriesFilter] = useState("all");

    console.log(JSON.stringify(storage));

    return (
        <>
            <NavBar />
            <Outlet context={[storage, categoriesFilter, setCategoriesFilter, setStorage]} />
        </>
    );
};

export default MainLayout;
