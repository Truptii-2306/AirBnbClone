import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import Card from "./components/card.js";
import img from "./images/image.png";
import img1 from "./images/image2.jpeg";
import img2 from "./images/image3.jpeg";

let data = [
  {
    id: 1,
    name: "Lily Jhonsan",
    img: img,
    price: 135,
    rating: 5.0,
    country: "New Zealand",
  },
  {
    id: 2,
    name: "Jenna Ortega",
    img: img1,
    price: 56,
    rating: 4.8,
    country: "Canada",
  },
  {
    id: 3,
    name: "Ema watson",
    img: img2,
    price: 88,
    rating: 4.7,
    country: "USA",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--div">
        {data.map((x) => {
          return (
            <Card
              name={x.name}
              img={x.img}
              price={x.price}
              key={x.id}
              rating={x.rating}
              country={x.country}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
