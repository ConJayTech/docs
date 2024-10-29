# Campaign API

This page will cover the common endpoints and methods for managing campaigns in IQM's rest API.

Refer to the quickstart guide for instructions on [how to start a new campaign](/Upload-Creative-and-Create-a-Campaign-API-Quickstart-Guide.md). 

## Authorization

Use the following header parameters for all requests:

<div class="container">
  <div class="child3">

| Headers  | Description |
| ----  | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token <br />See [Authentication Guide](/docs/quickstart-guides/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

## Get Campaign Details

<span class="badge badge--primary">GET</span> <span class="path-text">/api/v2/cmp/campaign/{campaignId}</span>

<div class="container">
  <div class="child1">

Get a campaign's basic details and targeting details by ID.

| Path Parameters |  |
| ---- | --- |
| <span class="code-text">campaignId</span> <br /><span class="type-text">integer</span> | Campaign's unique ID |


| Query Parameters |  |
| ---- | --- |
| <span class="code-text">isSpentRequired</span> <br /><span class="type-text">boolean</span> | Flag to get the campaign spent <br />Default: <span class="code-text">false</span>


| Attributes |  |
|---|---|
| `id` <br /><span class="type-text">integer</span> | Campaign ID |
| `campaignName` <br /><span class="type-text">string</span> | Campaign Name |
| `advertiserDomain` <br /><span class="type-text">string</span> | Campaign Advertiser Domain |
| `creativeType` <br /><span class="type-text">integer</span> | Creative type ID |
| `totalBudgetPacing` <br /><span class="type-text">boolean</span> | False indicates off true indicates on |
| `budgetDay` <br /><span class="type-text">integer</span> | Daily budget of campaign |
| `budgetTotal` <br /><span class="type-text">integer</span> | Total budget for campign |
| `maxBid` <br /><span class="type-text">integer</span> | Max bid of budget for serving |
| `status` <br /><span class="type-text">string</span> | Status of campaign |
| `dspMargin` <br /><span class="type-text">integer</span> | Campaign DSP Margin |
| `platformMargin` <br /><span class="type-text">integer</span> | Campaign platform margin |
| `userDealMargin` <br /><span class="type-text">integer</span> | Campaign user deal margin |
| `spentScale` <br /><span class="type-text">boolean</span> | Spent scale for campaign |
| `conversionType` <br /><span class="type-text">string</span> | Conversion type of campaign |
| `spent` <br /><span class="type-text">integer</span> | Campaign spent |
| `bidOptimization` <br /><span class="type-text">integer</span> | Bid optimization true/false |
| `bidPacing` <br /><span class="type-text">boolean</span> | Bid pacing on/ off |
| `impressionCapping` <br /><span class="type-text">integer</span> | Maximum impressions in one inventory |
| `exchanges` <br /><span class="type-text">string</span> | Comma separated exchange IDs |
| `stateIds` <br /><span class="type-text">string</span> | Comma separated state IDs |
| `countryId` <br /><span class="type-text">integer</span> | Country ID |
| `locationDetails` <br /><span class="type-text">json</span> | Location by uploaded file with targeting type |
| `campaignIabCategoryIds` <br /><span class="type-text">string</span> | Comma separated campaign iab categories |
| `rejectionReason` <br /><span class="type-text">string</span> | Reason of rejecting campaign |
| `creativesPlacementMapping` <br /><span class="type-text">json</span> | Ad placement mapping with creatives (present in case of audio and video campaigns) |
| `organizationName` <br /><span class="type-text">string</span> | Organization name |
| `userName` <br /><span class="type-text">string</span> | Name of user |
| `userEmail` <br /><span class="type-text">string</span> | Email of user |
| `conversionIds` <br /><span class="type-text">string</span> | Comma separated conversions IDs |

</div> <div class="child2">


```json title="Response 200"
{
    "statusCode": 200,
    "responseObject": {
        "owId": 203578,
        "parentOrganizationName": "Signup testing 1",
        "id": 537599,
        "uowId": 188494,
        "campaignName": "TestCampaign",
        "advertiserDomain": "https://iqm.com",
        "creativeType": 11,
        "campaignType": 1,
        "totalBudgetPacing": true,
        "isTvAd": false,
        "budgetDay": 1199.08,
        "budgetTotal": 50000.0,
        "maxBid": 15.0,
        "timezone": 29,
        "startTime": 1726518001,
        "endTime": 1727668800,
        "status": "pending",
        "dspMargin": 0,
        "platformMargin": 0,
        "userDealMargin": 0,
        "spentScale": false,
        "creativeIds": "676384",
        "conversionType": "None",
        "bidOptimization": true,
        "bidPacing": true,
        "isBidShading": false,
        "impressionCapping": 0,
        "maxDayImpressions": 0,
        "maxDayClicks": 0,
        "maxDayConversions": 0,
        "totalImpressions": 0,
        "totalClicks": 0,
        "totalConversions": 0,
        "deviceType": "13,15,11,12",
        "trafficType": "11,12",
        "exchanges": "",
        "isLocationWithOrFilter": true,
        "countryId": "30100001",
        "locationDetails": {},
        "isCampaignFromNewPlatform": true,
        "organizationName": "User's Org",
        "userEmail": "User@iqm.com",
        "userName": "User",
        "conversionTypeId": 0,
        "isUnapprovedAudienceTargeted": false,
        "isAllAudienceUnapproved": false,
        "createDate": 1726517360,
        "ioId": 15844,
        "ioName": "Test2",
        "prebidAudienceSegmentIdList": [],
        "campaignTypeId": 1,
        "budgetTypeId": 1,
        "isAdvanceAudioVideoTargeted": false,
        "isEstimatorAvailable": true,
        "isEditAccess": true,
        "isMarginSet": false,
        "isApprovalAccess": false,
        "isParentInvoiceTemplateSet": true
    }
}
```

</div></div>

---

### More Campaign Details

Other details can be fetched with a simple `GET` operation and filtered by various query parameters with the following endpoints:

| Method | Endpoint | Description |
| ---- | ---- | --- |
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v2/cmp/campaigns/data</span> | Returns list of campaigns based on set of filters and `conversionId` query parameter. See documentation [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/Getcampaigndata).
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v2/cmp/campaigns/list</span> | Returns a paginated list of campaigns with their basic details. See query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/GetCampaignList).
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v2/cmp/campaign/budgetInfo</span> | Get campaign budget info and graph details, see query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/CampaignBudgetInfo). 
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v2/cmp/campaigngroup/campaign/list</span> | Get the list of existing campaign groups wiht associated campaigns (basic details), see query parameters [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/Campaignlistbycampaigngroup). 
| <span class="badge badge--primary">GET</span> | <span class="path-text">/api/v2/cmp/campaign/start</span> | Get campaign start date

