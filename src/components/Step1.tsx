import * as React from "react";
import Grid from "@mui/material/Grid";
// import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
export default function Step1() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tenderNo"
              name="tenderNo"
              label="Tender No"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextareaAutosize
              className="w-96 text-sm font-normal bg-white leading-normal p-3 shadow-lg mt-2 shadow-slate-100 border border-solid"
              placeholder="tender description"
              aria-label="Tender Description"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="client"
              name="client"
              label="Client"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker label="site visit date" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="timeextension"
              name="timeextension"
              label="Time Extension"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="bidsecurity"
              name="bidsecurity"
              label="Bid Security"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="bidsourceinsurance"
              name="bidsourceinsurance"
              label="Bid Source / Insurance"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateTimePicker label="closing date & time" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="location"
              name="location"
              label="Location"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tenderValue"
              name="tenderValue"
              label="Tender Value"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dollarrate"
              name="dollarrate"
              label="Dollar Rate"
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </LocalizationProvider>
  );
}
