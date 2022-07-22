import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import RecipeCard from "./components/RecipeCard";
import RecipeForm from "./components/RecipeForm";
import recipeService from "./services/recipes.service";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {}, []);
  function createRecipe(newRecipe) {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  }
  return (
    <div className="container">
      {recipes.map(
        ({ title, author, link, img, ingredients, instructions, id }) => (
          <RecipeCard
            title={title}
            author={author}
            link={link}
            img={img}
            ingredients={ingredients}
            instructions={instructions}
            key={id}
            id={id}
            recipeService={recipeService}
          ></RecipeCard>
        )
      )}
      <RecipeForm
        createRecipe={createRecipe}
        recipeService={recipeService}
      ></RecipeForm>
    </div>
  );
}

export default App;
