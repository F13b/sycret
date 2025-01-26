export interface ICertificate {
  ID: string;
  TABLENAME: string;
  PRIMARYKEY: string;
  NAME: string;
  PRICE: string;
  SUMMA: string;
  DISCOUNT: string;
}

export interface IAPIPostData {
  certificate: ICertificate | null;
  ClientName: string;
  Phone: string;
  Email: string;
  MsgText: string | undefined;
}
