import Navbar from "@/components/Navbar";
import RecipesCard from "@/components/RecipesCard";
import { useEffect, useState } from "react";
import recipe_hero_img from "../img/recipe_hero_img.webp";

type Recipe = {
  id: number;
  name: string;
  thumbnailImage: string;
};

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    console.log(recipes);
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:3000/recipes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,

          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-col max-w-full">
      <Navbar />
      <img
        className=" max-w-full mx-20 my-10 rounded-lg"
        src={recipe_hero_img}
        alt="recipes"
      />
      <div className=" mx-20 grid grid-cols-4 gap-8 gap-y-10">
        {recipes.map((recipe) => (
          <RecipesCard
            key={recipe.name}
            id={recipe.id}
            name={recipe.name}
            thumbnailImage={recipe.thumbnailImage}
          />
        ))}
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
  );
};

export default RecipesPage;
