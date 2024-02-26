import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";
import Bags from "./components/Bags";
import "./index.css";

const items = [
  {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: "002",
    image: "images/2.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 500,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 1450,
    },
  }
];

function App() {
  return (
    <>
      <Header />
      <HomeItem items={items} />
      <Bags />
      <Footer />
    </>
  );
}

export default App;
