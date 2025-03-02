// Hooks
import { useEffect, useState } from "react";

// Router
import { useOutletContext } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState(null);
    const [, , setCategoriesFilter] = useOutletContext();

    const handleSelect = (category) => {
        setCategoriesFilter(category);
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex gap-2  flex-col items-center mt-24 mx-5">
                <h2 className="text-xl font-bold">Filter</h2>
                <div className="flex gap-2">
                    {categories &&
                        categories.map((category, index) => {
                            return (
                                <button key={index} onClick={() => handleSelect(category)} className="p-2 rounded-xl cursor-pointer bg-blue-400 text-white hover:bg-blue-500">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            );
                        })}
                    <button onClick={() => handleSelect("all")} className="p-2 rounded-xl cursor-pointer bg-orange-400 text-white hover:bg-orange-500">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
