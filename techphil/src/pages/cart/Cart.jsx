import { ShopContext } from "../../context/UserContext";
import { useContext } from "react";
import { CartCard } from "./cartCard";
import { RecipientDetails } from "../../components/checkout/RecipientDetails";

export const Cart = () => {
  const { cartItem, handleRemoveCart, Amount } = useContext(ShopContext);

  return (
    <section className="grid lg:grid-cols-3">
      <section className="grid-item col-span-2">
        <div className="flex justify-center flex-col p-12 px-6 lg:px-24 md:p-24 gap-4 ">
          {cartItem.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center shadow rounded-lg "
            >
              <CartCard key={index} item={item} remove={handleRemoveCart} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid-item flex flex-col rounded px-6 lg:mt-24 md:px-48 lg:px-12 ">
        <div className="flex justify-center bg-black rounded-lg ">
          <RecipientDetails />
        </div>
        <div className="flex flex-row text-3xl p-5 font-semibold gap-2">
          <span>Total Amount:</span>
          <span className="text-green-700">${Amount}</span>
        </div>
        <div className="p-5">
          <button className="p-1 rounded-md bg-black text-lg font-semibold text-white px-6">
            Check Out
          </button>
        </div>
      </section>
    </section>
  );
};
