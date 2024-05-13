import Navbar from "@/components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

interface Recipe {
  name: string;
  instructions: string;
  thumbnailImage: string;
  postedAt: string;
  postedBy: string;
  ingredients: string[];
}

const RecipeCreator: React.FC = () => {
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    instructions: "",
    thumbnailImage: "",
    postedAt: "",
    postedBy: "",
    ingredients: [],
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    // Fetch recipe name suggestions from API
    fetchRecipeNameSuggestions();
  }, []);

  const fetchRecipeNameSuggestions = async () => {
    try {
      const response = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=piza"
      );
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      } else {
        console.error("Failed to fetch recipe name suggestions");
      }
    } catch (error) {
      console.error("Error fetching recipe name suggestions:", error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleQuillChange = (value: string) => {
    setRecipe({ ...recipe, instructions: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (quillRef.current?.getEditor().getText().trim() === '') {
        alert('Instructions are required.');
        return;
      }

    const token = localStorage.getItem("token")

    await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        Authorization:
        `Bearer ${token}`,
        "Content-Type": "application/json",
        },
      body: JSON.stringify(recipe),
    })

    navigate("/recipes")
  };
      

  return (
    <div>
        <Navbar />
        <div className=" text-white max-w-3xl mx-auto mt-8 mb-5">
      <h2 className="text-2xl font-bold mb-4">Share Your Recipe With The World</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="recipeName" className="block mb-1">
            Recipe Name:
          </label>
          <input
            type="text"
            id="recipeName"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Instructions:</label>
          <ReactQuill
          ref={quillRef}
            value={recipe.instructions}
            onChange={handleQuillChange}
            theme="snow"
            className=" bg-white text-black border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="thumbnailImage" className="block mb-1">
            Thumbnail Image (URL):
          </label>
          <input
            type="text"
            id="thumbnailImage"
            name="thumbnailImage"
            value={recipe.thumbnailImage}
            onChange={handleInputChange}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        {/* <div>
          <label htmlFor="postedAt" className="block mb-1">
            Posted At (Date):
          </label>
          <input
            type="date"
            id="postedAt"
            name="postedAt"
            value={recipe.postedAt}
            onChange={handleInputChange}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div> */}
        <div>
          <label htmlFor="postedBy" className="block mb-1">
            Author Name (Full Name):
          </label>
          <input
            type="text"
            id="postedBy"
            name="postedBy"
            value={recipe.postedBy}
            onChange={handleInputChange}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block mb-1">
            Ingredients (comma separated):
          </label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Recipe
        </button>
      </form>
    </div>
    </div>
  );
};

export default RecipeCreator;
