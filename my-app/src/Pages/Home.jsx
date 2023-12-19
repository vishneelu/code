import React from "react";
import CustomButton from "../Component/Button/Button";
import { Container, Row } from "react-bootstrap";
const Home = (props) => {
   return (
      <Container><Row><h1>This is heading</h1><CustomButton></CustomButton></Row></Container>
   )
};

export default Home;
