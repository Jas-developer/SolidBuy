import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";

export const CartCard = ({ item }) => {
  // state
  const { handleRemoveCart } = useContext(ShopContext);
  const { id, title, image, price } = item;

  return (
    <section>
      <div className="flex lg:flex-row px-12 pt-2 flex-col justify-center ">
        <img src={image} alt={title} className="lg:w-56 lg:h-56 w-36 h-36" />
        <div className="flex-col flex lg:p-24 font-semibold text-center gap-2">
          <span>{title}</span>
          <span className="text-green-700">${price}</span>
        </div>
        <div className="lg:p-24 flex justify-center p-3">
          <button
            onClick={() => handleRemoveCart(id)}
            className="shadow-lg rounded-lg font-semibold text-red-600 px-8 p-1"
          >
            Remove
          </button>
        </div>
      </div>
    </section>
  );
};
