import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAPIPostData, ICertificate } from "../types/types";

interface CertificateState {
  list: ICertificate[];
  certificate: ICertificate | null;
  loading: boolean;
}

export const fetchCertificates = createAsyncThunk<ICertificate[]>(
  "certificates/fetch",
  async function () {
    try {
      const response = await fetch(
        `https://sycret.ru/service/api/api?ApiKey=${
          import.meta.env.VITE_API_KEY
        }&MethodName=OSGetGoodList`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postCertificates = createAsyncThunk(
  "certificates/post",
  async function (data: IAPIPostData) {
    const { certificate, ClientName, Phone, Email, MsgText } = data;
    try {
      const response = await fetch(`https://sycret.ru/service/api/api`, {
        method: "POST",
        body: JSON.stringify({
          ApiKey: import.meta.env.VITE_API_KEY,
          MethodName: "OSSale",
          Id: certificate?.ID,
          TableName: certificate?.TABLENAME,
          PrimaryKey: certificate?.PRIMARYKEY,
          Price: certificate?.PRICE,
          Summa: certificate?.SUMMA,
          ClientName: ClientName,
          Phone: Phone,
          Email: Email,
          PaymentTypeId: 2,
          UseDelivery: 0,
          MsgText: MsgText,
        }),
      });
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: CertificateState = {
  list: [],
  certificate: null,
  loading: false,
};

export const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {
    setCertificate: (state, action: PayloadAction<ICertificate>) => {
      state.certificate = action.payload;
    },
    clearCertificate: (state) => {
      state.certificate = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.loading = false;
      });
  },
});

export const { setCertificate, clearCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;