<div class="container">
  <div class="child1"></div>

  <div class="child2"></div>

```json title="Response 200 Sample (list of campaigns)"
{
    "statusCode": 200,
    "recordsTotal": 2,
    "pageNumber": 1,
    "pageSize": 10,
    "draw": 0,
    "recordsFiltered": 2,
    "data": [
        {
            "id": "537599",
            "name": "TestCampaign",
            "status": "pending",
            "owId": 203578,
            "uowId": 188494,
            "userEmail": "user5@iqm.com",
            "advertiser_email": null,
            "advertiser_id": 0,
            "campaign_type": "CPM",
            "creative_type": "Image",
            "dsp_id": 0,
            "start_date": 1726518001,
            "end_date": 1727668800,
            "creative_type_id": 11,
            "total_budget": 50000.0
        },
        {
            "id": "537123",
            "name": "Test1",
            "status": "pending",
            "owId": 203578,
            "uowId": 188494,
            "userEmail": "user5@iqm.com",
            "advertiser_email": null,
            "advertiser_id": 0,
            "campaign_type": "CPM",
            "creative_type": "Image",
            "dsp_id": 0,
            "start_date": 1727755200,
            "end_date": 1730347200,
            "creative_type_id": 11,
            "total_budget": 9900.0
        }
    ]
}
```

</div></div>

---

## Update Campaign

Update various aspects of a campaign.

### Change Campaign Name

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v3/cmp/campaign/update-name/{campaignId}</span>

<div class="container">
  <div class="child1">

Change the name of a campaign.

| Path Parameters |  |
| ---- | --- |
| `campaignId` <br /><span class="type-text">integer</span> | Campaign ID |


| Request Schema |  |
| ---- | --- |
| `campaignName` <br /><span class="type-text">string</span> | New name for campaign

</div>
<div class="child2">

```json title="Request Sample"
{
    "campaignName": "New Campaign Name"
}
```

```json title="Respons 200"
{
    "success": true,
    "data": {
        "message": "campaignName updated successfully"
    }
}
```

</div></div>

---

### Change Campaign End Date

<span class="badge badge--warning">PUT</span> <span class="path-text">/api/v2/cmp/campaigns/update-end-date</span>

<div class="container">
  <div class="child1">

Change the end date of multiple campaigns.

| Request Schema  |  |
| ----  | --- |
| `endDate` <br /><span class="type-text">integer</span> | Unix timestamp of desired end date |
| `campaignIds` <br /><span class="type-text">integer</span> | IDs of campaigns to change end date |

</div>
<div class="child2">


```json title="Request Sample"
{
    "endDate": 1632132540,
    "campaignIds": 192476
}
```


```json title="Response 200"
{
    "statusCode": 200,
    "responseObject": {
        "status": true
    }
}
```

</div></div>

---

### Change Campaign Budget

<span class="badge badge--warning">PUT</span> <span class="path-text">/api/v2/cmp/campaigns/update_budget</span>

<div class="container">
  <div class="child1">

Update the total budget, daily budget, and max bid of multiple campaigns.


