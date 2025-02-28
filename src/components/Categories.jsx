import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <div className="flex gap-2 justify-center mt-5">
            {categories &&
                categories.map((category, index) => {
                    return (
                        <p key={index} className="border-2 border-blue-900 p-2 rounded-xl text-md font-bold">
                            {category}
                        </p>
                    );
                })}
        </div>
    );
};

export default Categories;
