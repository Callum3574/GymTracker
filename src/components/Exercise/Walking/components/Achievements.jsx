import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SportsIcon from "@mui/icons-material/Sports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
function Achievements() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    adaptiveHeight: true,
  };

  const trophies = [
    <MilitaryTechIcon style={{ fontSize: "3rem", color: "green" }} />,
    <SportsIcon style={{ fontSize: "3rem", color: "cyan" }} />,
    <EmojiEventsIcon style={{ fontSize: "3rem", color: "gold" }} />,
  ];
  return (
    <div>
      {" "}
      <Slider {...settings}>
        {trophies.map((value) => (
          <Grid key={value} item>
            {value}
          </Grid>
        ))}
      </Slider>
    </div>
  );
}

export default Achievements;
