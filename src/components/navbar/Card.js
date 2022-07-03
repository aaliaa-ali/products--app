import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.scss";
import { useDispatch } from "react-redux/es/exports";
import {
  addToCard,
  RemoveFromCard,
  decProductcount,
} from "../../redux/card/cardActions";
import PrimaryButton from "../PrimaryButton";

function Card() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.card);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const countProducts = (products) => {
    let count = 0;
    products.forEach((element) => {
      count += element.count;
    });
    return count;
  };
  useEffect(() => {}, [products]);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white" }}>
          <Badge badgeContent={countProducts(products) || "0"} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {products.length != 0 ? (
          <Box sx={{ minWidth: "350px" }}>
            {products.map((product) => (
              <MenuItem key={product.id} onClick={handleCloseUserMenu}>
                <Grid
                  container
                  spacing={2}
                  sx={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Badge
                      color="primary"
                      badgeContent={`${product.count} X`}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Link
                      className={classes.cardProduct}
                      to={`/${product.link}`}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        textAlign="center"
                      >
                        {product.title}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Badge
                      onClick={() => dispatch(addToCard(product))}
                      color="primary"
                      badgeContent={`+`}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Badge
                      onClick={() => dispatch(decProductcount(product))}
                      color="primary"
                      badgeContent={`-`}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button onClick={() => dispatch(RemoveFromCard(product))}>
                      <DeleteForeverIcon/>
                    </Button>
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
            <PrimaryButton
              name="Review Order"
              onClick={() => navigate("/revieworder")}
            />
          </Box>
        ) : (
          <Typography sx={{ m: 0, p: 1, color: "#ff5722" }}>
            Card Is Empty
          </Typography>
        )}
      </Menu>
    </Box>
  );
}

export default Card;
