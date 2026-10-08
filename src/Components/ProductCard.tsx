import { useState } from "react";
import type { fruit } from "../data/data";

export default function ProductCard({
  product,
  priceOptions,
  img,
  quantity,
}: fruit) {
  //You can add an interface for compound states to ensure type inference.
  interface productInfo {
    quantity: number;
    price: number;
  }

  const [productInfo, setProductInfo] = useState<productInfo>({
    quantity,
    price: priceOptions[0],
  });

  return (
    <div className="ProductCard">
      <h2>{product}</h2>
      <img src={img} alt="" height="100px" />
      <br />
      <select
        name="priceOption"
        id=""
        onChange={(e) =>
          setProductInfo((prevProductInfo) => {
            return {
              ...prevProductInfo,
              price: parseFloat(e.target.value),
            };
          })
        }
      >
        {priceOptions.map((price) => (
          <option>{price.toFixed(2)}</option>
        ))}
      </select>
      <br />
      <button
        onClick={() =>
          setProductInfo((prevProductInfo) => {
            return {
              ...prevProductInfo,
              quantity:
                prevProductInfo.quantity > 0 ? prevProductInfo.quantity - 1 : 0,
            };
          })
        }
      >
        {" - "}
      </button>
      <span>{productInfo.quantity}</span>
      <button
        onClick={() =>
          setProductInfo((prevProductInfo) => {
            return {
              ...prevProductInfo,
              quantity: prevProductInfo.quantity + 1,
            };
          })
        }
      >
        {" + "}
      </button>
      <p>
        Total Price: {(productInfo.quantity * productInfo.price).toFixed(2)}$
      </p>
    </div>
  );
}
