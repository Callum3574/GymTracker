import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Overview({ totals }) {
  const [spacing, setSpacing] = React.useState(4);

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
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
  return (
    <div>
      <Grid className="" sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <div className="d-flex justify-content-center mb-4" container>
            <h3>Highlights of 2023</h3>
          </div>
          <div
            className="mb-3"
            container
            justifyContent="center"
            spacing={spacing}
          >
            <Slider {...settings}>
              {totals.map((value) => (
                <Grid key={value} item>
                  <Typography
                    style={{ borderRadius: "5px" }}
                    varient="h6"
                    sx={{
                      height: 140,
                      width: 250,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div>{value.icon}</div>

                      <div className="d-flex justify-content-evenly w-100">
                        <div className="d-flex flex-column justify-content-center mt-3">
                          <p>{value.total}</p>
                          {/* <p>Average: {value.avg}</p> */}
                        </div>
                      </div>
                    </div>
                  </Typography>
                </Grid>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
