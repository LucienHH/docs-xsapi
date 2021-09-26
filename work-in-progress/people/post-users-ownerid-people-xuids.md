---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: e20bfb58-9c3b-14ed-6462-85d42fa6fe1a
permalink: en-us/docs/xboxlive/rest/uri-usersowneridpeoplexuidspost.html
ms.date: 10/12/2017
title: 'POST (/users/{ownerId}/people/xuids)'
description: 'POST (/users/{ownerId}/people/xuids)'
---

# POST \(/users/{ownerId}/people/xuids\)

Gets people by XUID from caller's people collection. The domain for these URIs is `social.xboxlive.com`.

* [Remarks](post-users-ownerid-people-xuids.md#ID4EV)
* [URI parameters](post-users-ownerid-people-xuids.md#ID4E5)
* [Authorization](post-users-ownerid-people-xuids.md#ID4EJB)
* [Required Request Headers](post-users-ownerid-people-xuids.md#ID4ERC)
* [Optional Request Headers](post-users-ownerid-people-xuids.md#ID4EBE)
* [Request body](post-users-ownerid-people-xuids.md#ID4EHF)
* [HTTP status codes](post-users-ownerid-people-xuids.md#ID4EKH)
* [Required Response Headers](post-users-ownerid-people-xuids.md#ID4ENBAC)
* [Response body](post-users-ownerid-people-xuids.md#ID4EZCAC)

## Remarks <a id="ID4EV"></a>

POST operations won't modify any resources so this will produce the same results if executed once or multiple times.

## URI parameters <a id="ID4E5"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid\({xuid}\), or gt\({gamertag}\). |

## Authorization <a id="ID4EJB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | yes | Caller has user's Xbox User ID \(XUID\). | 401 Unauthorized |

## Required Request Headers <a id="ID4ERC"></a>

| Header | Description |
| :--- | :--- |
| Authorization | String. Authorization data for Xbox LIVE. This is typically an encrypted XSTS token. Example value: **XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;**. |
| Content-Length | 32-bit unsigned integer. Length, in bytes, of the request body. Example value: 22. |
| Content-Type | String. MIME type of the request body. This must be **application/json**. |

## Optional Request Headers <a id="ID4EBE"></a>

| Header | Description |
| :--- | :--- |
| X-RequestedServiceVersion | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1. |
| Accept | String. Content-Types that the caller accepts in the response. All responses are **application/json**. |

## Request body <a id="ID4EHF"></a>

### Required members <a id="ID4ENF"></a>

| Member | Description |
| :--- | :--- |
| XuidList | Array of XUIDs that identify the people to be returned from the caller's people collection. See [XuidList \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-xuidlist.md). |

### Optional members <a id="ID4EKG"></a>

There are no optional members for this request.

### Prohibited members <a id="ID4EVG"></a>

All other members are prohibited in a request.

### Sample request <a id="ID4EAH"></a>

```cpp
{
    "xuids": [
        "2533274790395904", 
        "2533274792986770", 
        "2533274794866999"
    ]
}
```

## HTTP status codes <a id="ID4EKH"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | Success when method is "get". |
| 204 | No Content | Success when method is "add" or "remove". |
| 400 | Bad Request | Method parameter was missing or malformed, or user IDs were malformed. |
| 403 | Forbidden | XUID claim could not be parsed from the authorization header. |

## Required Response Headers <a id="ID4ENBAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Length | 32-bit unsigned integer | Length, in bytes, of the response body. Example value: 22. |
| Content-Type | string | MIME type of the response body. This will always be **application/json**. |

## Response body <a id="ID4EZCAC"></a>

A response body is only sent when the request method is "get". There is no response body for "add" or "remove".

If a "get" method call is successful, the service returns the total number of people in the caller's people collection, and an array containing the caller's people collection. No response is returned for "add" and "remove" methods. See [PeopleList \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-peoplelist.md).

### Sample response <a id="ID4EHDAC"></a>

```cpp
{
    "people": [
        {
            "xuid": "2603643534573573",
            "isFavorite": true,
            "isFollowingCaller": false,
            "socialNetworks": ["LegacyXboxLive"]
        },
        {
            "xuid": "2603643534573572",
            "isFavorite": true,
            "isFollowingCaller": false,
            "socialNetworks": ["LegacyXboxLive"]
        },
        {
            "xuid": "2603643534573577",
            "isFavorite": false,
            "isFollowingCaller": false
        },
    ],
    "totalCount": 3
}
```

## See also <a id="ID4ERDAC"></a>

#### Parent <a id="ID4ETDAC"></a>

[/users/{ownerId}/people/xuids](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/people/uri-usersowneridpeoplexuids.md)

