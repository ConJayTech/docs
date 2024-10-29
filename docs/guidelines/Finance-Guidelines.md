# Finance API

This page covers the methods and endpoints associated with managing finance operations. In addition to general finance details and lists, there are sections coevering invoice, credit, and payment management. 

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  |  |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Finance Details

### Get Customer Finance Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/customer/financial-details</span>

<div class="container">
  <div class="child1">

Get an over of a customer's finance details.

| Query Parameters |  |
| ----  | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `isFinanceRequest` <br /><span class="type-text">boolean</span> | Represents whether request came from finance tab in customer app<br />For Customer Management Tab: `false` <br />For Finance Tab: `true` |
| `year` <br /><span class="type-text">integer</span> | Year for data | 

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "pendingCampaigns": 15,
        "runningCampaigns": 10,
        "totalCampaigns": 48,
        "dataCost": 0,
        "actualSpent": 0,
        "credits": 0,
        "balance": 30430.75,
        "spent": 0,
        "earning": 0
    }
}
```

</div></div>

---

### Get List of Payment Transactions for Organization

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/payments/list</span>

<div class="container">
  <div class="child1">

Get a list of payment transactions for an organization.

| Query Parameters|  |
| ---- | --- |
| `status` <br /><span class="type-text">string</span> |  Status ID <br />See [static details list](#payment-status) for supported values |
| `paymentType` <br /><span class="type-text">string</span> | Payment type ID <br />See [static details list](#payment-types) for supported values |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `10` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "isPaymentInitiatorOrg": true,
                "paymentId": 19,
                "createdByUserEmail": "jinesh.p+nonihpcust2@iqm.com",
                "paymentDate": 1632076200000,
                "paymentAmount": 10000,
                "paymentStatus": "Rejected",
                "paymentMode": "PayPal",
                "paymentType": "As Fund",
                "invoiceId": 0,
                "modifiedAt": 1637566978000,
                "bankName": null,
                "refundReason": null
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 886,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "Check",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831910000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 885,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831695000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 884,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635831127000,
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 883,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "modifiedAt": 1635830983000,
                "bankName": null,
                "refundReason": "Testing"
            }
        ],
        "totalRecords": 68,
        "filteredRecords": 68
    }
}
```

</div></div>

---

### Get List of Customer Payments

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/customer/payments/list</span>

<div class="container">
  <div class="child1">

Get a list of payments by customer.

| Query Parameters  |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `status` <br /><span class="type-text">string</span> | Status type
| `paymentType` <br /><span class="type-text">string</span>| Payment Type |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `10` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-modifiedAt` <br />Supported values: `paymentId`, `paymentDate`, `paymentAmount`, `organizationName`, `paymentType`, `paymentMode`, `paymentStatus` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 19,
                "createdAt": 1632295016000,
                "createdByUserEmail": "jinesh.p+nonihpcust2@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1632076200000,
                "paymentAmount": 10000,
                "paymentStatus": "Rejected",
                "paymentMode": "PayPal",
                "paymentType": "As Fund",
                "invoiceId": 0,
                "transactionId": "T-1234567",
                "modifiedAt": 1637566978000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": null
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 886,
                "createdAt": 1635831910000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "Check",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831910000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 885,
                "createdAt": 1635831695000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831695000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 884,
                "createdAt": 1635831127000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": "123456",
                "modifiedAt": 1635831127000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            },
            {
                "isPaymentInitiatorOrg": false,
                "paymentId": 883,
                "createdAt": 1635830983000,
                "createdByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "createdByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "paymentDate": 1635791400000,
                "paymentAmount": 10,
                "paymentStatus": "Processing",
                "paymentMode": "To Funds",
                "paymentType": "Refund",
                "invoiceId": 0,
                "transactionId": null,
                "modifiedAt": 1635830983000,
                "modifiedByUserEmail": "jinesh.p+ihpcust@iqm.com",
                "modifiedByUserProfile": "https://iqm-web-assets-c92d6b6cbde1-stage.s3.amazonaws.com/avatar/JO.svg",
                "bankName": null,
                "refundReason": "Testing"
            }
        ],
        "totalRecords": 68,
        "filteredRecords": 68
    }
}
```

