import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid, Typography } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Typography fontSize={"3rem"} textAlign="center" fontFamily="Roboto" fontWeight="bold" >{props.title}</Typography>
    <Box marginRight="5%" marginLeft="5%" marginTop="0.8%" >
      <Box backgroundColor={mainTheme.palette.primary.main} marginBottom="50px">
        <Grid columns={4} container justifyContent="flex-start" >
          <CardView items={props.list} />
        </Grid>
      </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
