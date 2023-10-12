import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/Product_list/productList";

function Home() {
  return (
    <Navbar>
      <ProductList></ProductList>
    </Navbar>
  );
}

export default Home;
