import type { fruit } from "../data/data";
import ProductCard from "./ProductCard";
interface fruitData {
  data: fruit[];
}
export default function ProductContainer({ data }: fruitData) {
  return (
    <div className="ProductContainer">
      {data.map((fruit) => (
        <ProductCard key={fruit.id} {...fruit} />
      ))}
    </div>
  );
}
