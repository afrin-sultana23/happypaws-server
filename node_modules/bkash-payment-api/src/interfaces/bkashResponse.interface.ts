export type Intent = "sale" | "authorization" | "sale" | "authorization";

export interface IBkashTokenResponse {
  expires_in: string;
  id_token: string;
  refresh_token: string;
  token_type: string;
  status?: string;
  msg?: string;
}

export interface IBkashCreatePaymentResponse {
  paymentID: string;
  bkashURL: string;
  callbackURL: string;
  successCallbackURL: string;
  failureCallbackURL: string;
  cancelledCallbackURL: string;
  amount: string;
  intent: string;
  currency: string;
  paymentCreateTime: string;
  transactionStatus: string;
  merchantInvoiceNumber: string;
  statusCode: string;
  statusMessage: string;
}

export interface IBkashExecutePaymentResponse {
  statusCode: "0000" | string;
  statusMessage: "Successful" | string;
  paymentID: string;
  customerMsisdn: string;
  payerReference: string;
  paymentExecuteTime: string;
  trxID: string;
  transactionStatus: "Completed" | string;
  amount: string;
  currency: "BDT" | string;
  intent: "sale" | string;
  merchantInvoiceNumber: string;
}

export interface IBkashQueryPaymentResponse {
  paymentId: string;
  createTime: string;
  updateTime: string;
  trxID: string;
  transactionStatus: string;
  amount: string;
  currency: string;
  intent: Intent;
  merchantInvoiceNumber: string;
  refundAmount: string;
}

export interface IBkashSearchTransactionResponse {
  trxID: string;
  transactionStatus: string;
  transactionType: string;
  amount: string;
  currency: string;
  customerMsisdn: string;
  organizationShortCode: string;
  initiationTime: string;
  completedTime: string;
}

export interface IBkashRefundResponse {
  completedTime: string;
  transactionStatus: string;
  originalTrxID: string;
  refundTrxID: string;
  amount: string;
  currency: string;
  charge: string;
}

export interface IBkashRefundStatusResponse {
  completedTime: string;
  transactionStatus: string;
  originalTrxID: string;
  refundTrxID: string;
  amount: string;
  currency: string;
  charge: string;
}