| Request Schema  | Description |
| ----  | --- |
| `campaignIds` <br /><span class="type-text">string</span> | Comma separated campaign IDs |
| `maxBid` | integer | Max bid of campaign
| `totalBudget` <br /><span class="type-text">integer</span> | Total budget of campaign
| `dailyBudget` <br /><span class="type-text">integer</span>| Daily Budget of campaign
| `totalBudgetUpdateType` <br /><span class="type-text">string</span> | Used in the case of a total budget update. There are three possibilities for this parameter. <br /><span class="value-text">change</span>: Replace total budget with given value.<br /><span class="value-text">addition</span>: Add budget to the current total budget.<br /><span class="value-text">distribution</span>: Distribute given total budget in selected campaigns equally.<br />Default value: <span class="value-text">change</span>

</div>
<div class="child2">


```json title="Request Sample"
{
    "totalBudgetUpdateType": "change",
    "campaignIds": 192476,
    "dailyBudget": 1001
}
```


```json title="Response 200"
{
    "statusCode": 200,
    "responseObject": {
        "reason": [
            {
                "errorMessage": "max bid cannot be less than minimum bid 3.0",
                "id": "4120",
                "campaignName": "test cust aud dev"
            },
            {
                "errorMessage": "For given campaign_type max bid cannot be less than 1.00 or greater than 1000.",
                "id": "4121",
                "campaignName": "Vast copy"
            }
        ],
        "modified_data": [
            {
                "campaingId": 1,
                "maxBid": 34,
                "totalBudget": 35,
                "dailyBudget": 36,
                "endDate": 12312312312
            }
        ],
        "status": false
    }
}
```

</div></div>

---

### Update Campaign by Field

<span class="badge badge--info">PATCH</span> <span class="path-text">/api/v2/cmp/campaign/{campaignId}</span>

Any campaign property can be updated. 

\
**Request Body Schema: application/json**

Refer to [resource properties](#resource-properties). Include wichever fields need updating in the requst body detail.

If campaign is in `DRAFT` status, this API will automatically update status from `DRAFT` to `PENDING`. In all other cases status will not be updated.

See complete documentation [here](https://api.iqm.com/docs?path=tag/Campaign-API/operation/editCampaignPatch).

---

## More Campaign Management

### Get Campaign Count by Status

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/cmp/campaigns/count</span>

<div class="container">
  <div class="child1">

This API returns a count of campaigns for each status type.

\
**Request Body Schema: application/json**


| Request Schema |  |
| ---- | --- |
| `owIds` <br /><span class="type-text">string</span> | Comma separated Organization Workspace IDs, returns campaign counts (supported: <span class="value-text">all</span>)
| `ioIds`<br /><span class="type-text">string</span> | Comma separated Insertion Order IDs, returns campaign counts (with <span class="value-text">owIds</span> = <span class="value-text">all</span>)
| `campaignTypeIds` <br /><span class="type-text">string</span> | Comma separated, returns campaign counts for given Campaign Type (<span class="value-text">ioIds</span> also required)
| `campaignExpiredAfterEpoch` <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) expiration
| `searchField` <br /><span class="type-text">string</span> | Returns campaign counts for field matched campaign ID or Name

</div><div class="child2">

```json title="Request Sample"
{
    "owIds": "all",
    "ioIds": "1,2,3"
}
```

```json title="Response 200"
{
    "success": true,
    "data": [
        {
            "order": 0,
            "status_key": "running",
            "status_label": "Running",
            "status_count": 10
        },
        {
            "order": 1,
            "status_key": "pending",
            "status_label": "Pending",
            "status_count": 11
        },
        {
            "order": 2,
            "status_key": "paused",
            "status_label": "Paused",
            "status_count": 22
        },
        {
            "order": 5,
            "status_key": "deleted",
            "status_label": "Deleted",
            "status_count": 33
        },
        {
            "order": 6,
            "status_key": "expired",
            "status_label": "Expired",
            "status_count": 44
        },
        {
            "order": 3,
            "status_key": "draft",
            "status_label": "Draft",
            "status_count": 55
        },
        {
            "order": 7,
            "status_key": "rejected",
            "status_label": "Rejected",
            "status_count": 66
        },
        {
            "order": 8,
            "status_key": "all",
            "status_label": "ALL",
            "status_count": 77
        }
    ]
}
```

</div></div>

---

## Get Insertion Order Details

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/cmp/io/basic/list</span>

<div class="container">
  <div class="child1">

Insertion Orders specify the parameters or details of an advertising campaign.

The campaign API allows the user to retrieve Insertion Order (IO) details.

### Resource Properties

| Attributes  |  |
|---|---|
| `ioId` <br /><span class="type-text">integer</span> | Insertion Order ID|
| `ioName` <br /><span class="type-text">string</span> | Insertion Order name|
| `owId` | integer | Organization|
| `createdByUowId` <br /><span class="type-text">integer</span> | User Organization Worskpace ID associated with IO creation|
| `modifiedByUowId` <br /><span class="type-text">integer</span> | User Organization Worskpace ID associated with IO modification|
| `ioStartTime` <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) of IO start time|
| `ioEndTime` <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) of IO end time|
| `ioTotalBudget` <br /><span class="type-text">integer</span> | Budget of IO|
| `ioTimeZoneId` <br /><span class="type-text">integer</span> | Timezone ID|
| `isAutoSumIoTotalBudget` <br /><span class="type-text">boolean</span> | True: Keep IO budget same as total budget of all included campaigns|
| `ioBudgetDistributionMethodId` <br /><span class="type-text">integer</span> | Budget Distribution Method ID|
| `ioBudgetTypeId` <br /><span class="type-text">integer</span> | Budget type ID |
| `ioTotalImpression` <br /><span class="type-text">integer</span> | Number of impressions |
| `ioStatusID` <br /><span class="type-text">integer</span> | Status ID|
| `ioNextPerformanceCheck` <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds) of next performance check|
| `ioLastPriorityShift` <br /><span class="type-text">integer</span> | Unix epoch timestamp (in milliseconds)|
| `ioCurrentPriority` <br /><span class="type-text">integer</span> | Current IO campaigns priority|
| `isIoPrioritise` <br /><span class="type-text">integer</span> | All child campaigns will be considered with or withot priority|