</div></div>

---

### Get Invoice for Organization

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/invoice-settings</span>

<div class="container">
  <div class="child1">

Get an invoice for an organization.

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "invoiceId": 1,
        "owId": 334,
        "invoiceTitle": "The Alchemist",
        "invoiceCompanyName": "The Alchemist",
        "invoiceCompanyAddress": "42, 6th Avenue, New york, NY",
        "email": "shraddha.p+alchemist@iqm.com",
        "website": "www.alchemist.com",
        "invoiceDescription": "Dear Customer, Greetings from The Alchemist, we are writing to provice you an electronic invoice for your use of services.",
        "paypalId": 1,
        "chequeTransferId": 1,
        "wireTransferId": 2,
        "termsAndConditions": "Please make the payment in 30 days or your account might be put on hold",
        "paymentTerm": "30",
        "invoiceFooter": "The Alchemist | 12.234.56.789 | USA",
        "createdAt": "2021-08-27T07:33:14.000+00:00"
    }
}
```

</div></div>

---

### Get Invoice Payment Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/invoice-settings-payment-details</span>

<div class="container">
  <div class="child1">

Get invoice payment details by invoice ID.

| Query Parameters  |  |
| ----  | --- |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "paypalPaymentDetail": {
            "paypalId": 1,
            "paypalAccountId": "thealchemistfinance@paypal"
        },
        "chequePaymentDetail": {
            "chequeId": 1,
            "chequeCompanyName": "The Alchemist Company",
            "chequeCompanyAddress": "45, Fifth Avenue, NY, USA"
        },
        "wireTransferPaymentDetail": {
            "wireTransferId": 2,
            "wireTransferCompanyName": "The Alchemist",
            "bankName": "JP Morgan Chase Bank",
            "accountNumber": "670669295",
            "bankAddress": "498 7th Avenue New York NY",
            "swiftCode": "MGTCUS3G",
            "routing": "150098"
        }
    }
}
```

</div></div>

---

### Get List of Invoices for Customer or Organization

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/invoice/list/{owId}</span>

<div class="container">
  <div class="child1">

Get a list of invoices by customer or organization.

| Path Parameters  |  |
| ----  | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |

| Query Parameters  |  |
| ----| --- |
| `status` <br /><span class="type-text">string</span> | Status ID <br />See [static details list](#invoice-status) for supported values |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-invoiceId` <br />Supported values: `issuedOn`, `invoiceAmount`, `status` |
| `isCustomerRequest` <br /><span class="type-text">boolean</span> | (Organization endpoint only) Customer app request (default): `true` <br />Organization app request: `false`

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "invoiceId": 79,
                "invoiceFromDate": 1601510400,
                "invoiceToDate": 1604102400,
                "issuedOn": 1632182400,
                "invoiceAmount": 553611.718,
                "status": 7,
                "paymentTerm": 30,
                "paidAmount": 5000,
                "paymentMode": [
                    2,
                    4
                ],
                "invoiceName": "Zydus - Oct2020",
                "actionNote": null,
                "invoiceStatusUpdatedBy": "Kartik Gevariya",
                "modifiedAt": 1632801378000
            }
        ],
        "totalRecords": 0,
        "filteredRecords": 0
    }
}
```

</div></div>

---

### Get Customer Margin Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/customer/view-margin</span>

<div class="container">
  <div class="child1">

Get customer margin details by margin type.

| Query Parameters | Description |
| ---- | --- |
| `marginTypeIds` <br /><span class="type-text">string</span> | Comma separated margin type IDs <br />See static details list for supported values |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 1,
        "data": [
            {
                "marginTypeId": 1,
                "marginType": "Gross Margin",
                "marginValue": 15
            }
        ],
        "filteredRecords": 1,
        "isBidShadingEnabled": false
    }
}
```

</div></div>

---

