import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import RecipesPage from "./pages/RecipesPage.tsx";
import CreateRecipesPage from "./pages/CreateRecipesPage.tsx";
import RecipeDetailsPage from "./pages/RecipeDetailsPage.tsx";
import FavoritePage from "./pages/FavoritePage.tsx";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/favorite" element={<FavoritePage/>} />
        <Route path="/create-recipes" element={<CreateRecipesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<h1 className="text-white">Page not found</h1>} />
      </Routes>
      {/* <Button>Click me</Button> */}
    </div>
  );
}
