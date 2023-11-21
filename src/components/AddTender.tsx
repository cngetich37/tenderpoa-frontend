import * as React from "react";
import Grid from "@mui/material/Grid";
// import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
// import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { validateTender } from "./validationTenderForm/validateTenderForm";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Formik } from "formik";
// interface TenderFormValues {
//   tenderNo: string;
//   tenderDescription: string;
//   client: string;
//   siteVisitDate: Date;
//   timeExtension: number;
//   bidSecurity: string;
//   bidSourceInsurance: string;
//   closingDateTime: Date;
//   location: string;
//   tenderValue: number;
//   dollarRate: number;
// }

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#800000",
    },
    secondary: {
      main: "#510000",
    },
  },
});

// const today = dayjs();
const tomorrow = dayjs().subtract(-1, "day");
// const todayStartOfTheDay = today.startOf("day");
// const submitTender = () => {
//   console.log("Tender has been submitted!");
// };
export default function AddTender() {
  // const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  //   useFormik<TenderFormValues>({
  //     initialValues: {
  //       tenderNo: "",
  //       tenderDescription: "",
  //       client: "",
  //       siteVisitDate: new Date(),
  //       timeExtension: 5,
  //       bidSecurity: "",
  //       bidSourceInsurance: "",
  //       closingDateTime: new Date(),
  //       location: "",
  //       tenderValue: 10000,
  //       dollarRate: 151.55,
  //     },
  //     validationSchema: validateTender,
  //     onSubmit: submitTender,
  //   });
  return (
    <div className="flex justify-center bg-white">
      <div className="flex h-full lg:w-2/3 w-screen sm:w-1/2 py-6 mt-6 mb-6">
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <ThemeProvider theme={theme}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="primary"
              >
                Add a Tender
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <React.Fragment>
                  <Formik
                    initialValues={{
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
                      tenderFile: null,
                    }}
                    validationSchema={validateTender}
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {(formik) => (
                      <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              value={formik.values.tenderNo}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="tenderNo"
                              name="tenderNo"
                              label="Tender No"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.tenderNo &&
                              formik.touched.tenderNo && (
                                <Alert severity="error" className="mt-2">
                                  {formik.errors.tenderNo}
                                </Alert>
                              )}
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextareaAutosize
                              className="w-80 text-sm font-normal bg-white leading-normal p-3 shadow-lg mt-2 shadow-slate-100 border border-solid"
                              value={formik.values.tenderDescription}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="tenderDescription"
                              name="tenderDescription"
                              placeholder="tender description"
                              aria-label="Tender Description"
                            />
                            {formik.errors.tenderDescription &&
                              formik.touched.tenderDescription && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.tenderDescription}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              value={formik.values.client}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="client"
                              name="client"
                              label="Client"
                              fullWidth
                              autoComplete="given-name"
                              variant="standard"
                            />
                            {formik.errors.client && formik.touched.client && (
                              <Alert severity="error" className="mt-1">
                                {formik.errors.client}
                              </Alert>
                            )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <DatePicker
                              format="DD/MM/YYYY"
                              label="site visit date"
                              defaultValue={tomorrow}
                              disablePast
                              views={["year", "month", "day"]}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="timeExtension"
                              name="timeExtension"
                              value={formik.values.timeExtension}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Time Extension"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.timeExtension &&
                              formik.touched.timeExtension && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.timeExtension}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="bidSecurity"
                              name="bidSecurity"
                              value={formik.values.bidSecurity}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Bid Security"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.bidSecurity &&
                              formik.touched.bidSecurity && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.bidSecurity}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="bidSourceInsurance"
                              name="bidSourceInsurance"
                              value={formik.values.bidSourceInsurance}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Bid Source / Insurance"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.bidSourceInsurance &&
                              formik.touched.bidSourceInsurance && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.bidSourceInsurance}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <DateTimePicker
                              label="closing date & time"
                              format="DD/MM/YYYY hh:mm A"
                              defaultValue={tomorrow}
                              disablePast
                              views={[
                                "year",
                                "month",
                                "day",
                                "hours",
                                "minutes",
                              ]}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="location"
                              name="location"
                              value={formik.values.location}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Location"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.location &&
                              formik.touched.location && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.location}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="tenderValue"
                              name="tenderValue"
                              value={formik.values.tenderValue}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Tender Value"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.tenderValue &&
                              formik.touched.tenderValue && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.tenderValue}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="dollarRate"
                              name="dollarRate"
                              value={formik.values.dollarRate}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Dollar Rate"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.dollarRate &&
                              formik.touched.dollarRate && (
                                <Alert severity="error" className="mt-1">
                                  {formik.errors.dollarRate}
                                </Alert>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div className="mt-4">
                              <Button
                                component="label"
                                htmlFor="tenderFile"
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                              >
                                Upload a tender document
                                <VisuallyHiddenInput
                                  id="tenderFile"
                                  name="tenderFile"
                                  type="file"
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    const tenderFile =
                                      event.currentTarget.files?.[0] || null;
                                    formik.setFieldValue(
                                      "tenderFile",
                                      tenderFile
                                    );
                                  }}
                                />
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                        <div className="flex justify-end mt-6">
                          <Button variant="contained" type="submit">
                            Submit
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </React.Fragment>
              </LocalizationProvider>
            </Paper>
          </ThemeProvider>
        </Container>
      </div>
    </div>
  );
}
