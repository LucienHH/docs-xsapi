---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: af117e87-6f1d-6448-9adf-7cf890d1380f
permalink: en-us/docs/xboxlive/rest/uri-usersxuidscidsscidstatsget.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid})/scids/{scid}/stats)'
description: 'GET (/users/xuid({xuid})/scids/{scid}/stats)'
---

# GET \(/users/xuid\({xuid}\)/scids/{scid}/stats\)

Gets a service configuration scoped by a comma-delimited list of user statistic names on behalf of the specified user. The domain for these URIs is `userstats.xboxlive.com`.

* [Remarks](get-users-xuid-xuid-scids-scid-stats.md#ID4EV)
* [URI parameters](get-users-xuid-xuid-scids-scid-stats.md#ID4EEB)
* [Query string parameters](get-users-xuid-xuid-scids-scid-stats.md#ID4EPB)
* [Authorization](get-users-xuid-xuid-scids-scid-stats.md#ID4EUC)
* [Required Request Headers](get-users-xuid-xuid-scids-scid-stats.md#ID4EPD)
* [Optional Request Headers](get-users-xuid-xuid-scids-scid-stats.md#ID4EYE)
* [Request body](get-users-xuid-xuid-scids-scid-stats.md#ID4E3F)
* [HTTP status codes](get-users-xuid-xuid-scids-scid-stats.md#ID4EHG)
* [Response body](get-users-xuid-xuid-scids-scid-stats.md#ID4E5BAC)

## Remarks <a id="ID4EV"></a>

clients need a way to read and write title statistics on behalf of players to our new player statistics system.

## URI parameters <a id="ID4EEB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | GUID | Xbox User ID \(XUID\) of the user on whose behalf to access the service configuration. |
| scid | GUID | Identifier of the service configuration that contains the resource being accessed. |

## Query string parameters <a id="ID4EPB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| statNames | string | The only query string parameter is the comma delimited user statistic name URI noun.For example, the following URI informs the service that four statistics are requested on behalf of the user id specified in the URI. `https://userstats.xboxlive.com/users/xuid({xuid})/scids/{scid}/stats/wins,kills,kdratio,headshots`There will be a limit on the number of statistics that can be requested in a single call, and that limit will carefully consider a "sweet spot" for developer convenience vs. URI length practicality. For example, the limit might be determined by either 600 characters worth of statistic name text \(including the commas\), or 10 statistics maximum. Enabling a simple GET like this enables HTTP caching for commonly requested statistics, which reduces call volume from chatty clients. |

## Authorization <a id="ID4EUC"></a>

There is authorization logic implemented for content-isolation and access-control scenarios.

* Both leaderboards and user statistics can be read from clients on any platform, provided that the caller submits a valid XSTS token with the request. Writes are obviously limited to clients supported by the Player Data system.
* Title developers can mark statistics as open or restricted with Partner Center. Leaderboards are open statistics. Open statistics can be accessed by Smartglass, as well as iOS, Android, Windows, Windows Phone, and web applications, as long as the user is authorized to the sandbox. User authorization to a sandbox is managed through Partner Center.

Pseudo-code for the check looks like this:

```cpp
If (!checkAccess(serviceConfigId, resource, CLAIM[userid, deviceid, titleid]))
{
        Reject request as Unauthorized
}

// else accept request.
```

## Required Request Headers <a id="ID4EPD"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |

## Optional Request Headers <a id="ID4EYE"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the authentication token, and so on. Default value: 1. |

## Request body <a id="ID4E3F"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EHG"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 304 | Not Modified | Resource not been modified since last requested. |
| 400 | Bad Request | Service could not understand malformed request. Typically an invalid parameter. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 404 | Not Found | The specified resource could not be found. |
| 406 | Not Acceptable | Resource version is not supported. |
| 408 | Request Timeout | Resource version is not supported; should be rejected by the MVC layer. |

## Response body <a id="ID4E5BAC"></a>

### Sample response <a id="ID4EECAC"></a>

```cpp
{
    "user": {
     "xuid": "123456789",
        "gamertag": "WarriorSaint",
        "stats": [
            {
                "statname": "Wins",
                "type": "Integer",
                "value": 40
            },
            {
                "statname": "Kills",
                "type": "Integer",
                "value": 700
            },
            {
                "statname": "KDRatio",
                "type": "Double",
                "value": 2.23
            },
            {
                "statname": "Headshots",
                "type": "Integer",
                "value": 173
            }
        ],
    }
}
```

## See also <a id="ID4EOCAC"></a>

#### Parent <a id="ID4EQCAC"></a>

[/users/xuid\({xuid}\)/scids/{scid}/stats](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/user-statistics/uri-usersxuidscidsscidstats.md)

