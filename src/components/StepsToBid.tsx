import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  {
    label: "Identify Opportunities:",
    description: `Monitor tender portals, government websites, or private sector platforms to identify relevant opportunities.
    Subscribe to notifications or newsletters that provide updates on upcoming tenders in your industry.`,
  },
  {
    label: "Pre-Qualification",
    description: `Ensure that your business meets the pre-qualification criteria specified in the tender documents.
      Obtain any necessary certifications, licenses, or documentation required for eligibility`,
  },
  {
    label: "Understand the Requirements",
    description: `Thoroughly review the tender documents to understand the requirements, specifications, and evaluation criteria.
    Take note of submission deadlines, formats, and any specific instructions provided.`,
  },
  {
    label: "Assess Your Capabilities:",
    description: `Evaluate your organization's capabilities to ensure that you can meet the technical, financial, and other requirements specified in the tender.`,
  },
  {
    label: "Develop a Bid Team:",
    description: `Form a bid team with members from relevant departments, such as technical, financial, legal, and management.
    Assign specific roles and responsibilities to team members.`,
  },
  {
    label: "Risk Assessment:",
    description: `Identify potential risks associated with the tender, such as technical challenges, financial constraints, or legal issues.
    Develop strategies to mitigate these risks and demonstrate your ability to manage them.`,
  },
  {
    label: "Cost Estimation:",
    description: `Prepare a detailed and accurate cost estimation for the project, including all relevant expenses.
    Ensure that your pricing is competitive while covering all costs and allowing for a reasonable profit margin.`,
  },
  {
    label: "Technical Proposal:",
    description: `Develop a comprehensive technical proposal that addresses all the requirements outlined in the tender documents.
    Clearly articulate how your solution meets or exceeds the specified criteria.`,
  },
  {
    label: "Financial Proposal:",
    description: `Prepare a detailed financial proposal that includes a breakdown of costs, pricing structure, and payment terms.
    Ensure transparency in your financial calculations.`,
  },
  {
    label: "Legal and Compliance:",
    description: `Ensure that your bid complies with all legal requirements and regulations.
    Review and address any legal or compliance issues that may arise.`,
  },
  {
    label: "Submission:",
    description: `Prepare the bid documents according to the specified format and submit them before the deadline.
    Double-check that you have included all required documents and information.`,
  },
  {
    label: "Follow-Up:",
    description: `Monitor the tender process and be prepared to respond to any clarification requests from the tendering authority.
    Attend any pre-bid meetings or site visits if required.`,
  },
  {
    label: "Post-Submission Activities:",
    description: `Prepare for negotiations if your bid is shortlisted.
    Be responsive to any additional information or documentation requested by the tendering authority.`,
  },
];

export default function StepsToBid() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="flex bg-white">
      <ThemeProvider theme={theme}>
        <Box className="w-1/2 h-auto px-6 py-6 mt-4 ml-6">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption"></Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All bidding steps completed.- you&apos;re done
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
}