| Request Schema  | Description |
|---|---|
| `owIdList` <br /><span class="type-text">array of integers</span> | List of <span class="value-text">owIds</span> for which IO details required. |
| `ioIdList` <br /><span class="type-text">array of integers</span> | List of <span class="value-text">ioIds</span> for which IO details required . |
| `ioBudgetTypeIdsList` <br /><span class="type-text">array of integers</span> | List of <span class="value-text">ioBudgetTypeIds</span> for which IO details are required . |
| `ioStatusIdsList` <br /><span class="type-text">array of integers</span> | List of <span class="value-text">ioStatusIds</span> for which IO details are required . |
| `ids` <br /><span class="type-text">array of integers</span> | List of <span class="value-text">ioIds</span> for which IO details required at the top . |
| `isAllOWIds` <br /><span class="type-text">boolean</span> | Flag for consider all the owId for IO details (<span class="value-text">true</span> = consider all the owId for which user has access, <span class="value-text">false</span> = consider only provided owIds). |
| `pageNo` <br /><span class="type-text">integer</span> | page number for required data. |
| `noOfEntries` <br /><span class="type-text">integer</span> | Number of records per page. |
| `searchField` <br /><span class="type-text">string</span> | Name of search field (supported values: <span class="value-text">name</span> and <span class="value-text">id</span>). |
| `sortBy` <br /><span class="type-text">string</span> | Comma separated names of the sorting field. Sorts by ascending (<span class="value-text">+</span>) or descending (<span class="value-text">-</span>) <br />Supported values: <span class="value-text">ioId</span>, <span class="value-text">ioName</span>, <span class="value-text">ioStartTime</span>, <span class="value-text">ioEndTime</span>, <span class="value-text">ioTotalBudget</span> |
| `offset` <br /><span class="type-text">integer</span> | Offset is alternative of page number. Offset is number of records to be skipped |

</div><div class="child2">

```json title="Request Sample"
{
    "pageNo": 1,
    "noOfEntries": 20,
    "ioIdList": [
        12,
        34
    ],
    "ids": [
        2
    ],
    "searchField": "io name",
    "sortBy": "-ioId",
    "ioBudgetTypeIdsList": [
        2
    ],
    "ioStatusIdsList": [
        1,
        2,
        3
    ],
    "offset": 1
}
```

```json title="Response Sample"
{
    "success": true,
    "data": {
        "totalRecords": 3,
        "ioBasicDetailsList": [
            {
                "ioId": 1630,
                "ioName": "phase 2 test",
                "ioStartTime": 1792179297123,
                "ioEndTime": 1793179297123,
                "ioTimeZoneId": 29,
                "ioTotalBudget": 0,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioStatusId": 1,
                "ioTotalImpressions": 0,
                "isBudgetAutoSum": true
            },
            {
                "ioId": 741,
                "ioName": "testdatasync",
                "ioStartTime": 1692860161542,
                "ioEndTime": 1696226400000,
                "ioTimeZoneId": 21,
                "ioTotalBudget": 100001,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioTotalImpressions": 0,
                "ioStatusId": 1,
                "isBudgetAutoSum": true
            },
            {
                "ioId": 738,
                "ioName": "IO Bharat",
                "ioStartTime": 1693251767612,
                "ioEndTime": 1693353600000,
                "ioTimeZoneId": 29,
                "ioTotalBudget": 1100,
                "ioBudgetDistributionMethodId": 1,
                "ioBudgetTypeId": 2,
                "ioStatusId": 2,
                "ioTotalImpressions": 0,
                "isBudgetAutoSum": true
            }
        ],
        "filteredRecords": 3
    }
}
```

</div></div>

---

### Get List of Campaign Details Grouped by Insertion Order ID

<span class="badge badge--success">POST</span> <span class="path-text"> /api/v3/cmp/io/campaign/basic/list</span>

<div class="container">
  <div class="child1">

Get a list of campaign details grouped by Insertion Order ID (<span class="value-text">ioId</span>) with supported filters.

Optional parameters to filter/sort results

