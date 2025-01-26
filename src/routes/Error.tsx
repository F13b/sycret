import { Box, Container, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box sx={{ mt: "6rem" }}>
      <Container>
        <Typography component={"h1"} variant="h3" sx={{ textAlign: "center" }}>
          Oops!
        </Typography>
        <Typography
          component={"h3"}
          variant="h5"
          sx={{ textAlign: "center", mt: "1rem" }}
        >
          Sorry, an unexpected error has occurred.
        </Typography>
      </Container>
    </Box>
  );
};

export default Error;
