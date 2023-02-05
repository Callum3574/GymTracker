import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Display({ exercises }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {exercises.map((exercise, index) => (
          <Grid xs={2} sm={4} md={6} key={index}>
            <Item>
              <div>
                <h2>{exercise.name}</h2>
              </div>
              <hr />
              <div className="d-flex flex-column align-items-center">
                <div>
                  <h4>
                    <strong>Record: </strong> {exercise.record}
                  </h4>
                </div>
                <div>
                  <h4>
                    <strong>Time: </strong>
                    {exercise.time}
                  </h4>
                </div>
                <div>
                  <h4>
                    <strong>Date: </strong>
                    {exercise.date}
                  </h4>
                </div>
              </div>
              <hr />
              <div>
                <button className="btn btn-primary">View all </button>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
