import { Box, Container, Typography } from "@mui/material";

const Payment = () => {
  return (
    <Box sx={{ mt: "6rem" }}>
      <Container>
        <Typography component={"h1"} variant="h3" sx={{ textAlign: "center" }}>
          Идет оплата....
        </Typography>
        <Typography
          component={"h3"}
          variant="h5"
          sx={{ textAlign: "center", mt: "1rem" }}
        >
          Не закрывайте и не перезагружайте страницу
        </Typography>
      </Container>
    </Box>
  );
};

export default Payment;
