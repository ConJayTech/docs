# IQM API

IQM’s REST API enables you to interact with most of IQM’s offerings.

## Before You Begin

Before you can use most of the API's service, you will need to complete the following steps:

1. An Account On the IQM platform
2. Run at least one campaign
3. A Client ID and Client Secret

If you do not have any of the above,  please follow the steps below.

* [Sign up for an IQM Account](https://app.iqm.com/#/signup)
  * Use your work email as a username and create a secure password
    * Password must be at least 8 characters in length
    * Requires at least 1 uppercase letter
    * Requires at least 1 lowercase letter
    * Requires at least 1 special character
* To Run a Campaign:
  * See the [Create a New Campaign Guide](https://help.iqm.com/en/articles/5651476-create-a-new-campaign)
* Email [integrations@iqm.com](mailto:integrations@iqm.com) to request a Client ID and Client Secret.

An hour after running a campaign, you can generate reports on it.

## Quickstart

These guides will help you to perform the most essential tasks using the API of the IQM platform:

* [Sign Up and Authentication](/docs/quickstart-guides/Authentication-Quickstart-Guide.md)
* [Create a Report](/docs/quickstart-guides/Reporting-API-Quickstart-Guide.md)
* [Schedule a Report](/docs/quickstart-guides/Schedule-Report-API-Quickstart-Guide.md)
* [Upload a Matched Audience](/docs/quickstart-guides/Matched-Audience-Upload-API-Quickstart-Guide.md)
* [Upload a Creative and Create a Campaign](/docs/quickstart-guides/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide.md)

## Guidelines

These guidelines pages will help you navigate common methods and resources in the various endpoints available.


#### [User & Profile Management](/docs/guidelines/User-Profile-Guidelines.md)

* [Send User Invitation](/docs/guidelines/User-Profile-Guidelines.md#send-user-invitation)
* [User Sign Up](/docs/guidelines/User-Profile-Guidelines.md#user-sign-up)
* [Change User Password](/docs/guidelines/User-Profile-Guidelines.md#change-password)
* [Update User Profile](/docs/guidelines/User-Profile-Guidelines.md#update-user-profile)
* [Get List of Users](/docs/guidelines/User-Profile-Guidelines.md#get-list-of-users)
* [User Application Access](/docs/guidelines/User-Profile-Guidelines.md#user-app-access-list)

#### [Campaign API](/docs/guidelines/Campaign-API-Guidelines.md)

* [Get Campaign Details](/docs/guidelines/Campaign-API-Guidelines.md#get-campaign-details)
* [Update Campaign](/docs/guidelines/Campaign-API-Guidelines.md#update-campaign)
* [More Campaign Management](/docs/guidelines/Campaign-API-Guidelines.md#more-campaign-management)
* [Get Insertion Order Details](/docs/guidelines/Campaign-API-Guidelines.md#get-insertion-order-details)
* [Insertion Order Management](/docs/guidelines/Campaign-API-Guidelines.md#insertion-order-management)

#### [Bid Model API](/docs/guidelines/Bid-Model-API-Guidelines.md)

* [Include/Exclude Management](/docs/guidelines/Bid-Model-API-Guidelines.md#includeexclude-management)
* [Campaign Priority Management](/docs/guidelines/Bid-Model-API-Guidelines.md#campaign-priority-management)
* [Generate Metrics Report For a Given Campaign and Dimension](/docs/guidelines/Bid-Model-API-Guidelines.md#get-metrics-report-for-a-given-campaign-and-dimension)
* [Get List of Bid Model Dimensions](/docs/guidelines/Bid-Model-API-Guidelines.md#get-list-of-bid-model-dimensions)

#### [Inventory API](/docs/guidelines/Inventory-API-Guide.md)
* [Get Inventory Details](/docs/guidelines/Inventory-API-Guide.md#get-inventory-details)
* [Inventory Management](/docs/guidelines/Inventory-API-Guide.md#inventory-management)
* [Inventory Groups](/docs/guidelines/Inventory-API-Guide.md#inventory-groups)
* [Inventory Group Management](/docs/guidelines/Inventory-API-Guide.md#inventory-group-management)
* [Private Marketplace (PMP) Deals](/docs/guidelines/Inventory-API-Guide.md#private-marketplace-pmp-deals-details)
* [PMP Deals Management](/docs/guidelines/Inventory-API-Guide.md#pmp-management)
* [Programmatic Guarantee (PG) Deals](/docs/guidelines/Inventory-API-Guide.md#programmatic-guarantee-pg-deals-details)
* [PG Deals Management](/docs/guidelines/Inventory-API-Guide.md#pg-management)

#### [Reports API](/docs/guidelines/Reports-API-Guidelines.md)
* [Get Report Details](/docs/guidelines/Reports-API-Guidelines.md#get-reports-details)
* [Reports Management](/docs/guidelines/Reports-API-Guidelines.md#reports-management)
* [Scheduling Management](/docs/guidelines/Reports-API-Guidelines.md#scheduling-management)
* [Get More Report Details](/docs/guidelines/Reports-API-Guidelines.md#get-more-report-details)

#### [Conversions API](/docs/guidelines/Conversion-API-Guidelines.md)
* [Get Conversions Details](/docs/guidelines/Conversion-API-Guidelines.md#get-conversion-details)
* [Conversions Management](/docs/guidelines/Conversion-API-Guidelines.md#conversions-management)
* [Get More Conversion Details](/docs/guidelines/Conversion-API-Guidelines.md#get-more-conversion-details)


#### [Master API Guidelines](/docs/guidelines/Master-API-Guidelines.md)
* [Get Geographical Data](/docs/guidelines/Master-API-Guidelines.md#get-geographical-data)
* [Get Creative Data](/docs/guidelines/Master-API-Guidelines.md#get-creative-data)
* [Get More Data](/docs/guidelines/Master-API-Guidelines.md#get-more-data)



## Requests

Data resources are accessed via standard HTTP requests in UTF-8 format to an API endpoint. The IQM API uses the following HTTP methods:

| Method | Action |
|---|---|
| GET | Retrieves Resources |
| POST | Creates Resources |
| PUT | Changes or replaces resources |
| DELETE | Deletes Resources |
| PATCH | Applies partial modification to a resources |

Please refer to [MDN documentation on methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Error handling

### Status codes

We use standard HTTP status codes. The error codes you’ll most likely see are:

| Code | Definition |
| ---  |--- |
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 403 | Forbidden |
| 408 | Request Timeout |
| 412 | Precondition Failed |
| 422 | Unprocessable Entity |
| 500 | Internal Service Error|

Please refer to [MDN documentation on status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Rate limits

The message rate limit is 20 requests per minute. Exceeding the limit will cause a 429 (too many requests) error.

## Best Practices

API access token expiry is 24 hours after generation. Generate a refresh token for uninterrupted access to data.

The maximum data size per page is 1K rows.
