import React from "react";
import { Recipe } from "../models/recipe";

export default function RecipeForm({ createRecipe, recipeService }) {
  async function handleFormSubmit(e) {
    try {
      e.preventDefault();
      const title = e.target.title;
      const author = e.target.author;
      const link = e.target.link;
      const ingredients = e.target.ingredients;
      const instructions = e.target.instructions;
      const img = e.target.img;

      let recipe = new Recipe(
        null,
        title,
        author,
        ingredients,
        instructions,
        img,
        link
      );
      recipe = new Recipe(
        null,
        "title",
        "author",
        "ingredients",
        "instructions",
        "img",
        "link"
      );

      recipe = await recipeService.createRecipe(recipe);
      createRecipe(recipe);
      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input type="text" id="title" name="title" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input type="text" id="author" name="author" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="link">
          Link
        </label>
        <input type="text" id="link" name="link" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="image-link">
          Image Link
        </label>
        <input
          type="text"
          id="image-link"
          name="img"
          className="form-control"
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          className="form-control"
          name="ingredients"
          id="ingredients"
          rows="4"
        ></textarea>
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="form-control"
          id="instructions"
          rows="4"
          name="instructions"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Submit
      </button>
    </form>
  );
}
