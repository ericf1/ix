import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

import { firestore } from "../firebase/firebase";
import { Recipe } from "../models/recipe";

class RecipeService {
  async createRecipe(recipe) {
    const collectionReference = collection(firestore, "recipes");
    const docRef = await addDoc(collectionReference, {
      title: recipe.title,
      author: recipe.author,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      link: recipe.link,
      img: recipe.img,
    });
    recipe.id = docRef.id;
    return recipe;
  }
  async readRecipes() {
    const collectionReference = collection(firestore, "recipes");
    const q = query(collectionReference);
    const querySnapshot = await getDocs(q);
    let recipes = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      recipes.push(new Recipe(doc.id, data.title, data.author, data.isbn));
    });
    return recipes;
  }
  async updateRecipe() {}
  async deleteRecipe(id) {
    const docRef = doc(firestore, "recipes", id);
    await deleteDoc(docRef);
  }
}

const service = new RecipeService();
export default service;