#### Update Customer Margin Details

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/edit-margin</span>

<div class="container">
  <div class="child1">

| Request Schema | Description |
| ----  | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `marginTypeId` <br /><span class="type-text">integer</span> | Margin type ID |
| `marginValue` <br /><span class="type-text">integer</span> | Margin value |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 202318,
    "marginTypeId": 1,
    "marginValue": 15
}
```

```json title="Response 200"

```

</div></div>

---

### Get Campaign Margin Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/custom/fa/list/campaign-margin-detail</span>

<div class="container">
  <div class="child1">

Get campaign margin details by campaign ID.

| Query Parameters | Description |
| ---- | --- |
| `campaignIds` <br /><span class="type-text">string</span> | Comma separated campaign IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "1234": {
            "workspaceMargin": 10,
            "organizationMargin": 10
        },
        "4567": {
            "workspaceMargin": 11,
            "organizationMargin": 20
        }
    }
}
```

</div></div>

---

### Get Customer PG Fees Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/customer/{owId}/pg-fees</span>

<div class="container">
  <div class="child1">

Get details for customer PG fees.

| Path Parameters |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "organizationPgFeesDetails": {
        "pgCampaignFees": 10,
        "pgWorkspaceShare": 15
        }
    }
}
```

</div></div>

---

#### Edit Customer PG Fees

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/customer/{customerOwId}/pg-fees</span>

<div class="container">
  <div class="child1">

| Path Parameters | |
| ---- | --- |
| `customerOwId` <br /><span class="type-text">integer</span> | Customer Organization Workspace ID |

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `pgCampaignFees` <br /><span class="type-text">integer</span> | PG Campaign Fees |
| `pgWorkspaceShare` <br /><span class="type-text">integer</span> | The share of PG fees applied to the campaign by the workspace |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 202318,
    "pgCampaignFees": 10,
    "pgWorkspaceShare": 15
}
```

```json title="Response 200"
{
    "success": true,
    "data": "PG Fees details updated Successfully."
}
```

</div></div>

---

### Get Customer VLD Finance Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/customer/{customerOwId}/vld-fees</span>

<div class="container">
  <div class="child1">

Get finance details for customer VLD.

| Path Parameters | |
| ---- | --- |
| `customerOwId` <br /><span class="type-text">integer</span> | Customer Organization Workspace ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 1,
        "vldRate": 3
    }
}
```

```json title="Response 200 (VLD flag)"
{
    "success": true,
    "data": {
        "id": 3,
        "owId": 201427,
        "vldRate": 3,
        "vldEnabled": true,
        "vldMarkupType": "Percentage",
        "vldMarkupValue": 10
    }
}
```

</div></div>

---

#### Updates Customer VLD Details

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/customer/vld-fees</span>

<div class="container">
  <div class="child1">

| Request Schema | Description |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | OW ID of the customer to update details (required) |
| `vldRate` <br /><span class="type-text">integer</span> | VLD rate for workspace customer |
| `vldEnabled` <br /><span class="type-text">boolean</span> | Boolean flag to enable and disable VLD feature for advertiser customer |
| `vldMarkupTypeId` <br /><span class="type-text">integer</span> | VLD markup type ID to represent markup types absolute or percentage |
| `vldMarkupValue` <br /><span class="type-text">integer</span> | VLD markup value for advertiser customer |

</div><div class="child2">

```json title="Request Sample"
{
    "id": 0,
    "owId": 0,
    "vldRate": 0,
    "vldEnabled": true,
    "vldMarkupType": "string",
    "vldMarkupTypeId": 0,
    "vldMarkupValue": 9999
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 1,
        "message": "VLD Rate updated successfully. The new rate applies only to newly created VLDs"
    }
}
```

</div></div>

---

### Get Basic Financial Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/basic/details</span>

<div class="container">
  <div class="child1"></div>
<div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "paypalFeesPercentage": 3.5
    }
}
```

</div></div>

---

### Available Balance

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/available-balance</span>

<div class="container">
  <div class="child1">

