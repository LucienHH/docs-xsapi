---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: d3ca14a5-0214-ef42-091e-3f05f2a3482d
permalink: en-us/docs/xboxlive/rest/uri-inventoryitemurlget.html
ms.date: 10/12/2017
title: 'GET (/inventory/{itemID})'
description: 'GET (/inventory/{itemID})'
---

# GET \(/inventory/{itemID}\)

Provides the full set of details for a specific inventory item. The domain for these URIs is `inventory.xboxlive.com`.

* [Remarks](get-inventory-itemid.md#ID4EX)
* [URI parameters](get-inventory-itemid.md#ID4EAB)
* [Response body](get-inventory-itemid.md#ID4ELB)

## Remarks <a id="ID4EX"></a>

No policy checks, enforcement, or filtering will occur as a part of this call.

## URI parameters <a id="ID4EAB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| itemID | string | the ID unique to each user for a singular inventory item |

## Response body <a id="ID4ELB"></a>

### Sample response <a id="ID4ERB"></a>

The response to a GET request, assuming it passes authentication and is assigned the appropriate authorization context, is a single inventory item with the full set of item properties.

```cpp
{inventoryItem}
```

## See also <a id="ID4E4B"></a>

#### Parent <a id="ID4E6B"></a>

GET \(/inventory/{itemID}\)

#### Further Information <a id="ID4EJC"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

