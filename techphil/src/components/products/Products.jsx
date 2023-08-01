import { PRODUCTS } from "./Items";
import { ProductCard } from "./ProductCard";
console.log(PRODUCTS);

export const Products = () => {
  return (
    <section>
      <div className={firstDiv}>
        {PRODUCTS.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

// style
const firstDiv =
  "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:px-12 md:px-4";
