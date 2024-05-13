
type Props = {
  name: string,
  image: string
}

const RecipesCard = ({name, image} : Props)  => {
  return(
      <div className="max-w-96 max-h-96 rounded-lg shadow-lg relative">
        <a
          href="#"
          className="block w-full h-full rounded-lg overflow-hidden hover:shadow-xl focus:outline-none focus:shadow-outline"
        >
          <img className="w-full h-auto" src={image} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center p-2">
            <p className="text-black">{name}</p>
          </div>
        </a>
      </div>

  )
}

export default RecipesCard;