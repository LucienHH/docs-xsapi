---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 942cf0d7-f988-0495-cf28-cdac608b8109
permalink: en-us/docs/xboxlive/rest/uri-usersxuidscidstatnamepeopleget.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid})/scids/{scid}/stats/{statname)/people/{all|favorite})'
description: 'GET (/users/xuid({xuid})/scids/{scid}/stats/{statname)/people/{all|favorite})'
---

# GET \(/users/xuid\({xuid}\)/scids/{scid}/stats/{statname\)/people/{all\|favorite}\)

Returns a social leaderboard by ranking the stat values \(scores\) for either all known contacts of the current user or only those contacts designated as favorite people by that user. The domain for these URIs is `leaderboards.xboxlive.com`.

* [Remarks](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EV)
* [URI parameters](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EAB)
* [Query string parameters](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4ELB)
* [Authorization](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EQD)
* [Required Request Headers](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EGE)
* [Optional Request Headers](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EXF)
* [Request body](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4ETG)
* [HTTP status codes](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4ECEAC)
* [Required Response Headers](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4E1HAC)
* [Optional Response Headers](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EDJAC)
* [Response body](get-users-xuid-xuid-scids-scid-stats-statname-people-all-favorite.md#ID4EDKAC)

## Remarks <a id="ID4EV"></a>

Leaderboard APIs are all read-only and therefore only support the GET verb \(over HTTPS\). They reflect ranked and sorted "pages" of indexed player stats that are derived from individual user stats that were written via the Player Data system. Full leaderboard indexes can be quite large, and callers will never ask to see one in its entirety, therefore this URI supports several query string arguments that allow a caller to be specific about what kind of view it wants to see against that leaderboard.

GET operations won't modify any resources so this will produce the same results if executed once or multiple times.

## URI parameters <a id="ID4EAB"></a>

| Parameter | Type | Description |  |
| :--- | :--- | :--- | :--- |
| xuid | string | Identifier of the user. |  |
| scid | string | Identifier of the service configuration that contains the resource being accessed. |  |
| statname | string | Unique identifier of the user stat resource being accessed. |  |
| all | favorite | enumeration | Whether to rank the stat values \(scores\) for all known contacts of the current user or only those contacts designated as favorite people by that user. |

## Query string parameters <a id="ID4ELB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| maxItems | 32-bit unsigned integer | Maximum number of leaderboard records to return in a page of results. If not specified, a default number will be returned \(10\). The max value for maxItems is still undefined, but we want to avoid large data sets, so this value should probably target the largest set that a tuner UI could handle per call. |
| skipToRank | 32-bit unsigned integer | Return a page of results starting with the specified leaderboard rank. The rest of the results will be in sort order by rank. This query string can return a continuation token which can be fed back into a subsequent query to get "the next page" of results. |
| skipToUser | string | Return a page of leaderboard results around the specified gamer xuid, regardless of that user's rank or score. The page will be ordered by percentile rank with the specified user in the last position of the page for predefined views, or in the middle for stat leaderboard views. There is no **continuationToken** provided for this type of query. |
| continuationToken | string | If a previous call returned a **continuationToken**, then the caller can pass back that token "as is" in a query string to get the next page of results. |
| sort | string | Specify whether to rank the list of players from low-to-high value order \("ascending"\) or high-to-low value order \("descending"\). This is an optional parameter; the default is descending order. |

## Authorization <a id="ID4EQD"></a>

Xuid authorization is required.

Authorization logic is implemented for the purposes of content isolation and access control scenarios.

Both leaderboards and user stats can be read from clients on any platform, provided that the caller submits a valid XSTS token with their request. Writes are \(obviously\) limited to clients supported by the Player Data system.

Title developers can mark statistics as open or restricted with Partner Center. Leaderboards are open statistics. Open statistics can be accessed by Smartglass, as well as iOS, Android, Windows, Windows Phone, and web applications, as long as the user is authorized to the sandbox. User authorization to a sandbox is managed through Partner Center.

## Required Request Headers <a id="ID4EGE"></a>

| Header | Description |
| :--- | :--- |
| Authorization | String. Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| Content-Type | String. The MIME type of the request body. Example value: "application/json". |
| X-RequestedServiceVersion | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |
| Accept | String. Acceptable Content-Type values. Example value: "application/json". |

## Optional Request Headers <a id="ID4EXF"></a>

| Header | Description |
| :--- | :--- |
| If-None-Match | String. Entity tag - used if client supports caching. Example value: "686897696a7c876b7e". |

## Request body <a id="ID4ETG"></a>

To maximize the ability of any caller to understand the data it's getting back for proper display, each stat value for each user will be returned as a string in the format in which it should be displayed, and formatted to match the locale specified in the accept-language header in the request. A localized "display name" will also be returned for statname for that leaderboard.

### Required members <a id="ID4E2G"></a>

| Member | Description |  |
| :--- | :--- | :--- |
| **pagingInfo** | section | Optional. Returned when the rank of the last entry in the page is lower than totalItems. This section is also not returned when skipToUser is specified in the request. |
| continuationToken | string | Required. Specifies what value to feed back into the "continuationToken" query parameter to get next page of results for that URI if desired. If no pagingInfo is returned then there is no "next page" of data to be obtained. |
| totalItems | 64-bit unsigned integer | Required. Total number of entries in the leaderboard. |
| **leaderboardInfo** | section | Required. Always returned. Contains the metadata about the leaderboard requested. |
| displayName | string | Required. Localized display name for the predefined leaderboard. Example value: "Total flags captured". |
| totalCount | string | Required. Total number of entries in the leaderboard. |
| columns | array | Required. |
| displayName | string | Required. Corresponds to a column in the leaderboard. |
| statName | string | Required. Corresponds to a column in the leaderboard. |
| type | string | Required. Corresponds to a column in the leaderboard. |
| **userList** | section | Required. Always returned. Contains the actual user scores for the leaderboard requested. |
| gamertag | string | Required. Corresponds to the user in the leaderboard entry. |
| xuid | 32-bit signed integer | Required. Corresponds to the user in the leaderboard entry. |
| percentile | string | Required. Corresponds to the user in the leaderboard entry. |
| rank | string | Required. Corresponds to the user in the leaderboard entry. |
| values | array | Required. Each comma-separated value corresponds to a column in the leaderboard. |

## HTTP status codes <a id="ID4ECEAC"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |  |
| :--- | :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |  |
| 304 | Not Modified |  |  |
| 400 | Bad Request |  | Service could not understand malformed request. Typically an invalid parameter. |
| 401 | Unauthorized |  | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |  |
| 404 | Not Found | The specified resource could not be found. |  |
| 406 | Not Acceptable | Resource version is not supported; should be rejected by the MVC layer. |  |
| 408 | Request Timeout | Service could not understand malformed request. Typically an invalid parameter. |  |

## Required Response Headers <a id="ID4E1HAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Type | string | The mime type of the body of the response. Example values: "application/json". |
| Content-Length | string | The number of bytes being sent in the response. Example value: "232". |

## Optional Response Headers <a id="ID4EDJAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| ETag | string | Used for cache optimization. Example value: "686897696a7c876b7e". |

## Response body <a id="ID4EDKAC"></a>

Request for social leaderboard, no paging:

[https://leaderboards.xboxlive.com/users/xuid\(2533274916402282\)/scids/c1ba92a9-0000-0000-0000-000000000000/stats/EnemyDefeats/people/all?sort=descending](https://leaderboards.xboxlive.com/users/xuid%282533274916402282%29/scids/c1ba92a9-0000-0000-0000-000000000000/stats/EnemyDefeats/people/all?sort=descending)

### Sample response <a id="ID4ENKAC"></a>

```cpp
{
    "pagingInfo": null,
    "leaderboardInfo": {
        "displayName": "Kills",
        "totalCount": 3,
        "columns": [
            {
                "displayName": "Kills",
                "statName": "enemydefeats",
                "type": "integer"
            }
        ]
    },
    "userList": [
        {
            "gamertag":"xxxSniper39",
            "xuid":"1234567890123555",
            "percentile":1.0,
            "rank":1,
            "values": [
                "47"
            ]
        },
        {
            "gamertag":"WarriorSaint",
            "xuid":"2533274916402282",
            "percentile":0.66,
            "rank":2,
            "values": [
                "42"
            ]
        },
        {
            "gamertag":"WhockaWhocka",
            "xuid":"1234567890123666",
            "percentile":0.33,
            "rank":3,
            "values": [
                "12"
            ]
        }
    ]
}
```

## See also <a id="ID4EXKAC"></a>

#### Parent <a id="ID4EZKAC"></a>

[/users/xuid\({xuid}\)/scids/{scid}/stats/{statname\)/people/{all\|favorite}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/leaderboards/uri-usersxuidscidstatnamepeople.md)

