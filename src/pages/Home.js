import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/Product/components/productList";

function Home() {
  return (
    <Navbar>
      <ProductList></ProductList>
    </Navbar>
  );
}

export default Home;