| Query Parameters | |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `isCustomerRequest` <br /><span class="type-text">boolean</span> | Customer app request (default): `true` <br />Organization app request: `false` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": 5855904.72
}
```

</div></div>

---

### Credit Summary

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/credit-summary/{owId}</span>

<div class="container">
  <div class="child1">

Get credit summary by workspace ID.

| Path Parameter |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |

| Query Parameters |  |
| ---- | --- |
| `isCustomerRequest` <br /><span class="type-text">boolean</span> | Customer app request (default): `true` <br />Organization app request: `false` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "usedCredit": 21875.37,
        "totalCredit": 50000
    }
}
```

</div></div>

---

### Offered Credits

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/credits/list</span>

<div class="container">
  <div class="child1">

Get a list of offered credits to organization.

| Query Parameters |  |
| ---- | --- |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `50` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-modifiedAt` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "creditId": 2,
                "creditAmount": 1000,
                "modifiedAt": "2021-09-08T10:24:32.000+00:00",
                "status": "Unclaimed",
                "organizationName": "JP test org"
            },
            {
                "creditId": 1,
                "creditAmount": 1500,
                "modifiedAt": "2021-09-08T05:46:15.000+00:00",
                "status": "Revoked",
                "organizationName": "JP test org"
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

</div></div>

---

### Download Invoice

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/download-invoice/{owId}/{invoiceId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID |

| Query Parameters | |
| ---- | --- |
| `isCustomerRequest` <br /><span class="type-text">boolean</span> | Customer app request (default): `true` <br />Organization app request: `false` |

</div><div class="child2">

```json title="Response 200"

```

</div></div>

---

### Download Payment Receipt

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/payment/download-receipt/{paymentId}</span>

<div class="container">
  <div class="child1">

Get a PDF of payment receipt.

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span> | Payment ID |

| Query Parameter | Description |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `isCustomerRequest` <br /><span class="type-text">boolean</span> | Customer app request (default): `true` <br />Organization app request: `false` |

</div><div class="child2">

```json title="Response 200"

