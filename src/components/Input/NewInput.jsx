import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NewInput() {
  return (
    <div className="container d-flex flex-row justify-content-center mt-5">
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Walk</Button>
          <Button variant="outlined">Run</Button>
          <Button variant="outlined">Pressups</Button>
        </Stack>
        <div></div>
      </div>
    </div>
  );
}

export default NewInput;
