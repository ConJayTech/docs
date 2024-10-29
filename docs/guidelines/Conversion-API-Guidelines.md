# Conversions API

IQM's Conversions API allows the user to manage and get details on conversions.

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  | Description |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

---

## Get Conversion Details

This section covers the various methods and endpoints for getting conversion details and lists.

### Postback Conversion Resource Properties

<div class="container">
  <div class="child3">

| Attributes |  |
| ---- | --- |
| `id` <br /><span class="type-text">integer</span> | Postback Conversion ID |
| `name` <br /><span class="type-text">string</span> | Postback Conversion name |
| `uuid` <br /><span class="type-text">string</span> | Universal user ID
| `typeId` <br /><span class="type-text">integer</span> | [Conversion type ID](#get-list-of-conversion-types) |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `createdByUowId` <br /><span class="type-text">integer</span> | Created by Organization Workspace User ID |
| `modifiedByUowId` <br /><span class="type-text">integer</span> | Modified by Organization Workspace User ID |
| `statusId` <br /><span class="type-text">integer</span> | [Status ID](#get-list-of-conversion-status)
| `partnerTypeId` <br /><span class="type-text">integer</span> | [Partner type ID](#get-list-of-partner-types-for-postback-conversions) |
| `impressionUrl` <br /><span class="type-text">string</span> | Impression URL |
| `clickUrl` <br /><span class="type-text">string</span> | Click URL |

</div></div>

### Pixel Conversion Resource Properties

<div class="container">
  <div class="child3">

| Attributes |  |
| ---- | --- |
| `id` <br /><span class="type-text">integer</span> | Pixel Conversion ID |
| `uuid`  <br /><span class="type-text">string</span> | Universal user ID |
| `typeId`  <br /><span class="type-text">integer</span> | [Conversion type ID](#get-list-of-conversion-types) |
| `owId`  <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `createdByUowId`  <br /><span class="type-text">integer</span> | Created by Organization Workspace User ID |
| `modifiedByUowId` <br /><span class="type-text">integer</span> | Modified by Organization Workspace User ID |
| `statusId` <br /><span class="type-text">integer</span> | [Status ID](#get-list-of-conversion-status) |
| `status` <br /><span class="type-text">string</span> | Status name |
| `created` <br /><span class="type-text">integer</span> | Unix epoch timestamp of Pixel Conversion creation, in milliseconds |
| `name` <br /><span class="type-text">string</span> | Name for Pixel Conversion |
| `attributionId` <br /><span class="type-text">string</span> | [Attribution type ID](#get-list-of-conversion-attribute-types) |
| `customFields` <br /><span class="type-text">string</span> | 	Allows user to pass additional data along with conversion details, which can be used for more detailed insights |
| `financialMetrics` <br /><span class="type-text">string</span> | Allows user to pass additional financial data along with conversion details, which can then be used to calculate ROAs |
| `piggybackData` <br /><span class="type-text">object</span> | contains `url` and `type` attributes |
| `url` <br /><span class="type-text">string</span> | Additional URL that can be added to a pixel conversion to send conversion information to a third-party platform
| `type` <br /><span class="type-text">integer</span> | [Piggyback type ID](#get-list-of-conversion-piggyback-types) |
| `conversionSetting` <br /><span class="type-text">object</span> | Advanced conversion setting, containts `conversionDuration`, `repeatConversion`, and `crossModelling` attributes |
| `conversionDuration` <br /><span class="type-text">object</span> | Determines the length of time after a user clicks or views (or both: hybrid) an ad that a conversion can be attributed to that ad, contains `view` and `click` attributes |
| `view` <br /><span class="type-text">integer</span> | View-based attribution gives credit to an ad that a user saw, but did not necessarily interact with, before making a conversion <br />Post view interval, days: [`1`...`30`] |
| `click`  <br /><span class="type-text">integer</span> | Click-based attribution assigns credit for a conversion to the last ad that a user clicked on before making a purchase or taking an action <br />Post click interval, days: [`7`...`60`] |
| `repeatConversion` <br /><span class="type-text">object</span> | Allows for multiple conversions from the same user to be tracked and attributed to the same ad or campaign, contains `count`, `frequency`, and `unit` |
| `count` <br /><span class="type-text">integer</span> | Counts all conversions per user [`0`] or just 1 conversion per user [`1`]
| `frequency` <br /><span class="type-text">integer</span> | Counts 1 conversion per user for specified number based on selected unit |
| `unit` <br /><span class="type-text">string</span> | Selected unit of conversion frequency |
| `crossModelling` <br /><span class="type-text">boolean</span> | 	Machine learning technique used to attribute conversion to ads that may not have received direct clicks or views from the same device |

</div></div>

---

### Get Conversion Details by ID

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/{conversionId}</span>

<div class="container">
  <div class="child1">

Get details about a conversion from its ID.

| Path Parameter  |  |
| ---- | --- |
| `conversionId` <br /><span class="type-text">integer</span> | Conversion ID |
| `typeId` <br /><span class="type-text">integer</span>| [Conversion type ID](#get-list-of-conversion-types) for which the details will be returned <br />Pixel: `1` <br />Postback: `2` |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 3121,
        "name": "PixelConversion",
        "uuid": "7e955ccbb92340f7b28c744eb876c9c6",
        "typeId": 1,
        "owId": 202017,
        "createdByUowId": 12121,
        "modifiedByUowId": 12121,
        "attributionId": 1,
        "statusId": 1,
        "customFields": [
            "field_1",
            "field_2",
            "field_3"
        ],
        "financialMetrics": "field_1",
        "piggybackData": {
            "url": "http://thisPiggybackUrl.com/piggy",
            "type": 1
        },
        "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/7e955ccbb92340f7b28c744eb876c9c6?cv={CONVERSION_VALUE}' async></script>",
        "conversionSetting": {
        "conversionDuration": {
            "view": 10,
            "click": 10
        },
        "repeatConversion": {
            "count": 1,
            "frequency": 1,
            "unit": "Day"
        },
        "crossModelling": true
        }
    }
}
```

</div></div>

---

### Get List of Conversions

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversions/list</span>

<div class="container">
  <div class="child1">

Get a list of conversions with details and filters.

| Query Parameters | Description |
| ---- | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `20` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-created` | 
| `conversionsId` <br /><span class="type-text">string</span> | Conversion ID
| `typeIds` <br /><span class="type-text">string</span> | Filters by [conversion type ID](#get-list-of-conversion-types)<br />Pixel: `1` <br />Postback: `2`
| `statusIds` <br /><span class="type-text">string</span> | Filters by [conversion status ID](#get-list-of-conversion-status)<br />Active:`1` <br />Pending:`2` |
| `postbackPartnerIds` <br /><span class="type-text">string</span> | Filters by postback conversion type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 2539,
                "name": "conversion-197",
                "postbackPartnerName": null,
                "status": "Active",
                "type": "Pixel",
                "created": 1677805806,
                "totalConversion": 0,
                "owId": 201352,
                "createdByUowId": 6255,
                "modifiedByUowId": 6255,
                "uuid": "8f3165d0-b714-440e-bc1d-621127fa5fad",
                "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/8f3165d0-b714-440e-bc1d-621127fa5fad?cv={CONVERSION_VALUE}' async></script>",
                "attributedConversion": 0,
                "attributedViewThroughConversion": 0,
                "attributedClickThroughConversion": 0,
                "pixelFinancialMetric": "test_metric",
                "postbackPartnerLogoUrl": "https://logo-bucket/partners/kochava.com",
                "campaignCount": 0
            }
        ],
        "totalRecords": 8,
        "filteredRecords": 1
    }
}
```

</div></div>

---

### Get Conversion Count by Type

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/type-wise-count</span>

<div class="container">
  <div class="child1">

Get a count of conversions based on type.

| Query Parameter  |  |
| ----  | --- |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword | 

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "conversionType": "PIXEL",
            "conversionCount": 1,
            "order": 1
        },
        {
            "conversionType": "POSTBACK",
            "conversionCount": 9,
            "order": 2
        }
    ]
}
```

</div></div>

---

### Get Campaign Details by Conversion ID

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/attached/campaigns/list</span>

<div class="container">
  <div class="child1">

Get a list of campaign details by conversion ID.

| Query Parameter | Type | Description |
| ---- | ---- | --- |
| `conversionId` | integer | Conversion ID |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "campaignId": 1000,
            "campaignName": "Campaign 1",
            "creativeTypeId": 17, 
            "status": "expired",
            "startTime": 1888705936,
            "endTime": 1669420800,
            "ioId": 1,
            "ioName": "Insertion Order Name",
            "ioStatusId": 1,
            "ioBudgetTypeId": 1
        }
    ], 
    "totalRecords": 4,
    "filterRecords": 1
}
```
</div></div>

---

### Get Campaign Details by Conversion ID in Group or Basic

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/allowed/campaign-list</span>

<div class="container">
  <div class="child1">

Get a list of campaign details by conversin ID in group details or basic details.

| Query Parameters  |  |
| ----  | --- |
| `conversionId` <br /><span class="type-text">integer</span> | Conversion ID |
| `owId` <br /><span class="type-text">integer</span> | Organization Workspace ID |
| `isGroup` <br /><span class="type-text">boolean</span> | Flag for fetching group details (`true`) or basic details (`false`) |
| `limit` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `20` |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`), default: `-ioId`, `-campaignId` |
| `searchField` <br /><span class="type-text">string</span> | Search results by keyword |

