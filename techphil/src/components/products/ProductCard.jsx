import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";

export const ProductCard = ({ item }) => {
  //state
  const { handleAddCart } = useContext(ShopContext);
  const { id, title, image, price } = item;

  return (
    <div className={firstDiv}>
      <div className={secondDiv}>
        <div className="p-5">
          <img src={image} alt={title} />
        </div>
        <span>{title}</span>
        <span className="text-red-700">${price}</span>
      </div>
      <div className={thirdDiv}>
        <button onClick={() => handleAddCart(id)} className={AddCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

//TAILWIND CSS
const AddCartButton =
  "bg-black text-white  w-24 text-center transition-all duration-500 hover:scale-110 p-1 rounded";
const firstDiv = "flex flex-col justify-center";
const secondDiv = "flex flex-col justify-center text-center font-bold";
const thirdDiv = "flex justify-center mt-2";