| Request Schema|  |
| ----  | --- |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `noOfEntries` <br /><span class="type-text">integer</span> | Maximum number of entries returned, default: `20` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`) Supported values: `ioId`, `ioName`, `ioStartTime`, `ioEndTime`, `ioTotalBudget`, `campaignId`, `isRecordTargeted` |
| `searchField` <br /><span class="type-text">string</span> | Search the result by keyword |
| `ioIdsList` <br /><span class="type-text">array of integers</span> | Filter by Insertion Order IDs. Records matching provided IDs will be returned first, before others |
| `campaignTypeIds` <br /><span class="type-text">array of integers</span> | Returns selected campaign type IDs e.g. 'advanced campaign' or 'PG campaign', 'records matching' |
| `ids` <br /><span class="type-text">array of integers</span> | Filters for Campaign IDs |
| `ioIds` <br /><span class="type-text">array of integers</span> | Filters for Insertion Order IDs |
| `status` <br /><span class="type-text">array of strings</span> | Filters for types of Campaign Status |
| `creativeTypeIds` <br /><span class="type-text">array of integers</span> | Filters for Creative Type IDs |
| `ioBudgetTypeIds` <br /><span class="type-text">array of integers</span> | Filters for Budget Type IDs |
| `owIds` <br /><span class="type-text">array of integers</span> | Filters for customer Organization Workspace IDs |
| `offset` <br /><span class="type-text">integer</span> | Offset is alternative of page number. Offset is number of records to be skipped |

</div><div class="child2">

```json title="Request Sample"
{
    "creativeTypeIds": [
        11,
        14
    ],
    "owIds": [
        201427
    ],
    "ids": [
        321743
    ],
    "searchField": "default",
    "pageNo": 1,
    "noOfEntries": 20,
    "sortBy": "+ioId",
    "status": [
        "running",
        "pending"
    ],
    "ioIds": [
        363
    ],
    "campaignTypeIds": [
        1
    ],
    "ioBudgetTypeIds": [
        1
    ],
    "offset": 1
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 272,
        "ioCampaignsList": [
        {
            "ioId": 4091,
            "ioName": "Future start date",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1700726026913,
            "lastModified": 1700726065000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 450700,
                "campaignId": 450700,
                "name": "future date campaign",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1732690800,
                "endTime": 1767164400,
                "createdAt": 1701078853,
                "modifiedAt": 1707091200000,
                "owId": 201353,
                "timezoneId": 21,
                "targetedAudienceIds": [
                1010324,
                1054144,
                1060433,
                1063317
                ]
            }
            ]
        },
        {
            "ioId": 3979,
            "ioName": "Test IO for campaign popup",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1700476689502,
            "lastModified": 1701248369000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 451031,
                "campaignId": 451031,
                "name": "no end date",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1701249000,
                "createdAt": 1701248369,
                "modifiedAt": 1707091200000,
                "owId": 201353,
                "timezoneId": 21,
                "targetedAudienceIds": [
                    1010324,
                    1054144,
                    1060433,
                    1063317
                ]
            }
            ]
        },
        {
            "ioId": 225,
            "ioName": "Beatrice King",
            "ioBudgetTypeId": 1,
            "ioStatusId": 2,
            "created": 1677925263000,
            "lastModified": 1700888400000,
            "owId": 201353,
            "uowId": 112037,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 450277,
                "campaignId": 450277,
                "name": "prod-campaign-20935 copy",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1700819565,
                "endTime": 1709182800,
                "createdAt": 1700818673,
                "modifiedAt": 1707177600000,
                "owId": 201353,
                "timezoneId": 29,
                "targetedAudienceIds": null
            }
            ]
        },
        {
            "ioId": 48,
            "ioName": "UAW",
            "ioBudgetTypeId": 1,
            "ioStatusId": 1,
            "created": 1665500839000,
            "lastModified": 1704704810000,
            "owId": 201353,
            "uowId": 8776,
            "campaignCount": 1,
            "campaigns": [
            {
                "id": 20731,
                "campaignId": 20731,
                "name": "prod-campaign-20731",
                "creativeTypeId": 11,
                "campaignTypeId": 1,
                "status": "running",
                "startTime": 1676700273,
                "endTime": 1711857600,
                "createdAt": 1676700278,
                "modifiedAt": 1707177600000,
                "owId": 201353,
                "timezoneId": 29,
                "targetedAudienceIds": null
            }
            ]
        }
        ],
        "filteredRecords": 4
    }
}
```

</div></div>

---

### Get List of Campaigns and Report Details by Insertion ID

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/cmp/io/campaigns/list</span>

<div class="container">
  <div class="child1">

Get a list of campaigns with detailed report by Insertion Order ID (`ioId`) with supported filters.

Optional parameters to filter/sort results

| Request Schema  |  |
| ----  | --- |
| `pageNo` <br /><span class="type-text">integer</span> | Page number for the data, default: `1` |
| `noOfEntries` <br /><span class="type-text">integer</span> | The maximum number of returned results per page, default: `20` |
| `sortBy` <br /><span class="type-text">string</span> | Sorts by ascending (`+`) or descending (`-`). Supported values: `clicks`, `impressions`, `bidImpressions`, `startCount`, `firstCount`, `midCount`, `thirdCount`, `completeCount`, `dataCost`, `spent`, `mediaSpent`, `winRate`, `VCR`, `eCPC`, `eCPM`, `eCPI`, `CTR`, `CVR`, `eCPCV`, `eCPV`, `budgetDay`, `budgetTotal`, `campaignId`, `campaignName`, `maxBid`, `startTime`, `endTime`, `campaignType`, `status`, `budgetDay`, `budgetTotal`, `reach`, `frequency`, `mappingDataCost`, `mappingSpent`, `percentageOfTotalSpent`, `organizationName`, `audioVideoViewed`, `campaignTimezone`, `pixalateViewAbility`, `ioName`, `ioId`, `targetImpression`, `creativesCount`, `pacingPercentage`, `dailyPacingPercentage`, `prebidCost`, `ioTotalImpressions`, `dailyImpressions`,`campaignPriority` ,`totalAttributedConversion`, `totalAttributedViewThroughConversion`,`totalAttributedClickThroughConversion`,`costPerAttributedConversion`,`totalAttributedConversionRate` |
| `searchField` <br /><span class="type-text">string</span> | Search the result by keyword |
| `ioIdsList` <br /><span class="type-text">array of integers</span> | Filter by Insertion Order IDs. Records matching provided IDs will be returned first, before others |
| `budgetTypeIdList` <br /><span class="type-text">array of integers</span> | Filters for selected Budget Type IDs e.g. "impression based" or "budget based". Records matching the provided IDs will be returned |
| `campaignIds` <br /><span class="type-text">array of integers</span> | Filters for selected Campaign IDs. Records matching the provided IDs will be returned first, before others |
| `timeZoneId` <br /><span class="type-text">integer</span> | Filters campaigns for specified Timezone ID |
| `campaignStatusList` <br /><span class="type-text">array of strings</span> | Filters campaigns by specified Campaign Status |
| `creativeTypeIds` <br /><span class="type-text">string</span> | Filters campaigns by specified Creative Type ID |
| `owIds` <br /><span class="type-text">string</span> | Filters campaigns by specified customer Organization Workspace ID |

</div>
<div class="child2">

```json title="Request Sample"
{
    "campaignStatusList": [
        "running"
    ],
    "timezoneId": 29,
    "owIds": "200425,201427",
    "ids": [
        1,
        2
    ],
    "ioIdsList": [
        1,
        2,
        38
    ],
    "budgetTypeIdList": [
        1
    ],
    "campaignIds": "1,2,3",
    "sortBy": "+campaignName",
    "creativeTypeIds": "14",
    "searchField": "campaign"
}
```


```json title="Response 200"
{
    "success": true,
    "data": {
        "totalRecords": 2,
        "filteredRecords": 2,
        "recordsTotal": {
            "clicks": 0,
            "totalCount": 1,
            "winRate": 0,
            "logoURL": null,
            "avatarURL": null,
            "budgetDay": 0,
            "budgetSpent": 0,
            "budgetTotal": 56.339999999999904,
            "dataCost": 0,
            "mediaBudget": 0,
            "owId": 0,
            "orgId": 0,
            "impressions": 0,
            "industry": 0,
            "mediaSpent": 0,
            "spent": 0,
            "workspaceSpent": 0,
            "platformSpent": 0,
            "customerSpent": 0,
            "platformEarning": 0,
            "workspaceEarning": 0,
            "organizationName": null,
            "companySize": 0,
            "workspaceName": null,
            "workspaceId": 0,
            "workspaceDomain": null,
            "workspaceOrganizationName": null,
            "bidImpressions": 0,
            "startCount": 0,
            "firstCount": 0,
            "midCount": 0,
            "thirdCount": 0,
            "completeCount": 0,
            "audioVideoActualBids": 0,
            "audioVideoActualImpressions": 0,
            "eCPC": 0,
            "eCPM": 0,
            "eCPI": 0,
            "eCPCV": 0,
            "eCPV": 0,
            "totalAttributedConversion": 0,
            "totalAttributedViewThroughConversion": 0,
            "totalAttributedClickThroughConversion": 0,
            "costPerAttributedConversion": 0,
            "totalAttributedConversionRate": 0,
            "reach": 0,
            "frequency": 0,
            "date": null,
            "campaignId": 0,
            "campaignName": null,
            "maxBid": 0,
            "startTime": 0,
            "endTime": 0,
            "campaignType": null,
            "status": null,
            "mappingDataCost": 0,
            "mappingSpent": 0,
            "campaignTimezone": null,
            "creativeType": null,
            "budgetPacing": false,
            "isCampaignFromNewPlatform": false,
            "percentageOfTotalSpent": 0,
            "uowId": 0,
            "audioVideoViewed": 0,
            "ioId": 0,
            "ioName": null,
            "ioTimezone": 0,
            "ioBudgetDistributionMethod": 0,
            "ioStartTime": 0,
            "ioEndTime": 0,
            "ioTotalBudget": 0,
            "isAutoSumIoTotalBudget": false,
            "ioBudgetTypeId": 0,
            "ioTotalImpressions": null,
            "pacingPercentage": null,
            "actualSpent": 0,
            "expectedSpent": 0,
            "campaignDuration": null,
            "remainingDuration": 0,
            "dailyPacingPercentage": null,
            "expectedDailySpent": 0,
            "actualDailySpent": 0,
            "ioStatusId": 0,
            "exchangeId": 0,
            "creativesCount": null,
            "exchangeName": null,
            "budgetTypeId": 0,
            "targetImpression": null,
            "dailyImpression": 0,
            "budgetTotalCombined": 100,
            "budgetDayCombined": 10,
            "campaignPriority": null,
            "ioTotalBudgetCombined": 1000,
            "CTR": 0,
            "VCR": 0,
            "CVR": 0
        },
        "recordsList": [
            {
                "clicks": 0,
                "totalCount": 0,
                "winRate": 0,
                "logoURL": null,
                "avatarURL": null,
                "budgetDay": 5,
                "budgetSpent": 0,
                "budgetTotal": 13,
                "dataCost": 0,
                "mediaBudget": 0,
                "owId": 201427,
                "orgId": 0,
                "impressions": 0,
                "industry": 0,
                "mediaSpent": 0,
                "spent": 0,
                "workspaceSpent": 0,
                "platformSpent": 0,
                "customerSpent": 0,
                "platformEarning": 0,
                "workspaceEarning": 0,
                "organizationName": "Organisation Name",
                "companySize": 0,
                "workspaceName": null,
                "workspaceId": 0,
                "workspaceDomain": null,
                "workspaceOrganizationName": null,
                "bidImpressions": 0,
                "startCount": 0,
                "firstCount": 0,
                "midCount": 0,
                "thirdCount": 0,
                "completeCount": 0,
                "audioVideoActualBids": 0,
                "audioVideoActualImpressions": 0,
                "eCPC": 0,
                "eCPM": 0,
                "eCPI": 0,
                "eCPCV": 0,
                "eCPV": 0,
                "totalAttributedConversion": 0,
                "totalAttributedViewThroughConversion": 0,
                "totalAttributedClickThroughConversion": 0,
                "costPerAttributedConversion": 0,
                "totalAttributedConversionRate": 0,
                "reach": 0,
                "frequency": 0,
                "date": null,
                "campaignId": 445615,
                "campaignName": "Campaign For Child",
                "maxBid": 4,
                "startTime": 1698445456,
                "endTime": 1698739200,
                "campaignType": "cpv",
                "status": "pending",
                "mappingDataCost": 0,
                "mappingSpent": 0,
                "campaignTimezone": "US/Alaska",
                "creativeType": "Video",
                "budgetPacing": true,
                "isCampaignFromNewPlatform": true,
                "percentageOfTotalSpent": 0,
                "uowId": 9480,
                "audioVideoViewed": 0,
                "ioId": 2991,
                "ioName": "Insertion Order For Donation",
                "ioTimezone": 420,
                "ioBudgetDistributionMethod": 0,
                "ioStartTime": 1698446340000,
                "ioEndTime": 1698739200000,
                "ioTotalBudget": 26415,
                "isAutoSumIoTotalBudget": true,
                "ioBudgetTypeId": 0,
                "ioTotalImpressions": null,
                "pacingPercentage": 12.31,
                "actualSpent": 123,
                "expectedSpent": 212,
                "campaignDuration": 5,
                "remainingDuration": 2,
                "dailyPacingPercentage": null,
                "expectedDailySpent": 123,
                "actualDailySpent": 0,
                "ioStatusId": 1,
                "exchangeId": 0,
                "creativesCount": 2,
                "exchangeName": null,
                "budgetTypeId": 1,
                "targetImpression": null,
                "dailyImpression": 0,
                "budgetTotalCombined": 100,
                "budgetDayCombined": 10,
                "campaignPriority": 1,
                "ioTotalBudgetCombined": 1000,
                "CTR": 0,
                "VCR": 0,
                "CVR": 0
            }
        ],
        "totalCount": 2
    }
}
```

</div></div>

---

## Insertion Order Management

Manage various aspects of an Insertion Order, use the following Header Parameters for each request:

<div class="container">
  <div class="child1">

| Header Parameters | Description |
| ---- | --- |
| `Authorization` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Authorization bearer token<br />See [Authentication Guide](/Authentication-Quickstart-Guide.md)|
| `X-IAA-HOST` <br /><span class="type-text">string</span> <span class="required-text">required</span> | Workspace URL |
| `X-IAA-OW-ID` <br /><span class="type-text">integer</span> <span class="required-text">required</span> | Organization Worskpace ID Header |

</div></div>

### Create an Insertion Order

<span class="badge badge--success">POST</span><span class="path-text">/api/v3/cmp/io/add</span>

<div class="container">
  <div class="child1">

Reference the [IO resource properties](#resource-properties) above for the value descriptions. Required values:

* `ioName`
* `ioStartTime`
* `ioEndTime`
* `ioTotalBudget` (for budget-based IO)
* `ioTimeZoneId`
* `isAutoSumIoTotalBudget`
* `ioBudgetTypeId`
* `ioStatusId` (for impression-based IO)
* `ioBudgetDistributionMethodId`

</div><div class="child2">

```json title="Request Sample (budget based IO)" 
{
    "ioName": "IO Name 1",
    "ioStartTime": 1690898148000,
    "ioEndTime": 1690898888000,
    "ioTotalBudget": 1000,
    "ioTimeZoneId": 29,
    "isAutoSumIoTotalBudget": true,
    "ioBudgetTypeId": 1,
    "ioBudgetDistributionMethodId": 1
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "ioId": 6,
        "ioName": "IO Name 1",
        "ioStartTime": 1690898148000,
        "ioEndTime": 1690898888000,
        "ioTotalBudget": 0,
        "ioTimeZoneId": 29,
        "ioBudgetTypeId": 1,
        "ioBudgetDistributionMethodId": 1,
        "isAutoSumIoTotalBudget": true,
        "ioTotalImpressions": null
    }
}
```

</div></div>

---

### Duplicate an Insertion Order

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/cmp/io/duplicate</span>

<div class="container">
  <div class="child1">

Duplicate a single IO, and all campaigns within that IO.

| Request Schema |  |
| ---- | --- |
| `ioExistingCampaignIds` <br /><span class="type-text">array of integers</span> | Campaign IDs within specified IO (`ioId`) |
| `ioId` <br /><span class="type-text">integer</span> | Specified IO to duplicate |
| `ioTimeZoneId` <br /><span class="type-text">integer</span> | Timezone ID |
| `ioEndTime` <br /><span class="type-text">integer</span> | Unix epoch of IO end time |
| `ioStartTime` <br /><span class="type-text">integer</span> | Unix epoch of IO start time |

</div><div class="child2">

```json title="Request Sample"
{
    "ioStartTime": 1698295604000,
    "ioEndTime": 1698258600000,
    "ioId": 223,
    "ioTimeZoneId": 105,
    "ioExistingCampaignIds": [
        12345,
        67890,
        21345
    ]
}
```

```json title="Response 200"
{
    "success": true,
    "data": {
        "duplicatedCampaignIds": [
        12345,
        54321
        ],
        "duplicatedIOId": 271
    }
}
```

</div></div>

---

### Delete an Insertion Order

<span class="badge badge--success">POST</span> <span class="path-text">/api/v3/cmp/io/delete</span>

<div class="container">
  <div class="child1">

Delete one or multiple IOs and all campaigns attached to them.


| Request Schema | Description |
| ---- | --- |
| `ioIdsList` <br /><span class="type-text">array of integers</span> | Insertion Order IDs |

</div><div class="child2">

```json title="Request Sample"
{
    "ioIdsList": [
        1,
        2,
        3
    ]
}
```

```json title="Response 200"
{
    "success": true,
    "data": "3 Insertion Orders deleted successfully"
}
```

</div></div>

---

### More Insertion Order Management

Update the details, end dates, and budgets of insertion orders with the following methods and endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| <span class="badge badge--info">PATCH</span> | <span class="path-text">/api/v3/cmp/io/{ioId}</span> | Update details of specified IO. <br />See IO [resource properties](#resource-properties-1) above for supported values
| <span class="badge badge--info">PATCH</span> | <span class="path-text">/api/v3/cmp/io/update-end-date</span> | Update the end date for a given list of IOs. <br />See [full documentation](https://api.iqm.com/docs?path=tag/Campaign-API/operation/updateIOEndDate)
| <span class="badge badge--info">PATCH</span> | <span class="path-text">/api/v3/cmp/io/update-budget</span> | Update the budget for a given list of IOs. <br />See [full documentation](https://api.iqm.com/docs?path=tag/Campaign-API/operation/updateIOBudgetByIOList)


<div class="container">
  <div class="child1">

| Path Parameters | Description |
| ----  | --- |
| `ioId` <br /><span class="type-text">integer</span> | Insertion Order ID |

</div><div class="child2">

```json title="Request Sample (update details)"
{
    "ioName": "IO Name 1",
    "ioStartTime": 1690898148000,
    "ioEndTime": 1690898888000,
    "ioTotalBudget": 1000,
    "ioTotalImpressions": 0,
    "ioTimeZoneId": 29,
    "ioBudgetTypeId": 1,
    "isAutoSumIoTotalBudget": true
}
```

```json title="Response 200 (update details)"
{
    "success": true,
    "data": "IO Name 1 saved successfully."
}
```

```json title="Request Sample (update budget)"
{
    "ioIdsList": [
        1,
        2,
        3
    ],
    "budget": 169089.909,
    "budgetUpdateType": "add"
}
```

```json title="Response 200 (update budget)"
{
    "success": true,
    "data": "Budget updated successfully"
}
```

</div></div>