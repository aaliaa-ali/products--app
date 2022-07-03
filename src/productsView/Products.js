import React from "react";
import CallApi from "../reusableFunctions/callApi";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";

function Products() {
  const card = useSelector((state) => state.card);
  const { data, isError, error, isLoading } = CallApi(
    "getAllProduct",
    {
      url: "https://fakestoreapi.com/products",
    },
    {
      cacheTime: 5000000,
    }
  );
  if (isLoading) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingSpinner />
    </Box>
  );
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
        <Container sx={{ width: "100%", mt: 3 }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data?.data?.map((product) => {
              return (
                <Grid item xs={6} sm={4} md={3} key={product.id} >
                  <ProductCard product={product}  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      );
    }
}

export default Products;
