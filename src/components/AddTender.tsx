import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
// import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import { validateTender } from "./validationTenderForm/validateTenderForm";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

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

const tomorrow = dayjs().subtract(-1, "day");

export default function AddTender() {
  const [tenderSuccess, setTenderSuccess] = React.useState(false);
  const [tenderError, setTenderError] = React.useState(false);
  const [tenderApiSuccess, setApiTenderSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const initialValues = {
    tenderNo: "",
    tenderDescription: "",
    client: "",
    siteVisitDate: new Date(),
    timeExtension: 5,
    bidSecurity: 2500,
    bidSourceInsurance: "",
    closingDateTime: new Date(),
    location: "",
    tenderValueDollars: 0,
    tenderValueKsh: 0,
    dollarRate: 0,
    company: "Intracom Africa Ltd",
    tenderStatus: "Not Bidded",
  };

  const handleTender = async (values: any) => {
    // Call your API here using Axios
    try {
      const response = await axios.post(
        "https://tenderpoa.onrender.com/api/tenders",
        values
      );
      setApiTenderSuccess(response.data.message);
      setTimeout(() => {
        setTenderSuccess(true);
        setTenderError(false);
      }, 1000);
      setTimeout(() => {
        navigate("/dashboard");
        window.location.reload();
      }, 4000);
    } catch (error: any) {
      setTimeout(() => {
        setTenderError(true);
        setTenderSuccess(false);
      }, 2000);

      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center bg-[#eeeeee] h-full">
      <div className="flex h-full lg:w-2/3 w-screen sm:w-1/2 py-6 mt-6 mb-6">
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <ThemeProvider theme={theme}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="primary"
              >
                Add Tender
              </Typography>
              <div className="flex justify-center">
                {tenderSuccess ? (
                  <Alert variant="filled" severity="success">
                    <p>{tenderApiSuccess}</p>
                  </Alert>
                ) : tenderError ? (
                  <Alert variant="filled" severity="error">
                    <p>{error}</p>
                  </Alert>
                ) : null}
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <React.Fragment>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validateTender}
                    onSubmit={handleTender}
                  >
                    {(formik) => (
                      <form
                        onSubmit={formik.handleSubmit}
                        encType="multipart/form-data"
                      >
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
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.tenderNo}
                                </p>
                              )}
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <label
                              htmlFor="tenderDescription"
                              className="block text-sm font-medium text-gray-600"
                            >
                              Tender Description
                            </label>
                            <TextareaAutosize
                              id="tenderDescription"
                              name="tenderDescription"
                              value={formik.values.tenderDescription}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder="tender description"
                              className="w-full border-2 border-neutral-600 bg-white resize-none"
                            />
                            {formik.errors.tenderDescription &&
                              formik.touched.tenderDescription && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.tenderDescription}
                                </p>
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
                              <p className="text-[#FF0000] text-sm">
                                {formik.errors.client}
                              </p>
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
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.timeExtension}
                                </p>
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
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.bidSecurity}
                                </p>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="bidSourceInsurance"
                              name="bidSourceInsurance"
                              value={formik.values.bidSourceInsurance}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Bid Source e.g Bank/Insurance"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.bidSourceInsurance &&
                              formik.touched.bidSourceInsurance && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.bidSourceInsurance}
                                </p>
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
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.location}
                                </p>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="tenderValueDollars"
                              name="tenderValueDollars"
                              type="number"
                              value={formik.values.tenderValueDollars}
                              onChange={(e) => {
                                formik.handleChange(e);
                                const value = parseFloat(e.target.value);
                                const tenderValueKsh = value * formik.values.dollarRate;
                                // Update result in real-time
                                formik.handleChange({
                                  target: { name: 'tenderValueKsh', value: isNaN(tenderValueKsh) ? 0 : tenderValueKsh},
                                });
                              }}
                              onBlur={formik.handleBlur}
                              label="Tender Value in $"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.tenderValueDollars &&
                              formik.touched.tenderValueDollars && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.tenderValueDollars}
                                </p>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="dollarRate"
                              name="dollarRate"
                              type="number"
                              value={formik.values.dollarRate}
                              onChange={(e) => {
                                formik.handleChange(e);
                                const value = parseFloat(e.target.value);
                                const tenderValueKsh = value * formik.values.tenderValueDollars;
                                // Update result in real-time
                                formik.handleChange({
                                  target: { name: 'tenderValueKsh', value: isNaN(tenderValueKsh) ? 0 : tenderValueKsh},
                                });
                              }}
                              onBlur={formik.handleBlur}
                              label="Dollar Rate"
                              fullWidth
                              variant="standard"
                            />
                            {formik.errors.dollarRate &&
                              formik.touched.dollarRate && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.dollarRate}
                                </p>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="tenderValueKsh"
                              name="tenderValueKsh"
                              type="number"
                              value={formik.values.tenderValueKsh}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              label="Tender Value in Ksh."
                              fullWidth
                              variant="standard"
                              disabled
                            />
                            {formik.errors.tenderValueKsh &&
                              formik.touched.tenderValueKsh && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.tenderValueKsh}
                                </p>
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                              <InputLabel variant="standard" htmlFor="company">
                                Company
                              </InputLabel>
                              <NativeSelect
                                defaultValue={formik.values.company}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputProps={{
                                  name: "company",
                                  id: "company",
                                }}
                              >
                                <option value={"Intracom Africa Ltd"}>
                                  Intracom Africa Ltd
                                </option>
                                <option value={"Saava Eng. Ltd"}>
                                  Saava Eng. Ltd
                                </option>
                                <option value={"Benesse EA. Ltd"}>
                                  Benesse EA. Ltd
                                </option>
                              </NativeSelect>
                            </FormControl>
                            {formik.errors.company &&
                              formik.touched.company && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.company}
                                </p>
                              )}
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                              <InputLabel
                                variant="standard"
                                htmlFor="tenderStatus"
                              >
                                Tender Status
                              </InputLabel>
                              <NativeSelect
                                defaultValue={formik.values.tenderStatus}
                                onChange={formik.handleChange}
                                inputProps={{
                                  name: "tenderStatus",
                                  id: "tenderStatus",
                                }}
                              >
                                <option value={"Not Bidded"}>Not Bidded</option>
                                <option value={"Due"}>Due</option>
                                <option value={"Closed"}>Closed</option>
                              </NativeSelect>
                            </FormControl>

                            {formik.errors.tenderStatus &&
                              formik.touched.tenderStatus && (
                                <p className="text-[#FF0000] text-sm">
                                  {formik.errors.tenderStatus}
                                </p>
                              )}
                          </Grid>
                        </Grid>
                        <div className="flex justify-end mt-6">
                          <Button
                            variant="contained"
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                          >
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
