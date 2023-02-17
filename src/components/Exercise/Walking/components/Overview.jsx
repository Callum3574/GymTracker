import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
function Overview({ totals }) {
  const [spacing, setSpacing] = React.useState(4);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      <Grid className="" sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <div className="d-flex justify-content-center mb-4" container>
            <h3>Highlights of 2023</h3>
          </div>
          <Grid container justifyContent="center" spacing={spacing}>
            {totals.slice(0, 4).map((value) => (
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
                    <div className="d-flex justify-content-evenly w-100">
                      <div>{value.icon}</div>
                      <div className="d-flex flex-column justify-content-center mt-3">
                        <p>Total: {value.total}</p>
                        <p>Average: {value.avg}</p>
                      </div>
                    </div>
                  </div>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
