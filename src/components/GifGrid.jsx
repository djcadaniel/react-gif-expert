import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  console.log({isLoading});

  return (
    <>
      <h1 className="text-2xl font-bold">{category}</h1>
      {/* <Loading isLoading={isLoading} /> */}
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="grid grid-cols-4 gap-4 py-5 bg-gray-200 text-gray-700y">
        {
          images.map( image => (
            <GifItem
              key={image.id}
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}