</div><div class="child2">

```json title=Response 200"
{
    "success": true,
    "data": [
        {
            "ioId": 1215,
            "ioName": "new name",
            "ioBudgetTypeId": 1,
            "ioStatusId": 0,
            "created": 1693886215726,
            "lastModified": 1695216128000,
            "owId": 201427,
            "uowId": 111357,
            "campaignCount": 1,
            "campaigns": [
                {
                    "id": 437060,
                    "campaignId": 437060,
                    "name": "Test-CB-2229",
                    "creativeTypeId": 11,
                    "status": "running",
                    "startTime": 1793972800,
                    "endTime": 0,
                    "createdAt": 1694153838,
                    "modifiedAt": 1695945600000,
                    "owId": 201427,
                    "ioId": 0,
                    "ioName": null
                }
            ]
        }
    ]
}
```

</div></div>

---

## Conversions Management

This section covers the various methods and endpoints for managing conversions.

### Create Postback Conversion

<span class="badge badge--success">POST</span><span class="path-text">/api/v3/conversion/postback/add</span>

<div class="container">
  <div class="child1">

Create postback type conversion records.

| Request Schema | Description |
| ---- | --- |
| `name` <br /><span class="type-text">string</span> | Name for postback conversion |
| `partnerTypeId` <br /><span class="type-text">string</span> | Partner type ID |
| `impressionsUrl` <br /><span class="type-text">string</span> | Impressions URL |
| `clickUrl` <br /><span class="type-text">string</span>| Click URL |

