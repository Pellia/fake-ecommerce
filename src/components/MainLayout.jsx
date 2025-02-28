import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("cart")) || {});

    // const test = { hi: ["test", "second"], World: ["testtest"] };
    // const test = "test";

    // console.log(storage);

    return (
        <>
            <NavBar />
            <Outlet context={storage} />
        </>
    );
};

export default MainLayout;
