import React from "react";
import {  useParams } from "react-router-dom";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import StarRatings from "react-star-ratings";
import CallApi from "../reusableFunctions/callApi";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function ProductDetails() {
  const { id } = useParams();
  console.log("id", id);

  const { data, isLoading } = CallApi(
    "getProductById",
    {
      url: `https://fakestoreapi.com/products/${id}`,
    },
    {
      cacheTime: 0,
    }
  );
  console.log("movieData", data?.data);
  if (isLoading) {
    return <h1>loading......</h1>;
  } else {
    const { title, category, image, price, rating, id, description } =
      data?.data;
    return (
      <Box sx={{ flexGrow: 1, m: 7 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" ,alignItems:'center'}}>
          <Grid xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                height: "60vh",
                width: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <Typography variant="h3">{title}</Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 14 }}
              color="text.secondary"
            >
              {description}
            </Typography>

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
            <Typography>
              <Box sx={{display:'flex'}}>
              <AttachMoneyIcon  />
              <Typography
                variant="body2"
                sx={{ fontSize: 18, fontWeight: "bold" }}
              >
                              

                {price}
              </Typography>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
  //   if (movieData.isLoading) {
  //     return <h1>loading......</h1>;
  //   } else {
  //     const { title, category, image, price, rating, id,discription }
  //     } = data?.data;
  //     return (
  //       <div className="container movie-container">
  //         <div className="row justify-content-center">
  //           <div className="poster-container col-lg-4 col-md-6 col-10 d-flex align-items-center">
  //             <img
  //               className="poster-img w-100"
  //               src={`https://image.tmdb.org/t/p/w780${poster_path}`}
  //             />
  //           </div>
  //           <div className="col-lg-8 col-md-6 col-10">
  //             <p className="display-5 mb-0">
  //               {title} <AddToWishList movie={movieData?.data?.data} />
  //             </p>
  //             <p className="fw-bolder fs-6">{tagline}</p>
  //             <div className="d-sm-flex justify-content-between">
  //               <div>
  //                 <StarRatings
  //                   rating={(vote_average | 0) / 2}
  //                   starDimension="15px"
  //                   starSpacing="2px"
  //                 />
  //                 <span>{vote_average}</span>
  //               </div>
  //               <p className="text-secondary  fs-6">
  //                 {spoken_languages?.map((lang) => {
  //                   return <span key={lang.name}>{lang.name}/</span>;
  //                 })}
  //                 {runtime} min/
  //                 {release_date?.substring(0, release_date.indexOf("-"))}
  //               </p>
  //             </div>
  //             <div>
  //               <p className="fw-bolder fs-6">THE GENERS</p>
  //               <div className="d-flex">
  //                 {genres?.map((genre) => {
  //                   return (
  //                     <p className="px-1 genres-name" key={genre.id}>
  //                       <NotStartedIcon className="svg-small"></NotStartedIcon>
  //                       {genre.name}
  //                     </p>
  //                   );
  //                 })}
  //               </div>
  //             </div>
  //             <div>
  //               <p className="fw-bolder fs-6">THE SYNOPSIS</p>
  //               <p className=" text-secondary overview">{overview}</p>
  //             </div>
  //             <div>
  //               <p className="fw-bolder fs-6">THE CAST</p>
  //               <div className="d-flex">
  //                 {castData?.data?.data?.cast?.slice(0, 5)?.map((memper) => {
  //                   return (
  //                     <div
  //                       key={memper.id}
  //                       className="cast-img-container"
  //                       style={{
  //                         backgroundImage:
  //                           "url(" +
  //                           `https://image.tmdb.org/t/p/w780${memper.profile_path}` +
  //                           ")",
  //                       }}
  //                     ></div>
  //                   );
  //                 })}
  //               </div>
  //             </div>
  //             <div className="actions  col-lg-10 col-12 ">
  //               <button
  //                 type="button"
  //                 className="btn btn-outline-dark px-4  py-1 m-2"
  //               >
  //                 <a
  //                   className="text-dark"
  //                   href="https://www.sonicthehedgehogmovie.com"
  //                 >
  //                   Website
  //                   <AddLinkIcon className="svg-small"></AddLinkIcon>
  //                 </a>
  //               </button>
  //               <button
  //                 type="button"
  //                 className="btn btn-outline-dark px-4  py-1 m-2"
  //               >
  //                 IMDB
  //                 <VideoSettingsIcon className="svg-small"></VideoSettingsIcon>
  //               </button>
  //               <button
  //                 type="button"
  //                 className="btn btn-outline-dark px-4  py-1 m-2"
  //               >
  //                 Trailer
  //                 <PlayArrowIcon className="svg-small"></PlayArrowIcon>
  //               </button>
  //               <Link className="text-light" to="/">
  //                 <button type="button" className="btn btn-dark px-4  py-1 m-2">
  //                   <ArrowBackIcon className="svg-small"></ArrowBackIcon>
  //                   Back
  //                 </button>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default ProductDetails;