</div><div class="child2">

```json title="Request Sample"
{
    "name": "testing postback",
    "partnerTypeId": "1",
    "impressionUrl": "https://imp.control.kochava.com/track/impression?campaign_id=kodragons-blade-1svu3szpd4b2be3253705&network_id=3603",
    "clickUrl": "https://control.kochava.com/v1/cpi/click?campaign_id?campaign_id=kodragons-blade-1svu3szpd4b2be3253705&network_id=3603"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 3215,
        "name": "testing postback",
        "partnerName": null,
        "status": "Active",
        "type": "Postback",
        "created": 1687460629,
        "totalConversions": 0,
        "owId": 202017,
        "createdByUowId": 108658,
        "modifiedByUowId": 108658,
        "uuid": "879127abaab7459585b602b1f25dec41",
        "attributedConversions": 0,
        "attributedViewThroughConversions": 0,
        "attributedClickThroughConversions": 0,
        "pixelFinancialMetric": null,
        "postbackPartnerLogoURL": "http://partnerUrl/partnerName",
        "partnerUrl": "http://partnerUrl/partnerName"
    }
}
```

</div></div>

---

### Create Pixel Conversion

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/conversion/pixel/add</span>

<div class="container">
  <div class="child1">

Create a pixel type conversion.

\
**Request Body Schema: application/json**

