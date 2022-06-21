import { Box, Typography } from "@mui/material";
import React from "react";
import { NewsContext } from "../../../pages/HomePage";
import { useContext } from "react";

function DailyQuote() {
  const { data, set, first, quote } = useContext(NewsContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginBottom="3vh"
      marginTop="3vh"
    >
      <Box
        backgroundColor="#9b59b6"
        maxHeight="25vh"
        width="30vw"
        borderRadius="0.6rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        overflow="auto"
      >
        <Typography variant="h5" paddingTop="2vh">
          {quote.anime}
        </Typography>
        <Typography textAlign="center" padding="0.4rem">"{quote.quote}"</Typography>
        <Typography variant="h6" paddingBottom="0.4rem">-{quote.character}</Typography>
      </Box>
    </Box>
  );
}
export default DailyQuote;
