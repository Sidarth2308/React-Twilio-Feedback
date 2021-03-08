import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    '@global': {
      body: {
        backgroundColor : "#393e46",
        color : "white",
        fontFamily: "Poppins",
      },
    },
    mainContainer:{
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems:  "center",

    },
    blinkingText : {
        fontSize : "4.3rem",
        fontWeight : "600",
        marginTop : "5vh",
        marginLeft : "70px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "2.6rem",
            marginLeft : "0",
          },
    },
    numberContainer:{
      display : "flex",
      flexDirection : "row",
      justifyContent : "space-evenly",
      alignItems  : "center",
      margin : "0",
      padding : "0",
     
    },
    paperContainer: {
      marginTop: theme.spacing(5),
      padding : "20px",
      flexDirection: 'column',
      alignItems: 'center',
      width : "80%",
    },
    FormLabel:{
      color : "black",
      fontSize : "1.5rem",
      fontWeight : "400",
      marginBottom : "2px",
    },
    FormField : {
      margin : "15px 0",
    },
    submitText:{
      fontSize : "5rem",
      marginTop : "20%",
      fontWeight : "900",
    }
  }));