import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("cart")) || {});
    const [categoriesFilter, setCategoriesFilter] = useState("all");

    return (
        <>
            <NavBar />
            <Outlet context={[storage, categoriesFilter, setCategoriesFilter]} />
        </>
    );
};

export default MainLayout;
