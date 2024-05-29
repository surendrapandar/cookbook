import Navbar from "@/components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";

type recipeType = {
  id: number;
  name: string;
  description: string;
  thumbnailImage: string;
  ingredients: string;
  instructions: string;
  postedBy: string;
  postedAt: string;
};

const RecipeDetailsPage = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [recipe, setRecipe] = useState<recipeType>();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipes/getbyid", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  const handleFavBtnClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/favourite", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col mx-20">
      <Navbar />
      {recipe && (
        <div className="flex flex-col items-center text-white max-w-full mx-auto my-10">
          <img
            src={recipe.thumbnailImage}
            alt="Recipe"
            className="max-w-4xl  rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold my-5">{recipe.name}</h1>
          <h2 className="text-2xl font-bold my-5">Instructions</h2>
          <ol className=" max-w-4xl list-decimal list-inside bg-white text-black rounded-lg ">
            <ReactQuill
              value={recipe.instructions}
              modules={{
                toolbar: false,
              }}
              readOnly
              theme="snow"
              style={{
                height: "200px",
                width: "100%",
                border: "none",
              }}
            />
          </ol>
          <h2 className="text-2xl font-bold my-5">Ingredients</h2>
          <ol className="max-w-4xl list-disc list-inside bg-white text-black rounded-lg py-10 px-10">
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ol>

          <p className="pt-10">By {recipe.postedBy}</p>
          <p className="">Posted on {recipe.postedAt.split("", 10)}</p>
          <Button
            onClick={() => handleFavBtnClick()}
            className="mt-5 bg-green-600 hover:bg-orange-400"
          >
            Make it Favourit
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
