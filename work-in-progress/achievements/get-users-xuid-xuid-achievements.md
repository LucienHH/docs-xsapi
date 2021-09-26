---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 381d49d1-7a4b-4a1e-1baf-cf674f7e0d54
permalink: en-us/docs/xboxlive/rest/uri-achievementsusersxuidachievementsgetv2.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid})/achievements)'
description: 'GET (/users/xuid({xuid})/achievements)'
---

# GET \(/users/xuid\({xuid}\)/achievements\)

Gets the list of achievements defined on the title, those unlocked by the user, or those the user has in progress. The domain for these URIs is `achievements.xboxlive.com`.

* [URI parameters](get-users-xuid-xuid-achievements.md#ID4EX)
* [Query string parameters](get-users-xuid-xuid-achievements.md#ID4ECB)
* [Authorization](get-users-xuid-xuid-achievements.md#ID4ENF)
* [Required Request Headers](get-users-xuid-xuid-achievements.md#ID4ESG)
* [Optional Request Headers](get-users-xuid-xuid-achievements.md#ID4ESH)
* [Request body](get-users-xuid-xuid-achievements.md#ID4EIBAC)
* [Response body](get-users-xuid-xuid-achievements.md#ID4ETBAC)

## URI parameters <a id="ID4EX"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the user whose \(resource\) is being accessed. Must match the XUID of the authenticated user. |

## Query string parameters <a id="ID4ECB"></a>

| Parameter | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| **skipItems** | No | 32-bit signed integer | Return items beginning after the given number of items. For example, **skipItems="3"** will retrieve items beginning with the fourth item retrieved. |
| **continuationToken** | No | string | Return the items starting at the given continuation token. |
| **maxItems** | No | 32-bit signed integer | Maximum number of items to return from the collection, which can be combined with **skipItems** and **continuationToken** to return a range of items. The service may provide a default value if **maxItems** is not present, and may return fewer than **maxItems**, even if the last page of results has not yet been returned. |
| **titleId** | No | string | A filter for the returned results. Accepts one or more comma-delimited, decimal title identifiers. |
| **unlockedOnly** | No | Boolean value | Filter for the returned results. If set to **true**, will only return the achievements unlocked for the user. Defaults to **false**. |
| **possibleOnly** | No | Boolean value | Filter for the returned results. If set to **true**, will return all possible results but not unlocked metadata - just the achievement information from XMS. Defaults to **false**. |
| **types** | No | string | A filter for the returned results. Can be "Persistent" or "Challenge". Default is all supported types. |
| **orderBy** | No | string | Specifies the order in which to return the results. Can be "Unordered", "Title", "UnlockTime", or "EndingSoon". The default is "Unordered". |

## Authorization <a id="ID4ENF"></a>

| Claim | Required? | Description | Behavior if missing |
| :--- | :--- | :--- | :--- |
| User | Caller is an authorized Xbox LIVE user. | The caller needs to be a valid user on Xbox LIVE. | 403 Forbidden |

## Required Request Headers <a id="ID4ESG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |

## Optional Request Headers <a id="ID4ESH"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| **X-RequestedServiceVersion** | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1. |
| **x-xbl-contract-version** | 32-bit unsigned integer | If present and set to 2, the V2 version of this API will be used. Otherwise, V1. |
| **Accept-Language** | string | List of desired locales and fallbacks \(e.g., fr-FR, fr, en-GB, en-WW, en-US\). The Achievements service will work through the list until it finds matching localized strings. If none are found, it attempts to match the location defined in the user token, which comes from the user's IP address. If still no matching localized strings are found, it uses the default strings provided by the title developer/publisher. |

## Request body <a id="ID4EIBAC"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4ETBAC"></a>

If the call is successful, the service returns an array of [Achievement \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-achievementv2.md) objects and a [PagingInfo \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-paginginfo.md) object.

### Sample response <a id="ID4ECCAC"></a>

```cpp
{
    "achievements":
    [{
        "id":"3",
        "serviceConfigId":"b5dd9daf-0000-0000-0000-000000000000",
        "name":"Default NameString for Microsoft Achievements Sample Achievement 3",
        "titleAssociations":
        [{
                "name":"Microsoft Achievements Sample",
                "id":3051199919,
                "version":"abc"
        }],
        "progressState":"Achieved",
        "progression":
        {
                "achievementState":"Achieved",
                "requirements":null,
                "timeUnlocked":"2013-01-17T03:19:00.3087016Z",
        },
        "mediaAssets":
        [{
                "name":"Icon Name",
                "type":"Icon",
                "url":"http://www.xbox.com"
        }],
        "platform":"D",
        "isSecret":true,
        "description":"Default DescriptionString for Microsoft Achievements Sample Achievement 3",
        "lockedDescription":"Default UnachievedString for Microsoft Achievements Sample Achievement 3",
        "productId":"12345678-1234-1234-1234-123456789012",
        "achievementType":"Challenge",
        "participationType":"Individual",
        "timeWindow":
        {
                "startDate":"2013-02-01T00:00:00Z",
                "endDate":"2100-07-01T00:00:00Z"
        },
        "rewards":
        [{
                "name":null,
                "description":null,
                "value":"10",
                "type":"Gamerscore",
                "valueType":"Int"
        },
        {
                "name":"Default Name for InAppReward for Microsoft Achievements Sample Achievement 3",
                "description":"Default Description for InAppReward for Microsoft Achievements Sample Achievement 3",
                "value":"1",
                "type":"InApp",
                "valueType":"String"
        }],
        "estimatedTime":"06:12:14",
        "deeplink":"aWFtYWRlZXBsaW5r",
        "isRevoked":false
        }],
        "pagingInfo":
        {
                "continuationToken":null,
                "totalRecords":1
        }
}
```

## See also <a id="ID4EPCAC"></a>

#### Parent <a id="ID4ERCAC"></a>

[/users/xuid\({xuid}\)/achievements](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/achievements/uri-achievementsusersxuidachievementsv2.md)

#### Reference <a id="ID4E2CAC"></a>

[Achievement \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-achievementv2.md)

[PagingInfo \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-paginginfo.md)

[Paging Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/pagingparameters.md)

