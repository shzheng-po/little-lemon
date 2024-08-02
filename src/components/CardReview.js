// import { Link, Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Review( {name, rating, text, imageSrc}) {
  return (
    <div>
        <p>{rating}</p>
        <div>
          <img src={imageSrc} style={{height: "100px"}} alt="person" />
          <h3>{name}</h3>
        </div>
        <p>{text}</p>
    </div>
  )
}

const CardReview = ({ name, rating, text, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // var borderRadius="15px";

  return (
    <Review
      rating={rating}
      name={name}
      text={text}
      imageSrc={imageSrc}
    />
  );
};

export default CardReview;