```

</div></div>

---

## Invoice Management

### Update Invoice Settings

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/invoice-settings/{invoiceId}</span>

<div class="container">
  <div class="child1">

| Query Parameter | |
| ---- | --- |
| `isWhiteLabel` <br /><span class="type-text">boolean</span> | 

| Request Schema | |
| ---- | --- |
| `invoiceTitle` <br /><span class="type-text">string</span> | Invoice title |
| `invoiceCompanyAddress` <br /><span class="type-text">string</span> | Invoice company address |
| `email` <br /><span class="type-text">string</span> | Email |
| `website` <br /><span class="type-text">string</span> | Website |
| `invoiceDescription` <br /><span class="type-text">string</span> | Invoice description |
| `termsAndConditions` <br /><span class="type-text">string</span> | Terms and conditions of invoice |
| `paymentTerm` <br /><span class="type-text">string</span> | [Payment term ID](#invoice-payment-term) |
| `invoiceFooter` <br /><span class="type-text">string</span> |
| `paypalAcountId` <br /><span class="type-text">string</span> | PayPal account ID |
| `chequeCompanyName` <br /><span class="type-text">string</span> | 
| `chequeCompanyAddress` <br /><span class="type-text">string</span> |
| `wireTransferCompanyName` <br /><span class="type-text">string</span> |
| `bankName` <br /><span class="type-text">string</span> | Bank name
| `accountNumber` <br /><span class="type-text">string</span> | Account number |
| `bankAddress` <br /><span class="type-text">string</span> | Bank address | 
| `companyTaxId` <br /><span class="type-text">string</span> | Company tax ID |
| `companyTaxName` <br /><span class="type-text">string</span> | Company tax name |

</div><div class="child2">

```json title="Request Sample"
{
  "invoiceTitle": "The Alchemist",
  "invoiceCompanyAddress": "42, 6th Avenue, New york, NY",
  "email": "shraddha.p+alchemist@iqm.com",
  "website": "www.alchemist.com",
  "invoiceDescription": "Dear Customer, Greetings from The Alchemist, we are writing to provice you an electronic invoice for your use of services.",
  "termsAndConditions": "Please make the payment in 30 days or your account might be put on hold",
  "paymentTerm": "30",
  "invoiceFooter": "The Alchemist | 12.234.56.789 | USA",
  "paypalAccountId": "thealchemistfinance@paypal",
  "chequeCompanyName": "The Alchemist Company",
  "chequeCompanyAddress": "45, Fifth Avenue, NY, USA",
  "wireTransferCompanyName": "The Alchemist",
  "bankName": "JP Morgan Chase Bank",
  "accountNumber": "670669295",
  "bankAddress": "498 7th Avenue New York NY",
  "companyTaxId": "202130INGST",
  "companyTaxName": "GSTIN"
}
```

```json title="Response 200"
{
  "success": true,
  "data": {
    "invoiceId": 1,
    "message": "Invoice details updated successfully"
  }
}
```

<details>
<summary>More Responses</summary>

```json title="Response 422"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Invoice does not belong to the logged in organization workspace"
    }
  ]
}
```

```json title="Response"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Invoice with the provided ID does not exists"
    }
  ]
}
```

</details>

</div></div>

---

### Delete Invoice Tax Data

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/fa/invoice-settings-tax-data</span>

<div class="container">
  <div class="child1">

| Query Parameters | |
| ---- | --- |
| `taxId` <br /><span class="type-text">integer</span> | Tax ID |

</div><div class="child2">

```json title="Response 200"
{
  "success": true,
  "data": "Tax data deleted successfully"
}
```

```json title="Response 422"
{
  "success": false,
  "errorObjects": [
    {
      "error": "Tax ID is invalid"
    }
  ]
}
```

</div></div>

---

### Approve Invoice

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/invoice-approve/{invoiceId}</span>

<div class="container">
  <div class="child1">

Update [invoice status](#invoice-status).

| Path Parameter | Description |
| --- | --- |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Invoice with the provided ID approved successfully"
}
```

</div></div>

---

#### Cancel Invoice

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/invoice-cancel/{invoiceId}</span>

<div class="container">
  <div class="child1"></div>

  <div class="child2">

```json title="Response 200"
{
    "actionNote": "cancelling invoice"
}
```

</div></div>

---

### Mark Invoice as Paid

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/pay-invoice</span>

<div class="container">
  <div class="child1">

| Request Schema  |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `paymentAmount` <br /><span class="type-text">integer</span> | Payment amount |
| `paymentType` <br /><span class="type-text">integer</span> | Payment type ID <br />See [static details list](#payment-types) for supported values |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 678345,
    "paymentAmount": 10000,
    "paymentType": 1,
    "invoiceId": 23
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Payment added Successfully."
}
```

</div></div>

---

### Email Invoice

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/email-invoice/{owId}/{invoiceId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID |


| Request Schema | |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> | Email to send invoice to |

</div><div class="child2">

```json title="Request Sample"
{
    "email": "user@company.com"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Invoice e-mail sent successfully."
}
```

</div></div>

---

## Credit Management

### Add Credit to Customer

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/credit/add</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `creditAmount` <br /><span class="type-text">integer</span> | Credit amount to add |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 23,
    "creditAmount": 5000
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Credits offered Successfully."
}
```

</div></div>

---

### Update Credit Offered to Customer

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/fa/customer/credit/edit</span>

<div class="container">
  <div class="child1">

| Request Schema | Description |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `creditAmount` <br /><span class="type-text">integer</span> | Credit amount to add |
| `creditId` <br /><span class="type-text">integer</span> | Credit ID |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 54,
    "creditAmount": 4000,
    "creditId": 3
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Credits updated Successfully."
}
```

</div></div>

---

#### Revoke Credit Offered to Customer

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/credit/revoke</span>

<div class="container">
  <div class="child1">

| Request Schema | Description |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `creditId` <br /><span class="type-text">integer</span> | Credit ID |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 54,
    "creditId": 2
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Credits revoked Successfully."
}
```

