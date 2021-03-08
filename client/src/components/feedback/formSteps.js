import React from 'react'
import {TextField, Box, Container, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio} from '@material-ui/core';

export function FormStep({formData, handleChange, index, classes}) {
    if (index === 0){
        return (
            <Container className = {classes.Form} >
                <TextField className= {classes.FormField}  onChange = {handleChange}  value = {formData.Name} name = "Name" variant = "outlined" margin = "normal" required id ="Name" label  = "Enter your Name" fullWidth />
    
                <TextField className= {classes.FormField} onChange = {handleChange} value = {formData.email} name = "email" variant = "outlined" margin = "normal" required id ="email" label  = "Enter your Email Address" fullWidth  autoComplete = "email"/>
    
                <TextField className= {classes.FormField} onChange = {handleChange} value = {formData.CustomerID} name = "CustomerID" variant = "outlined" margin = "normal" id ="CustomerID" label  = "Enter your Customer ID" fullWidth />
            </Container>
        )
    }else if(index === 1){
        return (
            <Container className = {classes.Form}>
                <FormControl className= {classes.FormField} component="fieldset">
                <FormLabel component="legend" className = {classes.FormLabel}>Is this your first visit?</FormLabel>
                <RadioGroup name="question1" value={formData.question1} onChange={handleChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                </FormControl>

                <FormControl className= {classes.FormField} component="fieldset">
                    <FormLabel className = {classes.FormLabel} component="legend">What is your primary reason to visit?</FormLabel>
                    <TextField onChange = {handleChange} value = {formData.question2} name = "question2" variant = "outlined" margin = "normal" required id ="question2"     fullWidth multiline
                    rows={2}/>
                </FormControl>
    
                <FormControl className= {classes.FormField} component="fieldset">
                <FormLabel className = {classes.FormLabel} component="legend">Were you able to find what you need?</FormLabel>
                <RadioGroup name="question3" value={formData.question3} onChange={handleChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                </FormControl>
            </Container>
        )
    }else if (index === 2){
        return (
            <Container className = {classes.Form}>
                <FormControl className= {classes.FormField} component="fieldset">
                <FormLabel className = {classes.FormLabel} component="legend">How easily did you find information on the website?</FormLabel>
                <RadioGroup name="question4" style = {{flexDirection : "row"}} value={formData.question4} onChange={handleChange}>
                    <FormControlLabel labelPlacement="top" value="1" control={<Radio />} label="1" />
                    <FormControlLabel labelPlacement="top" value="2" control={<Radio />} label="2" />
                    <FormControlLabel labelPlacement="top" value="3" control={<Radio />} label="3" />
                    <FormControlLabel labelPlacement="top" value="4" control={<Radio />} label="4" />
                    <FormControlLabel labelPlacement="top" value="5" control={<Radio />} label="5" />
                </RadioGroup>
                </FormControl>
    
                <FormControl className= {classes.FormField} component="fieldset">
                <FormLabel className = {classes.FormLabel} component="legend">How likely are you to return?</FormLabel>
                <RadioGroup name="question5" style = {{flexDirection : "row"}} value={formData.question5} onChange={handleChange}>
                    <FormControlLabel labelPlacement="top" value="1" control={<Radio />} label="1" />
                    <FormControlLabel labelPlacement="top" value="2" control={<Radio />} label="2" />
                    <FormControlLabel labelPlacement="top" value="3" control={<Radio />} label="3" />
                    <FormControlLabel labelPlacement="top" value="4" control={<Radio />} label="4" />
                    <FormControlLabel labelPlacement="top" value="5" control={<Radio />} label="5" />
                </RadioGroup>
                </FormControl>
    
                <FormControl className= {classes.FormField} component="fieldset">
                    <FormLabel className = {classes.FormLabel} component="legend">Any additional Comments?</FormLabel>
                    <TextField onChange = {handleChange} value = {formData.question6} name = "question6" variant = "outlined" margin = "normal" required id ="question6"  fullWidth multiline rows= {4} />
                </FormControl>
            </Container>
        )
    }
    
}