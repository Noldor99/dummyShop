import { Box, Button, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartEmpty: React.FC = () => {

  const navigate = useNavigate()

  return (

    <Container>
      <Toolbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Cart is empty</h2>
        <p>
          You probably haven't ordered yet.
          <br />
          To order, go to the main page.
        </p>
        <img src="img/empty-cart.png" alt="Empty cart" />
        <Button size="large" onClick={() => navigate(-1)}
        >Back</Button>
      </Box>
    </Container>
  )
}

export default CartEmpty;
