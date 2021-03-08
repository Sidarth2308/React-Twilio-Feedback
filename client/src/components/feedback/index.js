import React, { useState } from 'react'
import {Stepper, Step, StepLabel, StepContent, Button, Typography, Paper, Container, Box} from '@material-ui/core';
import {useStyles} from "./styles/feedback";
import {FormStep} from "./formSteps";
import {stepTitle} from "./stepInformation";
import Axios from "axios";
import {config} from "../../config/config";

function allSteps() {
    return stepTitle;
  }


export default function Feedback() {
    const [formData, setFormData] = useState({
        email : "",
        Name : "",
        CustomerID : "",
        "question1" : "",
        "question2"  : "",
        "question3" : "",
        "question4" : "",
        "question5" : "",
        "question6" : "",

    });
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const steps = allSteps();
    const handleInput = ({target})=>{
        setFormData ((prevValue)=>{
            return {...prevValue, [target.name] : target.value}
        })
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        const payload = formData;
        Axios.post(config.API_URL + `/completefeedback`, payload)
            .then(success=>{
                setSubmitted(true);
            })
            .catch(error=>{
                console.log(error);
            })
        
    }
    return (
        <Box className = {classes.root}>
        {submitted ?(
            <Typography className = {classes.submitText}>Thank you For Submitting the form</Typography>
        ) : (
            <Box >
        <Typography className = {classes.titleText}>We value your feedback!</Typography>
        
        <Container className={classes.formContainer}>
            <Paper>
            <form>
            <Stepper activeStep= {activeStep} orientation = "vertical">
                {steps.map((label)=>{
                    return (
                    <Step key= {label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <FormStep classes = {classes} index={activeStep} handleChange = {handleInput} formData= {formData}  />
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>

                            {activeStep === steps.length - 1 ? (<Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                className={classes.button}
                            >
                                Submit
                            </Button>) : (<Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>)}
                            
                        </StepContent>
                    </Step>)
                })}

            </Stepper>
            </form>
            </Paper>
            
        </Container>
        
        </Box>
        )}
        </Box>
        
    )
}
