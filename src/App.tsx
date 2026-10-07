import "./App.css";
import ProductContainer from "./Components/ProductContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Fruits Counter</h1>
      <ProductContainer data={data} />
    </>
  );
}

export default App;
