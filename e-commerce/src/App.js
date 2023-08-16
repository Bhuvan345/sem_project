import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import DeliveryAddressForm from "./customer/components/Checkout/DeliveryAddressForm";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* </ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
        {/* <DeliveryAddressForm /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