</div></div>

---

### Claim Offered Credits

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/credit/claim</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `creditId` <br /><span class="type-text">integer</span> | Credit ID |
| `customerName` <br /><span class="type-text">string</span> | Customer Name |
| `businessName` <br /><span class="type-text">string</span> | Business Name |
| `taxId` <br /><span class="type-text">string</span> | Tax ID |
| `contactPersonName` <br /><span class="type-text">string</span> | Contact person name |
| `contactPersonEmail` <br /><span class="type-text">string</span> | Contact person email |
| `incorporationPlace` <br /><span class="type-text">string</span> | Incorporation location |
| `address` <br /><span class="type-text">string</span> | Address |

</div><div class="child2">

```json title="Request Sample"
{
    "creditId": 4,
    "customerName": "JP test ",
    "businessName": "JP test org3",
    "taxId": "123456",
    "contactPersonName": "JP",
    "contactPersonEmail": "jinesh.p+nonihpcust2@iqm.com",
    "incorporationPlace": "Gujarat, India",
    "address": "A-123, XYZ Complex, Ahmedabad, Gujarat, India - 380059"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Credits claimed."
}
```

</div></div>

---

## Payment Management

### Add Payment for Customer

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/add</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Orginazation Workspace ID |
| `paymentAmount` <br /><span class="type-text">integer</span> | Payment amount |
| `paymentDate` <br /><span class="type-text">string</span> | Payment date in YYYY-MM-DD format |
| `paymentMode` <br /><span class="type-text">integer</span> | Payment mode type ID <br />See [static details list](#invoice-payment-mode-types) for supported values |
| `transactionId` <br /><span class="type-text">integer</span> | Transaction ID |
| `paymentProof` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Proof of payment image (jpeg/png) |
| `paymentType` <br /><span class="type-text">integer</span> | Payment type ID <br />See [static details list](#payment-types) for supported values |
| `invoiceId` <br /><span class="type-text">integer</span> | Invoice ID (provide only of `paymentType` is <span class="value-text">Against Invoice</span>) |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 123654,
    "paymentAmount": 5000,
    "paymentDate": "2025-12-01",
    "paymentMode": 1,
    "transactionId": 10,
    "paymentProof": "image.png",
    "paymentType": 2,
    "invoiceId": 34
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Payment added Successfully."
}
```

</div>
</div>

---

#### Edit Customer Payment

<span class="badge badge--warning">PUT</span> <span class="path-text">/api/v3/fa/customer/payment/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Payment updated Successfully."
}
```

</div></div>

---

### Approve Payment

Update payment status

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/approve/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `actionNote` <br /><span class="type-text">string</span> | Description of payment status change |

</div><div class="child2">

```json title="Request Sample"
{
    "owId": 200485,
    "actionNote": "Payment paid partially"
}
```

```json title"Response 200"
{
    "success": true,
    "data": "Payment approved Successfully."
}
```

</div></div>

---

#### Cancel Payment

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/cancel/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Payment cancelled Successfully."
}
```

</div></div>

---

#### Reject Payment

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/reject/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Payment rejected Successfully."
}
```

</div></div>

---

### Add Payment from Organization App

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/payment/add-fund</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `paymentAmount` <br /><span class="type-text">integer</span> | Payment amount |
| `paymentDate` <br /><span class="type-text">string</span> | Payment date in YYYY-MM-DD format |
| `paymentMode` <br /><span class="type-text">integer</span> | Payment mode type ID <br />See [static details list](#invoice-payment-mode-types) for supported values |
| `paymentProof` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Proof of payment image (jpeg/png) |
| `bankName` <br /><span class="type-text">string</span> | Required only if `paymentMode` is <span class="value-text">Check</span> or <span class="value-text">Wire Transfer</span> |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Payment Successful."
}
```

</div></div>

---

### Payment with PayPal

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/paypal/payment</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `paymentAmount` <br /><span class="type-text">integer</span> | Payment amount |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-3YM2956846765604B"
}
```

