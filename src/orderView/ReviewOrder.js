import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import { Navigate, useNavigate } from "react-router-dom";

function ReviewOrder() {
  const navigate=useNavigate()
  const products = useSelector((state) => state.card);
  const total = (products) => {
    let totalPrice = 0;
    products.forEach((element) => {
      totalPrice += element.price * element.count;
    });
    return totalPrice;
  };
  console.log("total", total(products));
  return (
    <Container>
      <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product Image</TableCell>

              <TableCell>Product Name</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Item Price</TableCell>
              <TableCell align="center">Sub Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              const { title, price, count, id, image } = product;
              return (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    align="center"
                  ></TableCell>

                  <TableCell component="th" scope="row">
                    {title}
                  </TableCell>
                  <TableCell align="center">{count}</TableCell>
                  <TableCell align="center">$ {price}</TableCell>
                  <TableCell align="center">$ {price * count}</TableCell>
                </TableRow>
              );
            })}
            <TableRow
              sx={{
                display: "flex",
                width: "100%",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <Typography> subTotal</Typography>
              <Typography>$ {Math.floor(total(products))}</Typography>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <PrimaryButton name='Order Now'  onClick={()=>navigate('/order')} />
    </Container>
  );
}

export default ReviewOrder;
