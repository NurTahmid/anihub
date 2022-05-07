import { Skeleton, Grid, Box } from "@mui/material";
import React from "react";
import { mainTheme } from "../Theme/mainTheme";

function Loading(props) {
  return (
    <Grid container justifyContent="space-around" >
      {(Array.from(new Array(6)) || []).map((item, index) => (
        <Box
          key={index}
          display="flex"
          position="relative"
          height="30vh"
          width="23.5vw"
          margin="2vw"
          flexDirection="row"
          justifyContent="flex-start"
          backgroundColor={mainTheme.palette.primary.light}
          borderRadius="1vw"
        >
          <Skeleton variant="rectangular" width="10vw" height="30vh" sx={{borderRadius:"1vw"}} />
          <Box
          
            height="5vh"
            width="7vw"
            flexDirection="column"
            justifyContent="flex-start"
          > <Box marginLeft="0.5vw">
            <Skeleton />
            <Skeleton />
            <Skeleton width="9vw"/>
            </Box>
            <Box marginLeft="0.5vw" marginTop="2vh">
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="8vw" />
            </Box>
            <Box position="absolute" bottom="0" marginLeft="0.5vw" paddingBottom="0.5vw">
            <Skeleton width="12vw" />
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
export default Loading;