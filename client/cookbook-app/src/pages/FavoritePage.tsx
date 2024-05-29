import Navbar from "@/components/Navbar";
import RecipesCard from "@/components/RecipesCard";
import { useEffect, useState } from "react";

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
      const response = await fetch("http://localhost:3000/favourite/get", {
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
      <div className=" text-white flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl font-bold text-center">Favourite Recipes</h1>
      </div>
     {
      recipes.length > 0?  <div className="mt-10 mx-20 grid grid-cols-4 gap-8 gap-y-10">
      {recipes.map((recipe) => (
        <RecipesCard
          key={recipe.name}
          id={recipe.id}
          name={recipe.name}
          thumbnailImage={recipe.thumbnailImage}
        />
      ))}
    </div> : <h1 className="text-white text-center mt-20">No Recipe Found in Favourite</h1>
     }
      <div style={{ height: "300px" }}></div>
    </div>
  );
};

export default RecipesPage;