Refer to the [Pixel Conversion resource properties](#pixel-conversion-resource-properties) table for request schema attributes. 

</div><div class="child2">

```json title="Request Sample"
{
    "name": "PixelConversion",
    "attributionId": "1",
    "customFields": [
        "field_1",
        "field_2",
        "field_3"
    ],
    "financialMetrics": "field_4",
    "piggybackData": {
        "url": "http://piggybackdata.com/url",
        "type": 1
    },
    "conversionSetting": {
        "conversionDuration": {
            "view": 10,
            "click": 10
        },
        "repeatConversion": {
            "count": 1,
            "frequency": 1,
            "unit": "Day"
        },
        "crossModelling": true
    }
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 3213,
        "name": "PixelConversion",
        "postbackPartnerName": null,
        "status": "Pending",
        "type": "Pixel",
        "created": 1687459918,
        "totalConversions": 0,
        "owId": 202017,
        "createdByUowId": 108658,
        "modifiedByUowId": 108658,
        "uuid": "a574ca49cc244c3bb3089491a11aae43",
        "attributedConversions": 0,
        "attributedViewThroughConversions": 0,
        "attributedClickThroughConversions": 0,
        "pixelFinancialMetric": "name",
        "postbackPartnerLogoURL": null,
        "pixelConversionScript": "<script src='https://pxl.stage.iqm.com/i/pixel/8f3165d0-b714-440e-bc1d-621127fa5fad?cv={CONVERSION_VALUE}' async></script>",
        "partnerUrl": null
    }
}
```

</div></div>

---

### Delete Conversion

<span class="badge badge--danger">DELETE</span> <span class="path-text">/api/v3/conversion/delete</span>

<div class="container">
  <div class="child1">

This API provides a soft delete functionality for conversions.

| Query Paramaters  |  |
| ----  | --- |
| `conversionIds` <br /><span class="type-text">string</span> | Comma separated conversion IDs to delete|

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": "Conversion has been deleted successfully!"
}
```

</div></div>

---

### Update Postback Conversion

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/conversion/postback/update</span>

<div class="container">
  <div class="child1">

Update the name of a postback type conversion.

| Request Schema  | |
| ---- | --- |
| `id` <br /><span class="type-text">string</span> | Postback Conversion ID |
| `name` <br /><span class="type-text">string</span> | New postback conversion name |

</div><div class="child2">

```json title="Request Sample"
{
    "id": "3114",
    "name": "Postback Conversion Update testing"
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 3114,
        "name": "Postback Conversion Update testing"
    }
}
```

</div></div>

---

### Update Pixel Conversion

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/conversion/pixel/update</span>

<div class="container">
  <div class="child1">

Update the name and piggyback data of a pixel type conversion.

| Request Schema  |  |
| ----  | --- |
| `id` <br /><span class="type-text">string</span>| Postback Conversion ID |
| `name` <br /><span class="type-text">string</span> | New postback conversion name |
| `piggybackData` <br /><span class="type-text">object</span> | contains `url` and `type` attributes
| `url` <br /><span class="type-text">string</span> | Additional URL that can be added to a pixel conversion to send conversion information to a third-party platform
| `type` <br /><span class="type-text">string</span> | [Piggyback type ID](#get-list-of-conversion-types)

</div><div class="child2">

```json title="Request Sample"
{
    "id": "3114",
    "name": "Pixel Conversion Update testing",
    "piggybackData": {
        "url": "update piggybackData",
        "type": "1"
    }
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "id": 3114,
        "name": "Pixel Conversion Update testing",
        "piggybackData": {
        "url": "update piggybackData",
        "type": 1
        }
    }
}
```

</div></div>

---

### Assign Conversion to a Campaign

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/conversion/assign-to/campaign</span>

<div class="container">
  <div class="child1">

Assign a conversion to a campaign while validating conversion IDs and campaign IDs.

| Query Parameters  |  |
| ----  | --- |
| `assignConversionToCampaign` <br /><span class="type-text">string</span> | Map containing details list of `campaignId`s which need to be added/removed

\
**Request Body Schema: application/json**

| Request Schema |  |
| ---- | --- |
| `conversionIdList` <br /><span class="type-text">array of integers</span> | Conversion IDs to assign |
| `addCampaignsList` <br /><span class="type-text">array of integers</span> | Campaign IDs to assign conversions to |
| `removeCampaignsList` <br /><span class="type-text">array of integers</span> | Campaign IDs to remove assigned conversions from |

</div><div class="child2">

```json title="Request Sample"
{
    "conversionIdList": [
        3925
    ],
    "addCampaignsList": [
        25396,
        256374,
        234567
    ],
    "removeCampaignsList": [
        256321,
        256432,
        256433
    ]
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "conversionIdsList": 3925,
        "validAddCampaignIdsList": [
            253396,
            256374
        ],
        "invalidAddCampaignIdsList": [
            234567
        ],
        "validRemoveCampaignIdsList": [
            256321,
            256432
        ],
        "invalidRemoveCampaignIdsList": [
            256433
        ]
    }
}
```

</div></div>

---

### Send Email for Pixel Integration

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/conversion/pixel/send-email</span>

<div class="container">
  <div class="child1">

Send an email containing information of integration pixel in html.

| Request Schema |  |
| ---- | --- |
| `conversionId` <br /><span class="type-text">string</span> | Conversion ID
| `recipients` <br /><span class="type-text">string</span> | Comma separated emails to send pixel integration to |
| `emailSubject` <br /><span class="type-text">string</span> | Subject of email | 
| `emailText` <br /><span class="type-text">string</span> | Text of email | 

</div><div class="child2">

```json title="Request Sample"
{
    "conversionId": "3114",
    "recipients": "username@gmail.com,anotherUser@yahoo.com",
    "emailSubject": "Integrate Pixel Conversion",
    "emailText": "Hello ${userName} has sent you a pixel code to integrate. Please follow the steps below to integrate the pixel code."
}
```

```json title="Response 200"
{
    "success": true,
    "data": "Pixel conversion e-mail sent successfully."
}
```

</div></div>

---

## Get More Conversion Details

This section covers the methods and endpoints for getting more details and static lists about conversions.

### Get List of Partner Types for Postback Conversions

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/postback/partner-type</span>

<div class="container">
  <div class="child1">

Get list of partner details for postback converisions like logo and name.

| Query Parameters |  |
| ---- | --- |
|`searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `partnerTypeIds` <br /><span class="type-text">string</span> | Filters by partner type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "Kochava",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/kochava.com",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "Singular",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/singular.net",
                "order": 2,
                "active": true
            },
            {
                "id": 3,
                "name": "Appsflyer",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/appsflyer.com",
                "order": 3,
                "active": true
            },
            {
                "id": 4,
                "name": "Adjust",
                "logoUrl": "https://d2v0lj9tfbnmhu.cloudfront.net/assets/static/partners/adjust.com",
                "order": 4,
                "active": true
            }
        ],
        "totalRecords": 4,
        "filteredRecords": 4
    }
}
```

</div></div>

---

### Get List of Pixel Conversion Advanced Setting Default Values

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/pixel/conversion-default-advanced-setting-data</span>

<div class="container">
  <div class="child1">

Get a list and details about default values of advanced settings for pixel based conversions.

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
        {
            "id": 1,
            "name": "post_click_interval",
            "displayName": "Post Click Interval",
            "value": "15",
            "active": true
        },
        {
            "id": 2,
            "name": "post_view_interval",
            "displayName": "Post View Interval",
            "value": "28",
            "active": true
        },
        {
            "id": 3,
            "name": "cross_device",
            "displayName": "Cross Device",
            "value": "true",
            "active": true
        }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

</div></div>

---

### Get List of Conversion Types

<a id="conversionType"></a>

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/conversion-type</span>

<div class="container">
  <div class="child1">

Get a list and details of conversion types.

| Query Parameters |  |
| ----  | --- |
|`searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `conversionTypeIds` <br /><span class="type-text">string</span> | Filters by conversion type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "pixel",
                "displayName": "Pixel",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "postback",
                "displayName": "Postback",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

