import React from "react";

export default function RecipeCard({
  title,
  author,
  link,
  img,
  ingredients,
  instructions,
  id,
  recipeService,
}) {
  async function removeRecipe(e) {
    try {
      await recipeService.deleteRecipe(e.target.id);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="card" id={id} style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">By: {author}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ingredients}</li>
        <li className="list-group-item">{instructions}</li>
      </ul>
      <div className="card-body">
        <a href={link} className="card-link">
          Link
        </a>
        <button
          id={id}
          onClick={removeRecipe}
          className="btn bi bi-trash"
        ></button>
        <button className="btn bi bi-arrow-90deg-up"></button>
      </div>
    </div>
  );
}
