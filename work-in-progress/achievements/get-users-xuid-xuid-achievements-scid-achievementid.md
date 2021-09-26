---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 27318886-f084-d6a8-e582-3eb070ccbc38
permalink: en-us/docs/xboxlive/rest/uri-usersxuidachievementsscidachievementidget.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid})/achievements/{scid}/{achievementid})'
description: 'GET (/users/xuid({xuid})/achievements/{scid}/{achievementid})'
---

# GET \(/users/xuid\({xuid}\)/achievements/{scid}/{achievementid}\)

Gets the details of the Achievement. The domain for these URIs is `achievements.xboxlive.com`.

* [URI parameters](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4EV)
* [Authorization](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4EAB)
* [Effect of privacy settings on resource](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4E4C)
* [Required Request Headers](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4EPG)
* [Optional Request Headers](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4EPH)
* [Request body](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4ECBAC)
* [HTTP status codes](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4ENBAC)
* [Response body](get-users-xuid-xuid-achievements-scid-achievementid.md#ID4EBGAC)

## URI parameters <a id="ID4EV"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the user whose resource is being accessed. Must match the XUID of the authenticated user. |
| scid | GUID | Unique identifier of the service configuration whose achievement is being accessed. |
| achievementid | 32-bit unsigned integer | Unique \(within the specified SCID\) identifier of the achievement that is being accessed. |

## Authorization <a id="ID4EAB"></a>

Authorization claims used \| Claim\| Required?\| Description\| Behavior if missing\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| User\| Yes\| A valid user on Xbox LIVE for whom the request is being made.\| 403 Forbidden\| \| Title\| No\| The calling title.\| Depends on AuthZ. As of May 1, 2013, AuthZ does not supply a claim when missing and will therefore deny access to any SCIDs not marked as public.\| \| Sandbox\| No\| The sandbox from which the results should be retrieved.\| Depends on AuthZ. As of May 1, 2013, AuthZ does not supply a default claim when missing.\|

## Effect of privacy settings on resource <a id="ID4E4C"></a>

Effect of Privacy Settings on Resource \| Requesting User\| Target User's Privacy Setting\| Behavior\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| me\| -\| As described.\| \| friend\| everyone\| OK\| \| friend\| friends only\| OK\| \| friend\| blocked\| Forbidden.\| \| non-friend user\| everyone\| OK\| \| non-friend user\| friends only\| Forbidden.\| \| non-friend user\| blocked\| Forbidden.\| \| third-party site\| everyone\| OK\| \| third-party site\| friends only\| Forbidden.\| \| third-party site\| blocked\| Forbidden.\|

## Required Request Headers <a id="ID4EPG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |

## Optional Request Headers <a id="ID4EPH"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |
| x-xbl-contract-version | string | Defaults to V1. |
| Accept-Language | string | List of desired locales and fallbacks \(e.g., fr-FR, fr, en-GB, en-WW, en-US\). The Achievements service will work through the list until it finds matching localized strings. If none are found, it attempts to match the location defined in the user token, which comes from the user's IP address. If still no matching localized strings are found, it uses the default strings provided by the title developer/publisher. |

## Request body <a id="ID4ECBAC"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4ENBAC"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 301 | Moved Permanently | The service has moved to a different URI. |
| 307 | Temporary Redirect | The URI for this resource has temporarily changed. |
| 400 | Bad Request | Service could not understand malformed request. Typically an invalid parameter. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 404 | Not Found | The specified resource could not be found. |
| 406 | Not Acceptable | Resource version is not supported; should be rejected by the MVC layer. |
| 408 | Request Timeout | The request took too long to complete. |
| 410 | Gone | The requested resource is no longer available. |

## Response body <a id="ID4EBGAC"></a>

### Sample response <a id="ID4EHGAC"></a>

```cpp
{
    "achievement":
    {
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
    }
}
```

## See also <a id="ID4ERGAC"></a>

#### Parent <a id="ID4ETGAC"></a>

[/users/xuid\({xuid}\)/achievements/{scid}/{achievementid}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/achievements/uri-usersxuidachievementsscidachievementid.md)

