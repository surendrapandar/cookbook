import Navbar from "@/components/Navbar";
import recipe_hero_img from "../../src/img/recipe_hero_img.webp"

const RecipeDetailsPage = () => {
  return(
    <div className="flex flex-col mx-20">
      <Navbar />
      <div className="flex flex-col items-center text-white max-w-full mx-auto my-10">
      <img
        src={recipe_hero_img}
        alt="Recipe"
        className="rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold my-5">Delicious Chocolate Cake</h1>
      <h2 className="text-2xl font-bold my-5">Instructions</h2>
      <ol className="list-decimal list-inside bg-white text-black rounded-lg py-10 px-10">
        <li>Preheat oven to 350°F (175°C).</li>
        <li>Grease and flour a 9x13-inch pan.</li>
        <li>In a large bowl, cream together butter and sugar until light and fluffy.</li>
        <li>Beat in eggs one at a time, then stir in vanilla.</li>
        <li>Combine flour, cocoa, baking soda, and salt; gradually add to the creamed mixture.</li>
        <li>Spread evenly into the prepared pan.</li>
        <li>Bake for 25 to 30 minutes in the preheated oven, until the cake tests done with a toothpick.</li>
        <li>Cool in the pan on a wire rack.</li>
        <li>Once cool, frost with your favorite frosting and enjoy!</li>
      </ol>
      <h2 className="text-2xl font-bold my-5">Ingredients</h2>
      <ol className="list-disc list-inside bg-white text-black rounded-lg py-10 px-10">
        <li>2 cups white sugar</li>
        <li>1 3/4 cups all-purpose flour</li>
        <li>3/4 cup unsweetened cocoa powder</li>
        <li>1 1/2 teaspoons baking powder</li>
        <li>1 1/2 teaspoons baking soda</li>
        <li>1 teaspoon salt</li>
        <li>2 eggs</li>
        <li>1 cup milk</li>
        <li>1/2 cup vegetable oil</li>
        <li>2 teaspoons vanilla extract</li>
        <li>1 cup boiling water</li>
      </ol>
       
      <p className="pt-10">By John Doe</p>
      <p className="">Posted on January 1, 2023</p>
    </div>
    </div>
  )
}

export default RecipeDetailsPage;