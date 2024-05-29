type Props = {
  id : number
  name: string;
  thumbnailImage: string;
};

const RecipesCard = ({ name, thumbnailImage, id }: Props) => {
  return (
    <div className="max-w-96 max-h-96 rounded-lg shadow-lg relative">
      <a
        href={`recipe/${id}`}
        className="block w-full h-full rounded-lg overflow-hidden hover:shadow-xl focus:outline-none focus:shadow-outline"
      >
        <img className="w-full h-auto" src={`${thumbnailImage}`} alt="" />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center p-2">
          <p className="text-black rounded-lg">{name}</p>
        </div>
      </a>
    </div>
  );
};

export default RecipesCard;
