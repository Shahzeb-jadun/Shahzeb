import { useEffect, useState } from "react";

function Recipe() {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((result) => {
                if (!result.ok) {
                    throw new Error(`Error Status: ${result.status}`);
                }
                return result.json();
            })
            .then((response) => {
                setRecipe(response.categories);
                console.log(recipe);
            })
            .catch((error) => {
                console.error(`Error Fetching Data`, error);
            })
    }, []);



    return (
        <>
            <h1>Test</h1>

            {recipe.map((item) => {
                return (
                    <div>
                    <h2>{item.strCategory} </h2><br/>
                    <p>{item.strCategoryThumb}</p><br/>
                    </div>
                    
                )

            }


            )}

        </>
    );
}

export default Recipe;