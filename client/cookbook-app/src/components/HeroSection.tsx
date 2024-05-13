import heroImg from "../img/heroImg.png";

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-gray-800 gap-52">
      <div className=" flex flex-col gap-y-3">
        <h1 className="text-white text-5xl font-bold">Cookbook</h1>
        <p className="text-white text-lg max-w-96">
          A cookbook app that allows users to create, store, and share their
          favorite recipes.
        </p>
      </div>
      <div>
        <img className="rounded-lg h-96" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
