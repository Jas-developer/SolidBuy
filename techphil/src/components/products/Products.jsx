import { PRODUCTS } from "./Items";
import { ProductCard } from "./ProductCard";
console.log(PRODUCTS);

export const Products = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:px-12 md:px-4">
        {PRODUCTS.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};
