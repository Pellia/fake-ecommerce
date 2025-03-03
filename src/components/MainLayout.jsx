// Hooks
import { useState } from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import NavBar from "./NavBar";

const MainLayout = () => {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("cart")) || {});

    return (
        <>
            <NavBar />
            <Outlet context={[storage, setStorage]} />
        </>
    );
};

export default MainLayout;
