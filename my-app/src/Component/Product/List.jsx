
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import data from './Data.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from "react-bootstrap";

const Listing = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
   const decrement = () =>{
    setCount(count > 0 ? count - 1 : 0);
   }
  return (
    <Container>
    <Row>
      {data.map(({ title, desc, price, discount, image }) => { // destructure 
        return (
          <>
            <Col xs={3}>
              <Card className="m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{desc}</Card.Text>
                  <Card.Text>{price}</Card.Text>
                  <Card.Text>{discount}</Card.Text>
                  <Box>
                    <Button variant="outlined" onClick={decrement}>-</Button>
                    <span>{count}</span>
                    <Button variant="outlined" onClick={increment}>+</Button>
                  </Box>
                </Card.Body>
              </Card>
            </Col>
          </>
        )
      })
      }

    </Row>
  </Container>
  )
}

function ListProduct() {
  return (
    <Listing />
  )
}
export default ListProduct;

