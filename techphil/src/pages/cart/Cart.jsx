import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";
import { CartCard } from "./cartCard";

export const Cart = () => {
  const { cartItem, handleRemoveCart } = useContext(ShopContext);

  let amount = 0;
  for (let i = 0; i < cartItem.length; i++) {
    amount += cartItem[i].price;
  }

  console.log(amount);

  return (
    <div className="grid lg:grid-cols-3">
      <div className="grid-item col-span-2">
        <div className=" p-5 flex justify-center flex-col shadow lg:px-24 md:p-24 gap-4 ">
          {cartItem.map((item, index) => (
            <div key={index} className="flex justify-center shadow rounded-lg">
              <CartCard key={index} item={item} remove={handleRemoveCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid-item flex flex-col">
        <div className="flex flex-row text-3xl justify-center p-5 font-semibold gap-2">
          <span>Total Amount:</span>
          <span className="text-green-700">${amount}</span>
        </div>
        <div className="p-5 flex justify-center">
          <button className="p-1 rounded-md bg-black text-lg font-semibold text-white px-6">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};