</div></div>

---

### Get List of Conversion Status

<a id="conversionStatus"></a>

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/conversion-status</span>

<div class="container">
  <div class="child1">

Get a list of conversion status.

| Query Parameters |  |
| ---- | --- |
|`searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `statusIds` <br /><span class="type-text">string</span> | Filters by status type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "active",
                "displayName": "Active",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "pending",
                "displayName": "Pending",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

</div></div>

---

### Get List of Conversion Piggyback Types

<a id="piggybackType"></a>

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/conversion-piggyback-type</span>

<div class="container">
  <div class="child1">

Get a list of conversion piggyback types.


| Query Parameters | Description |
| ---- | --- |
|`searchField` <br /><span class="type-text">string</span> | Search results by keyword |
| `piggybackTypeIds` <br /><span class="type-text">string</span> | Filters by piggyback type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "image_pixel",
                "displayName": "Image Pixel",
                "order": 1,
                "active": true
            },
            {
                "id": 2,
                "name": "javascript_pixel",
                "displayName": "Javascript Pixel",
                "order": 2,
                "active": true
            }
        ],
        "totalRecords": 2,
        "filteredRecords": 2
    }
}
```

</div></div>

---

### Get List of Conversion Attribute Types

<a id="attributionTypes"></a>

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v3/conversion/static/conversion-attribution-type</span>

<div class="container">
  <div class="child1">

Get a list of conversion attribute types.

| Query Parameters  |  |
| ----| --- |
|`searchField` <br /><span class="type-text">string</span>| Search results by keyword |
| `attributionTypeIds` <br /><span class="type-text">string</span> | Filters by attribution type IDs |

</div><div class="child2">

```json title="Response 200"
{
    "success": true,
    "data": {
        "data": [
            {
                "id": 1,
                "name": "hybrid",
                "displayName": "Hybrid",
                "order": 1,
                "description": "Hybrid attribution combines both click-based and view-based methods to assign credit for a conversion either to an ad that was last clicked or to an ad that was last viewed.",
                "active": true
            },
            {
                "id": 3,
                "name": "view_based",
                "displayName": "View Based",
                "order": 2,
                "description": "View-based attribution gives credit to an ad that a user saw, but did not necessarily interact with, before making a conversion.",
                "active": true
            },
            {
                "id": 2,
                "name": "click_based",
                "displayName": "Click Based",
                "order": 3,
                "description": "Click-based attribution assigns credit for a conversion to the last ad that a user clicked on before making a purchase or taking an action.",
                "active": true
            }
        ],
        "totalRecords": 3,
        "filteredRecords": 3
    }
}
```

</div></div>

---