</div></div>

---

### Initiate Refund

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/refund</span>

<div class="container">
  <div class="child1">

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Orginazation Workspace ID |
| `paymentAmount` <br /><span class="type-text">integer</span> | Payment amount |
| `paymentDate` <br /><span class="type-text">string</span> | Payment date in YYYY-MM-DD format |
| `paymentMode` <br /><span class="type-text">integer</span> | Payment mode type ID <br />See [static details list](#invoice-payment-mode-types) for supported values |
| `transactionId` <br /><span class="type-text">integer</span> | Transaction ID |
| `paymentProof` <br /><span class="type-text">string</span> <span class="required-text">optional</span> | Proof of payment image (jpeg/png) |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Refund Initiated."
}
```

</div></div>

---

#### Approve Refund

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/customer/payment/approve-refund/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

| Request Schema |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `actionNote` <br /><span class="type-text">string</span> | Description of status change |

</div><div class="child2">

```json title="Request Sample"
{
  "owId": 200485,
  "actionNote": "Payment paid partially"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Refund successful."
}
```

</div></div>

---

### Email Payment Receipt

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/fa/payment/email-receipt/{owId}/{paymentId}</span>

<div class="container">
  <div class="child1">

| Path Parameter |  |
| ---- | --- |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `paymentId` <br /><span class="type-text">integer</span>  | Payment ID |

| Request Schema |  |
| ---- | --- |
| `email` <br /><span class="type-text">string</span> | Email to send receipt to |

</div><div class="child2">

```json title="Request Sample"
{
    "email": "example@business.com"
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Payment receipt e-mail sent successfully."
}
```

</div></div>

---

## Static Details Lists

### Payment Types

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/payment-type</span>

<div class="container">
  <div class="child1">

Get a list of payment type IDs. 

| Attributes |  |
| ---- | --- |
| <span class="value-text">As Fund</span> <br /><span class="type-text">ID: 1</span> | 
| <span class="value-text">Against Invoice</span> <br /><span class="type-text">ID: 2</span> |
| <span class="value-text">Refund</span> <br /><span class="type-text">ID: 3</span> |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "name": "as_fund",
            "id": 1,
            "label": "As Fund",
            "order": 1
        },
        {
            "name": "against_invoice",
            "id": 2,
            "label": "Against Invoice",
            "order": 2
        },
        {
            "name": "refund",
            "id": 3,
            "label": "Refund",
            "order": 3
        }
    ]
}
```
</div></div>

---

### Payment Status

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/payment-status</span>

<div class="container">
  <div class="child1">

Get a list of payment type IDs.

| Attributes |  |
| ---- | --- |
| <span class="value-text">Processing</span> <br /><span class="type-text">ID: 1</span> | Payment in process |
| <span class="value-text">Paid</span> <br /><span class="type-text">ID: 2</span> | Payment paid |
| <span class="value-text">Rejected</span> <br /><span class="type-text">ID: 3</span> | Payment rejected |
| <span class="value-text">Cancelled</span> <br /><span class="type-text">ID: 4</span> | Payment cancelled |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "name": "processing",
            "id": 1,
            "label": "Processing",
            "order": 1
        },
        {
            "name": "paid",
            "id": 2,
            "label": "Paid",
            "order": 2
        },
        {
            "name": "rejected",
            "id": 3,
            "label": "Rejected",
            "order": 3
        },
        {
            "name": "cancelled",
            "id": 4,
            "label": "Cancelled",
            "order": 4
        }
    ]
}
```

</div></div>

---

### Invoice Payment Mode Types

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/invoice-payment-modes</span>

<div class="container">
  <div class="child1">

Get a list of payment mode type IDs. 

| Attributes |  |
| ---- | --- |
| <span class="value-text">PayPal</span> <br /><span class="type-text">ID: 1</span> | Payment by PayPal |
| <span class="value-text">Cheque</span> <br /><span class="type-text">ID: 2</span> | Payment by cheque |
| <span class="value-text">Wire Transfer</span> <br /><span class="type-text">ID: 3</span> | Payment by wire transfer |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "name": "paypal",
            "id": 1,
            "label": "PayPal",
            "order": 1
        },
        {
            "name": "cheque",
            "id": 2,
            "label": "Cheque",
            "order": 2
        },
        {
            "name": "wire_transfer",
            "id": 3,
            "label": "Wire Transfer",
            "order": 3
        }
    ]
}
```

