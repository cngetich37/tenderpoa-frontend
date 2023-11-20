import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step4 from "./Step4";

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

const steps = [
  "Register Tender",
  "Upload the Tender document",
  "Additional Details",
  "Review your Tender",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    default:
      throw new Error("Unknown step");
  }
}

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex h-full lg:w-2/3 w-screen sm:w-1/2">
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <CssBaseline />

            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
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
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <div className="h-48">
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom color="secondary">
                        Thank you for submitting your tender
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Your tender number is T-001. You can make updates on the
                        All Tenders section.
                      </Typography>
                    </React.Fragment>
                  </div>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? "Submit Tender"
                          : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Paper>
            </Container>
          </React.Fragment>
        </ThemeProvider>
      </div>
    </div>
  );
}
