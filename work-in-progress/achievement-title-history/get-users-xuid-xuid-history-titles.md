---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: c0a6cb3b-bab6-03b8-a79e-87defaaa6421
permalink: en-us/docs/xboxlive/rest/uri-titlehistoryusersxuidhistorytitlesgetv2.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid})/history/titles)'
description: 'GET (/users/xuid({xuid})/history/titles)'
---

# GET \(/users/xuid\({xuid}\)/history/titles\)

Gets a list of titles for which the user has unlocked or made progress on its achievements. This API does not return a user's full history of titles played or launched. The domain for these URIs is `achievements.xboxlive.com`.

* [URI parameters](get-users-xuid-xuid-history-titles.md#ID4EY)
* [Query string parameters](get-users-xuid-xuid-history-titles.md#ID4EDB)
* [Authorization](get-users-xuid-xuid-history-titles.md#ID4EFD)
* [Optional Request Headers](get-users-xuid-xuid-history-titles.md#ID4EGE)
* [Request body](get-users-xuid-xuid-history-titles.md#ID4ERF)

## URI parameters <a id="ID4EY"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the user whose title history is being accessed. |

## Query string parameters <a id="ID4EDB"></a>

| Parameter | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| skipItems | No | 32-bit signed integer | Return items beginning after the given number of items. For example, **skipItems="3"** will retrieve items beginning with the fourth item retrieved. |
| continuationToken | No | string | Return the items starting at the given continuation token. |
| maxItems | No | 32-bit signed integer | Maximum number of items to return from the collection, which can be combined with **skipItems** and **continuationToken** to return a range of items. The service may provide a default value if **maxItems** is not present, and may return fewer than **maxItems**, even if the last page of results has not yet been returned. |

## Authorization <a id="ID4EFD"></a>

| Claim | Required? | Description | Behavior if missing |
| :--- | :--- | :--- | :--- |
| User | Caller is an authorized Xbox LIVE user. | The caller needs to be a valid user on Xbox LIVE. | 403 Forbidden |

## Optional Request Headers <a id="ID4EGE"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| **X-RequestedServiceVersion** | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. |
| **x-xbl-contract-version** | 32-bit unsigned integer | If present and set to 2, the V2 version of this API will be used. Otherwise, V1. |

## Request body <a id="ID4ERF"></a>

No objects are sent in the body of this request.

## See also <a id="ID4EDG"></a>

### Parent <a id="ID4EFG"></a>

[/users/xuid\({xuid}\)/history/titles](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/achievement-title-history/uri-titlehistoryusersxuidhistorytitlesv2.md)

### Reference <a id="ID4EPG"></a>

[UserTitle \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-usertitlev2.md)

[PagingInfo \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-paginginfo.md)

[Paging Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/pagingparameters.md)

