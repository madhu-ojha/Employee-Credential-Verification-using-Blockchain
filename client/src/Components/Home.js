import React from "react";
import { Link } from "react-router-dom";


// External Components
import {
  Grid,
  Box,
  Button,
 } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    // background: "rgb(150,65,150)",
    background:
      "linear-gradient(124deg, rgba(150,65,150,1) 0%, rgba(145,99,140,1) 36%, rgba(125,160,223,1) 100%)",

    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  leftPanel: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    color: "white",
  },
}));

function Home() {
  const classes = useStyles();
 // const theme = useTheme();
  // const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Box
            style={{ height: "100%" ,alignSelf: "center"}}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={classes.leftPanel}
          >
      
            <Box style={{ 
              alignSelf: "center",
              fontSize: "100px", 
              fontWeight: "900"
               }}>EmployeeCV</Box>

            <Box/>
              <Box display="flex">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{fontWeight: "700" }}
                component={Link}
                to="/institute"
              >
                Issue Certificates
              </Button>
              <Button
                variant="contained"
                color="default"
                size="large"
                style={{backgroundColor: "white", fontWeight: "700" }}
                component={Link}
                to="/view"
              >
                View Certificates
              </Button>
            </Box>
          </Box>
        </Grid>
        </Grid>
    </>
  );
}
export default Home;
