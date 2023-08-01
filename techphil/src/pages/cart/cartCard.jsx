import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";

export const CartCard = ({ item }) => {
  const { handleRemoveCart } = useContext(ShopContext);

  // Destructuring props Items
  const { id, title, image, price } = item;

  return (
    <div className="flex lg:flex-row p-4 flex-col justify-center">
      <img src={image} alt={title} className="lg:w-56 lg:h-56 w-48 h-48" />
      <div className="flex-col flex lg:p-24 font-semibold text-center gap-2">
        <span>{title}</span>
        <span className="text-green-700">${price}</span>
      </div>
      <div className="lg:p-24 flex justify-center">
        <button
          onClick={() => handleRemoveCart(id)}
          className="shadow-lg rounded-lg font-semibold text-red-600 px-8"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
