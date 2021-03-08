import React,{useState, useEffect} from 'react'
import {Container, Typography, Button, TextField, Grid, Paper, Box} from "@material-ui/core";
import Axios from "axios";
import {config} from "../../config/config";
import {useStyles} from "./styles/home";

const words = [`Welcome to BlockAdventure!
Enter your information to use our service.`];

export default function Home() {
    const [submitted, setSubmitted] = useState(false);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const classes = useStyles();
    const [formData, setFormData] =  useState({
        name :"",
        countryCode : "",
        number : "",
    });

    useEffect(() => {
        if (index === words.length) return;
    
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
        }, Math.max(subIndex === words[index].length ? 1000 :
                    50, parseInt(Math.random() * 10)));
    
        return () => clearTimeout(timeout);
      }, [subIndex, index]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);


    const handleChange = ({target})=>{
        setFormData((prevValue)=>{
            return {...prevValue, [target.name] : target.value}
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const payload = {...formData, origin : config.CURRENT_URL };
        console.log(payload);
        Axios.post(config.API_URL+`/sendmessage`,payload)
        .then(success=>{
            
            setSubmitted(true);
        })
        .catch(error=>{
            console.log(error);
        })
    }  


    return (
        
        <Container className = {classes.mainContainer}>
         {submitted 
            ?(
            <Typography className = {classes.submitText}>{`Thank you! ${"\n"}Check you Phone for Feedback SMS.`}</Typography>
            ) 
            : (
            <Container className = {classes.mainContainer}>
            <Typography className = {classes.blinkingText}> {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</Typography>
            <Paper className = {classes.paperContainer}>
                <form onSubmit = {handleSubmit}>
                    <Typography> Enter your Name </Typography>
                    <TextField className= {classes.FormField}  onChange = {handleChange}  value = {formData.name} name = "name" variant = "outlined" margin = "normal" required id ="Name"fullWidth />
                    
                    <Container className = {classes.numberContainer}>
                        <Box style ={{flex : "1"}}>
                            <Typography>Enter your country code </Typography>
                            <TextField style ={{marginRight : "100px"}} className= {classes.FormField}  onChange = {handleChange}  value = {formData.countryCode} name = "countryCode" variant = "outlined" margin = "normal"  required />
                        </Box>
                        <Box style ={{flex : "4"}}>
                            <Typography>Enter your Phone Number </Typography>
                            <TextField className= {classes.FormField}  onChange = {handleChange}  value = {formData.number} name = "number" variant = "outlined" margin = "normal" required id ="Name" label  = "Phone Number" fullWidth />
                        </Box>
                    </Container>
                    <Button onClick = {handleSubmit} variant="contained" color="primary" fullWidth>Use Service </Button>
                </form>
            </Paper>
            </Container> )}    
        </Container>
    )
}
