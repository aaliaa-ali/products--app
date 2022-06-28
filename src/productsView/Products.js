import React from "react";
import CallApi from "../reusableFunctions/callApi";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/material";

function Products() {
  const { data, isError, error, isLoading } = CallApi(
    "getAllProduct",
    {
      url: "https://fakestoreapi.com/products",
    },
    {
      cacheTime: 50000,
    }
  );
  console.log("data", data?.data);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (isError) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center">{error}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <Container sx={{ width: "100%" ,mt:3}}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data?.data?.map((product) => {
            return (
              <Grid item xs={6} sm={4} md={3}  >
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default Products;
