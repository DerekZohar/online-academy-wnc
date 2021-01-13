import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import InfoCourse from "./tabs/InfoCourse";
import ImageCourse from "./tabs/ImageCourse";
import Lessons from "./tabs/Lessons";
import DescriptionCourse from "./tabs/Description";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100px",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ["Info course", "Image course", "Description", "Lessons"];

  function getStepContent(step: any) {
    const isLastStep = activeStep === steps.length - 1;
    switch (step) {
      case 0:
        return (
          <InfoCourse
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <ImageCourse
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <DescriptionCourse
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <Lessons
            activeStep={activeStep}
            isLastStep={isLastStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const [courseInfo, setCourseInfo] = useState({});
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Post Course
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          {/* <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
         */}
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
}
