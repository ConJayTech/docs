# Planner API

## Authorization

Use the following header parameters for all requests:

| Property | Type | Description |
| ---- | ---- | --- |
| `Authorization` | string [required] | Authorization bearer token <br>See [Authentication Guide](/Authentication-Quickstart-Guide.md) |
| `X-IAA-OW-ID` | integer [required] | Organization Worskpace ID Header |

## Get Plan by ID

Get a plan by its ID with the following endpoint:

* `GET` /api/v3/plan/{id}

\
**Path Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `id` | integer | Plan ID |

\
Response 200

```json
{    
    "success": true,    
    "data": {        
        "id": 12,        
        "owId": 201427,        
        "name": "Edit",        
        "type": "FORECAST",        
        "locations": {            
            "excluded": {},            
            "hasError": false,            
            "included": {                
                "customAreas": [
                    {                        
                        "cid": "US",                        
                        "sid": "WY",                        
                        "type": "circle",                        
                        "unit": "mile",                        
                        "radius": 0.5,                        
                        "address": "Alpine, WY 83128, USA",
                        "latitude": 43.063812220427245,
                        "longitude": -110.69143936718751                    
                    }                
                ]            
            },            
            "countryId": 30100001,            
            "filterStore": {                
                "country": {                    
                    "label": "United States",                    
                    "value": 30100001,                    
                    "shortName": "US"                
                }            
            }        
        },        
        "demographics": {            
            "gender": [                
                {                    
                    "label": "Male",                    
                    "value": 10200001                
                }            
            ]        
        },        
        "inventoryGroups": [...],        
        "audienceSegments": [...],        
        "deviceTypes": [...],        
        "marketInfo": {...},        
        "startDate": null,        
        "endDate": null,        
        "uniqueReach": 0,        
        "budget": 0,        
        "bidLandScapes": null,        
        "campaigns": null,        
        "vendorInfo": null,        
        "advertisingBilling
        ": null,        
        "uniqueMarketShare": 0,        
        "updated_at": "2024-01-11 17:25:43.956041"    
    }
}
```

## Get Plan by Organization Worskpace ID

Get plan details by OW ID with the following endpoint:

* `POST` /api/v3/plan/view

\
**Query Parameters**

| Property | Type | Description |
| ---- | ---- | --- |
| `name` | string | Name of plan to search for |
| `sortBy` | string | Sorts by ascending (`+`) or descending (`-`), default: `-updated_at` |

\
**Request Body Shcema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `owId` | integer | Organization Workspace ID |

\
Response 200

```json
{
    "success": true,
    "data": [
        {
            "id": 70,
            "name": "post",
            "status": "Active",
            "type": "FORECAST",
            "marketInfo": {
                "reach": 11250000,
                "cpmEnd": 60,
                "cpmStart": 5,
                "impressions": 5738288,
                "marketShare": 3.3754634983948186,
                "ctvHouseholds": 63036000
            },
            "uniqueReach": 0,
            "updatedAt": "2024-02-22 15:51:54.508483"
        },
        {
            "id": 72,
            "name": "post",
            "status": "Active",
            "type": "PROPOSAL",
            "marketInfo": {
                "reach": 11250000,
                "cpmEnd": 60,
                "cpmStart": 5,
                "impressions": 5738288,
                "marketShare": 3.3754634983948186,
                "ctvHouseholds": 63036000
            },
            "uniqueReach": 11250000,
            "updatedAt": "2024-03-01 14:42:21.590361"
        }
    ]
}
```

## Add a Plan

Create a new plan based on the provided forecast parameters with the following endpoint:

* `POST` /api/v3/plan/add

\
**Request Body Shcema: application/json**

