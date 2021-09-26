---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 2c3c166b-e638-cfb9-d68e-9f8ab9a838d3
permalink: en-us/docs/xboxlive/rest/uri-inventoryconsumablesitemurlpost.html
ms.date: 10/12/2017
title: 'POST ({itemID})'
description: 'POST ({itemID})'
---

# POST \({itemID}\)

Indicates that all or a portion of a consumable inventory item has been used and decrements the quantity of the consumable by the requested amount. The domain for these URIs is `inventory.xboxlive.com`.

* [Remarks](post-itemid.md#ID4EX)
* [URI parameters](post-itemid.md#ID4EQB)
* [Request body](post-itemid.md#ID4E2B)
* [Response body](post-itemid.md#ID4ENC)

## Remarks <a id="ID4EX"></a>

* If the quantity the caller asked to consume exceeds the remaining supply of the item, the call will be rejected.
* The quantity the caller asked to consume must be a positive integer above 0. Calls with a consumption value of 0 or lower will be rejected.
* If the caller provides an empty Transaction ID, the request will be rejected.
* If available the title claim will be logged so that it will be possible to determine which title is reporting the consumption.
* Additional POSTs with the same transactionId will be ignored for some time period.

> \[!NOTE\] The **x-xbl-contract-version header** for this API is "4".

## URI parameters <a id="ID4EQB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| itemID | string | the ID unique to each user for a singular inventory item |

## Request body <a id="ID4E2B"></a>

### Sample request <a id="ID4EBC"></a>

```cpp
{
  "transactionId": String
  "removeQuantity": Int
}
```

The remove quantity field allows the caller to indicate the quantity of consumable they wish to remove from the consumable's remaining quantity. The Transaction ID field provides the caller with a means to retry using consumable content operations while limiting the risk of counting the same usage twice.

## Response body <a id="ID4ENC"></a>

The response to the POST, assuming it passes authentication and is assigned the appropriate authorization context is a an acknolodgement of receipt with the same transactionId passed to the service in the POST request, the consumable item's URL, and the item's new quantity value.

### Sample response <a id="ID4EVC"></a>

```cpp
{
  "transactionId": String
  "url": String
  "newQuantity": Int
}
```

## See also <a id="ID4E6C"></a>

#### Parent <a id="ID4EBD"></a>

[/users/me/consumables/{itemID}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-inventoryconsumablesitemurl.md)

#### Further Information <a id="ID4ELD"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

