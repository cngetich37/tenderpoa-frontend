import * as React from "react";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function Step3() {
  return (
    <div className="h-48">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <React.Fragment>
          <Grid container spacing={3}></Grid>
        </React.Fragment>
      </LocalizationProvider>
    </div>
  );
}
