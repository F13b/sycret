import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCertificates, setCertificate } from "../store/certificateSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ICertificate } from "../types/types";

const Home = () => {
  const list = useAppSelector((state) => state.certificate.list);
  const certificate = useAppSelector((state) => state.certificate.certificate);
  const dispatch = useAppDispatch();

  const [certificateID, setCertificateID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCertificates());
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const cert = list.find(
      ({ ID }) => ID === (event.target.value as string)
    ) as ICertificate;
    setCertificateID(event.target.value as string);
    dispatch(setCertificate(cert));
  };

  return (
    <>
      <Box component={"main"} sx={{ mt: "6rem" }}>
        <Container>
          <Card>
            <CardHeader title="Выберите подарочный сертификат" />
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="select-label">Выберите сертификат</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  label="Выберите сертификат"
                  value={certificateID}
                  onChange={handleChange}
                >
                  {list.map((item) => (
                    <MenuItem key={item.ID} value={item.ID}>
                      {item.NAME}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CardContent>
            <CardActions>
              <Box>
                {certificate != null ? (
                  <Typography sx={{ mb: ".5rem" }}>
                    Цена: {certificate?.SUMMA}&#8381;
                  </Typography>
                ) : null}
                <Button onClick={() => navigate("/contact-form")}>
                  Купить
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Home;
