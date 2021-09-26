---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 754190c9-b15d-f34b-1dca-5c92f6f67d12
permalink: en-us/docs/xboxlive/rest/uri-usersowneridsummaryget.html
ms.date: 10/12/2017
title: 'GET (/users/{ownerId}/summary)'
description: 'GET (/users/{ownerId}/summary)'
---

# GET \(/users/{ownerId}/summary\)

Gets summary data about the owner from the caller's perspective.

* [URI parameters](get-users-ownerid-summary.md#ID4EQ)
* [Authorization](get-users-ownerid-summary.md#ID4E2)
* [Required Request Headers](get-users-ownerid-summary.md#ID4EBC)
* [Optional Request Headers](get-users-ownerid-summary.md#ID4EHD)
* [Request body](get-users-ownerid-summary.md#ID4EXE)
* [HTTP status codes](get-users-ownerid-summary.md#ID4ECF)
* [Required Response Headers](get-users-ownerid-summary.md#ID4EZG)
* [Response body](get-users-ownerid-summary.md#ID4EGAAC)

## URI parameters <a id="ID4EQ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Identifier of the user whose resource is being accessed. The possible values are "me", xuid\({xuid}\), or gt\({gamertag}\). Example values: `me`, `xuid(2603643534573581)`, `gt(SomeGamertag)` |

## Authorization <a id="ID4E2"></a>

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Required. user identifier of the caller. Example value: 2533274790395904 |

## Required Request Headers <a id="ID4EBC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authorization data for . This is typically an encrypted XSTS token. Example value: **XBL3.0 x=\[hash\];\[token\]**. |

## Optional Request Headers <a id="ID4EHD"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| x-xbl-contract-version | string | Build name/number of the service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Example values: 1 |
| Accept | string | Content-Types that are acceptable. All responses will be `application/json`. |

## Request body <a id="ID4EXE"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4ECF"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 400 | Bad Request | User IDs were malformed. |
| 403 | Forbidden | XUID claim could not be parsed from the authorization header. |

## Required Response Headers <a id="ID4EZG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Length | string | The number of bytes being sent in the response. Example value: 232. |
| Content-Type | string | MIME type of the response body. This must be **application/json**. |

## Response body <a id="ID4EGAAC"></a>

See [PersonSummary \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-personsummary.md).

### Sample response <a id="ID4ESAAC"></a>

```cpp
{
    "targetFollowingCount": 87,
    "targetFollowerCount": 19,
    "isCallerFollowingTarget": true,
    "isTargetFollowingCaller": false,
    "hasCallerMarkedTargetAsFavorite": true,
    "hasCallerMarkedTargetAsKnown": true,
    "legacyFriendStatus": "None",
    "recentChangeCount": 5,
    "watermark": "5246775845000319351"
}
```

## See also <a id="ID4E3AAC"></a>

#### Parent <a id="ID4E5AAC"></a>

[/users/{ownerId}/summary](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/people/uri-usersowneridsummary.md)