</div></div>

---

### Invoice Status

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/invoice-status</span>

<div class="container">
  <div class="child1">

Get a list of invoice status type IDs. 

| Attributes |  |
| ---- | --- |
| <span class="value-text">Pending</span> <br /><span class="type-text">ID: 1</span> | Invoice pending |
| <span class="value-text">Partially Paid</span> <br /><span class="type-text">ID: 2</span> | Invoice partially paid |
| <span class="value-text">Unpaid</span> <br /><span class="type-text">ID: 3</span> | Invoice not paid |
| <span class="value-text">Paid</span> <br /><span class="type-text">ID: 4</span> | Invoice paid |
| <span class="value-text">Overdue</span> <br /><span class="type-text">ID: 5</span> | Invoice payment overdue |
| <span class="value-text">Processing</span> <br /><span class="type-text">ID: 7</span> | Invoice payment processing |
| <span class="value-text">Cancelled</span> <br /><span class="type-text">ID: 8</span> | Invoice payment cancelled |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "name": "pending",
            "id": 1,
            "label": "Pending",
            "order": 1
        },
        {
            "name": "partially_paid",
            "id": 2,
            "label": "Partially Paid",
            "order": 2
        },
        {
            "name": "unpaid",
            "id": 3,
            "label": "Unpaid",
            "order": 3
        },
        {
            "name": "paid",
            "id": 4,
            "label": "Paid",
            "order": 4
        },
        {
            "name": "overdue",
            "id": 5,
            "label": "Overdue",
            "order": 5
        },
        {
            "name": "processing",
            "id": 7,
            "label": "Processing",
            "order": 7
        },
        {
            "name": "cancelled",
            "id": 8,
            "label": "Cancelled",
            "order": 8
        }
    ]
}
```

</div></div>

---

### Invoice Payment Term

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/invoice-payment-terms</span>

<div class="container">
  <div class="child1"></div>

  <div class="child2">

```json
{
    "success": true,
    "data": [
        {
            "name": "7",
            "id": 1,
            "label": "Net 7",
            "order": 1
        },
        {
            "name": "15",
            "id": 2,
            "label": "Net 15",
            "order": 2
        },
        {
            "name": "30",
            "id": 3,
            "label": "Net 30",
            "order": 3
        },
        {
            "name": "45",
            "id": 4,
            "label": "Net 45",
            "order": 4
        },
        {
            "name": "60",
            "id": 5,
            "label": "Net 60",
            "order": 5
        },
        {
            "name": "90",
            "id": 6,
            "label": "Net 90",
            "order": 6
        },
        {
            "name": "120",
            "id": 7,
            "label": "Net 120",
            "order": 7
        },
        {
            "name": "0",
            "id": 8,
            "label": "Custom",
            "order": 8
        }
    ]
}
```

</div></div>

---

### PG Payment Type

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/fa/static/pg/payment-type</span>

<div class="container">
  <div class="child1">

Get a list of PG payment type IDs.  

| Attributes |  |
| ---- | --- |
| <span class="value-text">Publisher</span> <br /><span class="type-text">ID: 1</span> | Publisher payment |
| <span class="value-text">Platform</span> <br /><span class="type-text">ID: 2</span> | Platform payment |

</div><div class="child2>

```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "pgPaymentTypes": [
            {
                "id": 1,
                "name": "publisher",
                "label": "Publisher",
                "order": 1
            },
            {
                "id": 2,
                "name": "platform",
                "label": "Platform",
                "order": 2
            }
        ]
    }
}
```

</div></div>

---