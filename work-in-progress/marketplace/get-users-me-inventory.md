---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 7b74dd08-2854-319d-3ed0-ddee75d922b9
permalink: en-us/docs/xboxlive/rest/uri-inventoryget.html
ms.date: 10/12/2017
title: GET (/users/me/inventory)
description: GET (/users/me/inventory)
---

# GET \(/users/me/inventory\)

Provides the set of inventory currently associated with the provided user back to the caller. The domain for these URIs is `inventory.xboxlive.com`.

* [Remarks](get-users-me-inventory.md#ID4EV)
* [Query string parameters](get-users-me-inventory.md#ID4EHB)
* [Sample request](get-users-me-inventory.md#ID4EDE)
* [Response body](get-users-me-inventory.md#ID4ERE)

## Remarks <a id="ID4EV"></a>

No policy checks, enforcement, or filtering will occur as a part of this call. Callers have the option of passing query parameters in order to narrow the scope of the results returned.

Callers can page through results with a continuation token as provided through a previous response: **/users/me/inventory?continuationToken=continuationTokenString**.

The caller may make a call to the details API with a specific item URL in order to see information about a specific item.

## Query string parameters <a id="ID4EHB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| availability | string | The current availability of items to return. Default is "Available" which returns items for which the current date falls between the start date and the end date range. Other values include "All", which returns all items, and "Unavailable" which returns items for which the current date falls outside the start date and end date range and it therefore not currently available. |
| container | string | Optional. If you set the value to the Product ID of a game, then the results from the inventory only include items related to that game. This is especially useful when calling the inventory from your server to filter results down to a specific game's products. |
| expandSatisfyingEntitlements | string | A flag that indicates if the response includes all satisfying entitlements that the user has within the results returned. The default is "false". When this parameter is used with a value of "true", any products that are granted to the user through satisfying entitlements such as bundled items, Xbox 360 purchases migrated to Xbox One, subscription benefits, etc. are added to the results. When this value is "false" then only the parent items such as the Bundle's ProductID are returned in the results and not the individual included items. **Note:** Using this parameter with a value of “true” is only supported if the itemType parameter is not included in the URI, otherwise you will receive an HTTP 400 error. |
| productIds | string | A collection of ProductIds that you want to specifically retrieve from the user's inventory, separated by ','.  If the user does not have a supplied ProductID in their inventory results, that item will not appear in the results from the API call. If you pass in the productID of a bundle along with the expandSatisfyingEntitlements parameter set to true, all items included in the bundle are returned in the call results \(whether you specified their productIds in your query string or not\). |
| state | string | The state of the items to return. The default is "all", which returns all items. Other values are "Enabled", which indicates that only itemsthat are enabled should be returned, "Suspended", which indicates that only items that are suspended should be returned, "Expired", which indicates that only items which have expired should be returned, "Cancelled", which indicates that only items that are cancelled should be returned, and "Renewed", which indicates that only items that have been renewed should be returned. |

In addition to these, the resource supports the standard paging mechanics.

## Sample request <a id="ID4EDE"></a>

The fully-qualified domain name for this URI method is `https://inventory.xboxlive.com/users/me/inventory.`

> \[!NOTE\] Which users are considered depends on the token provided, which may include multiple users. If you want a single user's inventory, you must also provide the user hash for the specific user you want to exclusively consider.

.

## Response body <a id="ID4ERE"></a>

If the call is successful, the service returns an array of inventory items. See [inventoryItem \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-inventoryitem.md).

### Sample response <a id="ID4E4E"></a>

```cpp
{
  "pagingInfo": {
    "continuationToken": string,
    "totalItems": int
  },
  "items":
  {
    "url": string,
    "itemType": "Music",
    "titleId": string,
    "containers": string,
    "obtained": DateTime,
    "startDate": DateTime,
    "endDate": DateTime,
    "state": "Enabled"  
}
```

## See also <a id="ID4EHF"></a>

#### Parent <a id="ID4EJF"></a>

[/users/me/inventory](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-inventory.md)

#### Further Information <a id="ID4ETF"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

