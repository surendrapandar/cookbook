import Navbar from "@/components/Navbar";
import recipe_hero_img from "../img/recipe_hero_img.webp";
import RecipesCard from "@/components/RecipesCard";
import cake_img from "../img/cake.jpg";
import dhokla from "../img/dhokla-hero.webp";
import keralan_curry from "../img/keralan-fish-curry.webp";
import peas_potatoes from "../img/peas-potatoes-hero.webp";
import creamy_coconut_veg from "../img/creamy-coconut-veg-hero.webp";

const recipes = [
{
    name: "Dhokla",
    image: dhokla,
  },
  {
    name: "Keralan Fish Curry",
    image: keralan_curry,
  },
  {
    name: "Peas and Potatoes",
    image: peas_potatoes,
  },
  {
    name: "Creamy Coconut Veg",
    image: creamy_coconut_veg,

  },
  {
    name: "Cake",
    image: cake_img,
  },
  

]




const RecipesPage = () => {
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
        <RecipesCard key={recipe.name} name={recipe.name} image={recipe.image} />
      ))}
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
  );
};

export default RecipesPage;
