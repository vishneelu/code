
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import data from './Data.json';


function ListProduct() {
  return (
    <div>
      {data.map((data) => {
        return (
          <>
           <Box>
            <Stack>
               <Typography>{data.title}</Typography>
               <Typography>{data.desc}</Typography>
               <Typography>{data.price}</Typography>
              </Stack>
           </Box>
          </>
        )
      })
      }
    </div>
  )
}
export default ListProduct;