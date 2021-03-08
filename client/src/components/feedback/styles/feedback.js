import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    '@global': {
      body: {
        backgroundImage: `url(${"images/bg/bg5.jpg"})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundColor : "#7868e6",
        backgroundRepeat: "no-repeat",
        color : "white",
        fontFamily: "Poppins",
      },
    },
    formContainer:{
      marginTop : "4vh",
    },
    root: {
      width: '100%',
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems :"center",

    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    titleText : {
      fontSize : "5rem",
      fontFamily: "Poppins",
      fontWeight : "800",
      marginTop : "5vh",
      [theme.breakpoints.down('sm')]: {
        fontSize : "2.3rem",
        fontWeight : "600",
        marginTop : "5vh",
      },
    },
    Form : {
      display :"flex",
      flexDirection : "column",
    },
    FormField : {
      margin : "15px 0",
    },
    FormLabel:{
      color : "black",
      fontSize : "1.5rem",
      fontWeight : "400",
      marginBottom : "2px",
    },
    submitText:{
      fontSize : "5rem",
      marginTop : "20%",
      fontWeight : "900",
      [theme.breakpoints.down('sm')]: {
        fontSize : "2.3rem",
        fontWeight : "600",
        marginTop : "5vh",
      },
    }
  }));