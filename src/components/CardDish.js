// import { Link, Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Dish( {name, price, description}) {
  return (
    <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <a href='/'>Order a delivery</a>
    </div>
  )
}

const CardDish = ({ name, price, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // var borderRadius="15px";

  return (
    <div className="card">
      <>
        <img src={imageSrc} style={{maxHeight: "279px"}} alt="dish"/>
      </>
      <Dish
        name={name}
        price={price}
        description={description}
      />
    </div>
  );
};

export default CardDish;
