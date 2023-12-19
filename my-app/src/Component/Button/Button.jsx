import { Button } from "@mui/material";
import React from "react";

const buttonstyle ={
    button: {
        fontSize: "1rem",
        background: "#000000",
        color: "#ffffff",
        padding: "10px 20px",
        borderRadius: "0",
        textTransform: "capitalize",
    }
}
function CustomButton () {
    return (
       <Button style={buttonstyle.button}>Click Me!</Button>
    )
}
export default CustomButton;