| Property | Type | Description |
| ---- | ---- | --- |
| `name` | string | Name of plan |
| `locations` | object | Location data |
| `countryId` | integer | [`location` property] Country ID |
| `included` | object | [`location` property] Locations to include |
| `excluded` | object | [`location` property] Locations to exclude |
| `filterStore` | object | [`location` property]
| `counties` | | [`included` / `excluded` / `filterStore` property]
| `cities` | | [`included` / `excluded` / `filterStore` property]
| `stateSenates` | | [`included` / `excluded` / `filterStore` property]
| `stateHouses` | | [`included` / `excluded` / `filterStore` property]
| `congressionalDistricts` || [`included` / `excluded` / `filterStore` property]
| `zipCodes` | array of strings | [`included` / `excluded` / `filterStore` property]
| `customAreas` || [`included` / `excluded` / `filterStore` property]
| `locationIds` | array of integers | [`included` / `excluded` / `filterStore` property] |
| `states` || [`included` / `excluded` / `filterStore` property]




<table> 
    <tr>
        <td><code>name</code></td>
        <td>string</td>
        <td>Name for pixel conversion</td>
    </tr>
     <tr>
        <td><code>name</code></td>
        <td>string</td>
        <td>Name for pixel conversion</td>
    </tr>
</table>
<details><summary></summary>
<table>
   <tr>
        <td><code>childProperty</code></td>
        <td>string</td>
        <td>Attribution type ID</td>
    </tr></table></details>
<table>
    <tr>
        <td><code>attributionId</code></td>
        <td>string</td>
        <td>Attribution type ID</td>
    </tr>
    <tr>
        <td><code>attributionId</code></td>
        <td>string</td>
        <td>Attribution type ID</td>
    </tr>
</table>



\
Request Sample

```json
{    
    "name": "delete",    
    "locations": {        
        "countryId": 30100001,        
        "included": {            
            "counties": [],            
            "cities": [],            
            "stateSenates": [],            
            "stateHouses": [],            
            "congressionalDistricts": [],            
            "zipCodes": [
                "80005"
            ],            
            "customAreas": [],            
            "locationIds": [],            
            "states": []        
        },        
        "excluded": {            
            "counties": [],            
            "cities": [],            
            "stateSenates": [],            
            "stateHouses": [],            
            "congressionalDistricts": [],            
            "zipCodes": [],            
            "customAreas": [],            
            "locationIds": []        
        },        
        "filterStore": {            
            "country": {                
                "label": 
                "United States",                
                "value": 30100001,                
                "shortName": "US"            
            },            
            "states": [],            
            "cities": [],            
            "counties": [],            
            "districts": [],            
            "senates": [],            
            "houses": [],            
            "locationDetails": {}        
        },        
        "hasError": false,        
        "unUsedStates": []    
    },    
    "marketInfo": {        
        "reach": 382,        
        "impressions": 195,        
        "cpmStart": 5,        
        "cpmEnd": 60,        
        "ctvHouseholds": 5830,        
        "marketShare": 0.00011440341622429903    
    },    
    "audienceSegments": [
        {        
            "description": "Married family with kids living at home",        
            "cpm": 1.43,        
            "isLeaf": 1,        
            "margin": 0,        
            "pathKey": "Engage DMi - AU > Engage DMi - AU > Engage DMi > AU > Demographics > Relationship > Family",        
            "id": "71a5baf0-6d15-4c9b-892e-4df0c4ffd618",        
            "taxonomy_value": "Family (Reach 600.0K)"    
        }
    ],    
    "demographics": {        
        "ethnicity": [],        
        "age": [],        
        "gender": [],        
        "language": [],        
        "income": []    
    },    
    "inventoryGroups": [
        {        
            "id": 163921,        
            "isShared": false,        
            "name": "First",        
            "publisherCount": 109,        
            "uniques": 2426218632,        
            "creativeTypes": [
                {            
                    "label": "Video",            
                    "value": 88.55        
                }
            ],        
            "deviceTypes": [
                {            
                    "label": "Connected TV",            
                    "value": 78.57        
                }
            ],        
            "publishers": [
                {            
                    "logo": "https://logo.clearbit.com/ciel.bz",            
                    "name": UNKNOWN        
                }
            ]    
        }
    ],    
    "deviceTypes": [
        {        
            "label": "Mobile",        
            "value": 21    
        }
    ],    
    "owId": "202314"
}
```

