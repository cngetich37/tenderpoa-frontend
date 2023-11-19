import * as React from "react";
import Grid from "@mui/material/Grid";
// import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { validateTender } from "./validationTenderForm/validateTenderForm";
import Alert from "@mui/material/Alert";
interface TenderFormValues {
  tenderNo: string;
  tenderDescription: string;
  client: string;
  siteVisitDate: Date;
  timeExtension: number;
  bidSecurity: string;
  bidSourceInsurance: string;
  closingDateTime: Date;
  location: string;
  tenderValue: number;
  dollarRate: number;
}

const submitTender = () => {
  console.log("Tender has been submitted!");
};
export default function Step1() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<TenderFormValues>({
      initialValues: {
        tenderNo: "",
        tenderDescription: "",
        client: "",
        siteVisitDate: new Date(),
        timeExtension: 5,
        bidSecurity: "",
        bidSourceInsurance: "",
        closingDateTime: new Date(),
        location: "",
        tenderValue: 10000,
        dollarRate: 151.55,
      },
      validationSchema: validateTender,
      onSubmit: submitTender,
    });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <React.Fragment>
        <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={values.tenderNo}
                onChange={handleChange}
                onBlur={handleBlur}
                id="tenderNo"
                name="tenderNo"
                label="Tender No"
                fullWidth
                variant="standard"
              />
              {errors.tenderNo && touched.tenderNo && (
                <Alert severity="error" className="mt-2">
                  {errors.tenderNo}
                </Alert>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextareaAutosize
                className="w-80 text-sm font-normal bg-white leading-normal p-3 shadow-lg mt-2 shadow-slate-100 border border-solid"
                value={values.tenderDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                id="tenderDescription"
                name="tenderDescription"
                placeholder="tender description"
                aria-label="Tender Description"
              />
              {errors.tenderDescription && touched.tenderDescription && (
                <Alert severity="error" className="mt-1">
                  {errors.tenderDescription}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={values.client}
                onChange={handleChange}
                onBlur={handleBlur}
                id="client"
                name="client"
                label="Client"
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
              {errors.client && touched.client && (
                <Alert severity="error" className="mt-1">
                  {errors.client}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker label="site visit date" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="timeExtension"
                name="timeExtension"
                value={values.timeExtension}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Time Extension"
                fullWidth
                variant="standard"
              />
              {errors.timeExtension && touched.timeExtension && (
                <Alert severity="error" className="mt-1">
                  {errors.timeExtension}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="bidSecurity"
                name="bidSecurity"
                value={values.bidSecurity}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Bid Security"
                fullWidth
                variant="standard"
              />
              {errors.bidSecurity && touched.bidSecurity && (
                <Alert severity="error" className="mt-1">
                  {errors.bidSecurity}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="bidSourceInsurance"
                name="bidSourceInsurance"
                value={values.bidSourceInsurance}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Bid Source / Insurance"
                fullWidth
                variant="standard"
              />
              {errors.bidSourceInsurance && touched.bidSourceInsurance && (
                <Alert severity="error" className="mt-1">
                  {errors.bidSourceInsurance}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker label="closing date & time" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Location"
                fullWidth
                variant="standard"
              />
              {errors.location && touched.location && (
                <Alert severity="error" className="mt-1">
                  {errors.location}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="tenderValue"
                name="tenderValue"
                value={values.tenderValue}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Tender Value"
                fullWidth
                variant="standard"
              />
              {errors.tenderValue && touched.tenderValue && (
                <Alert severity="error" className="mt-1">
                  {errors.tenderValue}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="dollarRate"
                name="dollarRate"
                value={values.dollarRate}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Dollar Rate"
                fullWidth
                variant="standard"
              />
              {errors.dollarRate && touched.dollarRate && (
                <Alert severity="error" className="mt-1">
                  {errors.dollarRate}
                </Alert>
              )}
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    </LocalizationProvider>
  );
}
