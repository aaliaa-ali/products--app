import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = (props) => {
    const {onClick,name}=props

 return <Button
    // onClick={() => dispatch(addToCard(props.product))}
    onClick={onClick}
    sx={{
      backgroundColor: "#ff5722",
      textAlign: "center",
      color: "white",
      padding: "10px",
      width: "100%",
      "&:hover": {
        background: "#e64a19",
      },
    }}
  >
{name}  </Button>
};

export default PrimaryButton;
