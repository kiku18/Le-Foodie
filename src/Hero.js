import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Hero.css"; // Importing CSS file

// Importing images
import firstSlide from "./Assets/F1.jpg";
import secondSlide from "./Assets/F2.jpg";
import thirdSlide from "./Assets/F3.jpg";
import fourthSlide from "./Assets/F4.jpg";
import fifthSlide from "./Assets/F5.jpg";
import sixthSlide from "./Assets/F6.jpg";
const items = [
  {
    name: "Savor the Flavor!",
    description: "Indulge in our exquisite dishes crafted with the finest ingredients.Taste the difference with every bite!",
    image: firstSlide,
  },
  {
    name: "Feast Your Eyes!",
    description: "A visual delight and a treat for your taste buds. Our culinary creations are as beautiful as they are delicious.",
    image: secondSlide,
  },
  {
    name: "From Our Kitchen to Your Table",
    description: "Experience the warmth of home-cooked meals with a gourmet twist. Perfectly seasoned, just for you",
    image: thirdSlide,
  },
  {
    name: "Taste the Magic",
    description: "Our chefs blend tradition with innovation to bring you dishes that are nothing short of magical. One bite will leave you spellbound!",
    image: fourthSlide,
  },
  {
    name: "Deliciously Diverse",
    description: "From appetizers to desserts, our menu is a journey across flavors and cultures. Discover your new favorite dish today.",
    image: fifthSlide,
  },
  {
    name: "Treat Yourself",
    description: "Life is too short to skip dessert. Indulge in our decadent sweets and pastries, made to perfection",
    image: sixthSlide,
  },
];

const Hero = () => {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper key={i} className="carousel-item">
          <img src={item.image} alt={item.name} className="carousel-image" />
          <div className="carousel-caption">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button className="carousel-button">Learn More</Button>
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Hero;
