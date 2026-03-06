# bkash-payment-api

Nodejs library to accept bkash payments on your backend application. BKASH API WRAPPER

[![CI](https://github.com/siyamhosan/bkash-payment-api/actions/workflows/main.yml/badge.svg)](https://github.com/siyamhosan/bkash-payment-api/actions/workflows/main.yml)
[![Publish](https://github.com/siyamhosan/bkash-payment-api/actions/workflows/publish.yml/badge.svg)](https://github.com/siyamhosan/bkash-payment-api/actions/workflows/publish.yml)

## Examples

- [Express](https://github.com/shahriar-shojib/bkash-payment-gateway/tree/main/examples) from main Author [Shahriar Shojib](https://github.com/shahriar-shojib) *may not work*

## Features

- Implements all the methods required to get accepted as a merchant on bKash
- Written in typescript
- Get intellisense in when interacting with the library `vscode`
- Get Documentation and examples right inside your code editor `vscode`
- Get Bkash Response Intellisense
- Abort Request when an executePayment request exceeds `30 seconds` and get an error so that you can query the payment
- Get Human Readable exceptions when some error response is returned from bKash `in progress`

---

# How to use

## Installing the library

### `npm`

> `npm install bkash-payment-api`

### `yarn`

> `yarn add bkash-payment-api`

---

## Getting Bkash Credentials
****You need Bkash Merchant or Retails account to use this library**
1. Goto [Bkash PGW](https://pgw-integration.bkash.com) and login or create a new account
2. [Request for New Product](https://pgw-integration.bkash.com/#/merchant/new-product-request)
3. Fill up the form and submit
 > **Select Application Platform**: select all ✔
4. Get [Sandbox Credentials](https://pgw-integration.bkash.com/#/merchant/sandbox-credentials) these are your bkash credentials/config
> baseUrl is `https://checkout.sandbox.bka.sh/v1.2.0-beta` for sandbox
> baseUrl is `https://tokenized.pay.bka.sh/v1.2.0-beta` for production
5. [Validate Sandbox](https://pgw-integration.bkash.com/#/merchant/sandbox-validation) Credentials for Live Production Credentials 
> 1. [Create a payment](#create-a-payment)
> 2. get the response and enter that in `Create Payment Sandbox Test` also get the `paymentID` from response
> 3. [Execute a payment](#execute-a-payment-with-payment-id) with the `paymentID` and enter the response in `Execute Payment Sandbox Test`
> 4. Submit and You got your [Live Credentials](https://pgw-integration.bkash.com/#/merchant/live-credentials)

## Initializing the library

### `javascript`

> file `bkash.js`

```javascript
const { BkashGateway } = require('bkash-payment-api');

const bkashConfig = {
	baseURL: 'https://checkout.sandbox.bka.sh/v1.2.0-beta', //do not add a trailing slash
	key: 'abcdxxx2369',
	username: 'bkashTest',
	password: 'bkashPassword1',
	secret: 'bkashSup3rS3cRet',
};

const bkash = new BkashGateway(config);
module.exports = bkash;
```

### `typescript`

> file `bkash.ts`

```typescript
import { BkashGateway IBkashConstructor } from 'bkash-payment-api';

const bkashConfig: IBkashConstructor = {
	//get intellisense here
	baseURL: 'https://checkout.sandbox.bka.sh/v1.2.0-beta', //do not add a trailing slash
	key: 'abcdxx2369',
	username: 'bkashTest',
	password: 'bkashPassword1',
	secret: 'bkashSup3rS3cRet',
};

const bkash = new BkashGateway(config);
export default bkash;
```

---

## Create a payment

```javascript
const paymentRequest = {
	amount: 1000,
	orderID: 'ORD1020069',
	intent: 'sale',
	callBack: 'https://example.com/bkash/callback',
};

const result = await bkash.createPayment(paymentRequest);
console.log(result);
```

---

## Execute a payment with payment ID

```javascript
const paymentId = createPaymentRequest.paymentID; // sample payment ID
const result = await bkash.executePayment(paymentId);
```

---

## Query a payment with payment ID

```javascript
const paymentId = createPaymentRequest.paymentID; // sample payment ID
const result = await bkash.queryPayment(paymentId);
```

---

## Search Transaction

```javascript
const result = await bkash.searchTransaction('TRX22347463XX');
```

---

## Refund a transaction
Not Working Right Now

```javascript
const refundTransactionData = {
	paymentID: '22423169',
	amount: '25.69', //do not add more than two decimal points
 	trxID: 'TRX22347463XX';
 	sku: 'SK256519';
}

const result = await bkash.refundTransaction(refundTransactionData);
```

---

## Check Refund Status
Not Working Right Now

```javascript
const result = await bkash.refundStatus('TRX22347463XX', '12437969');
```

---

### Contributing

- Please Follow the code style and use the prettier config and eslint config provided in the repository
- Feel free to open `issues` or `pull request` for any issues and bugfixes
- If you want to implement new features or write documentation about existing features feel free to do it as well
- To see a list of missing features or to-do's, please visit the `project` section of the github repository

---

### License

> MIT

> DISCLAIMER: This software comes with absolutely no warranty and is not affiliated with the company **`Bkash`** in any way. Use at your own risk. Author and Contributors are not responsible for any financial damages, outages etc.

### Author
Continue By
[Siyam Hosan](https://github.com/siyamhosan)
Created by
[Shahriar Shojib](https://github.com/shahriar-shojib)