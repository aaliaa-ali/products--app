import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box,  CardActions } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import classes from './ProductCard.module.scss'


export default function ProductCard(props) {
  const { title, category, image, price, rating, id } = props.product;
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          height: 150,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Link className={classes.title} to={`/product/${id}`}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Link>

        <Typography
          variant="body2"
          color="#ff5722"
          sx={{ textDecoration: "underLine", mb: 2 }}
        >
          {category}
        </Typography>
        <StarRatings
          rating={rating.rate}
          starDimension="15px"
          starSpacing="2px"
          starRatedColor="#ff5722"
        />
        {/* <span>{rating.count}</span> */}
      </CardContent>
      <CardActions sx={{ color: "gray" }}>
        <AttachMoneyIcon sx={{ fontSize: "medium" }} />
        <Typography variant="body2" sx={{ fontSize: 18, fontWeight: "bold" }}>
          {price}
        </Typography>
      </CardActions>
    </Card>
  );
}
// #829de4
