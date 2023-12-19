
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
    setCount(count - 1);
   }
  return (
    <Container className="mt-4">
    <Row>
      {data.map(({ title, desc, price, discount, image }) => { // destructure 
        return (
          <>
            <Col xs={3} className="mb-4">
              <Card className="" style={{ width: '' }}>
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

// import { Box, Typography } from "@mui/material";
// import React, { useState } from "react";
// import data from './Data.json';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Button, Card } from "react-bootstrap";

// const ProductCard = ({ title, desc, price, discount, image }) => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
//   };

//   return (
//     <Container className="mt-4">
//       <Row>
//         {data.map(({ title, desc, price, discount, image }) => {
//           return (
//             <>
//               <Col xs={3} className="mb-4">
//                 <Card className="" style={{ width: '' }}>
//                   <Card.Img variant="top" src={image} />
//                   <Card.Body>
//                     <Card.Title>{title}</Card.Title>
//                     <Card.Text>{desc}</Card.Text>
//                     <Card.Text>{price}</Card.Text>
//                     <Card.Text>{discount}</Card.Text>
//                     <Box>
//                       <Button variant="outlined" onClick={decrement}>-</Button>
//                       <span>{count}</span>
//                       <Button variant="outlined" onClick={increment}>+</Button>
//                     </Box>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </>
//           )
//         })
//         }

//       </Row>
//     </Container>
//   )
// }


// const Listing = (props) => {
//   return (
//     <Container>
//       <Row>
//           <ProductCard />
//       </Row>
//     </Container>
//   )
// }

// function ListProduct() {
//   return (
//     <Listing />
//   )
// }
// export default ListProduct;