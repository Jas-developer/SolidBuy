import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";

export const ProductCard = ({ item }) => {
  // accessing context
  const { handleAddCart } = useContext(ShopContext);
  // destructuring props item
  const { id, title, image, price } = item;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center text-center font-bold ">
        <div className="p-5">
          <img src={image} alt={title} />
        </div>
        <span>{title}</span>
        <span className="text-red-700">${price}</span>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => handleAddCart(id)}
          className="bg-black text-white  w-24 text-center transition-all duration-500 hover:scale-110 p-1 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
