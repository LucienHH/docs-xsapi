---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: c948d031-ec19-7571-31ef-23cb9c5ebfaf
permalink: en-us/docs/xboxlive/rest/uri-usersowneridpeopleget.html
ms.date: 10/12/2017
title: 'GET (/users/{ownerId}/people)'
description: 'GET (/users/{ownerId}/people)'
---

# GET \(/users/{ownerId}/people\)

Gets caller's people collection. The domain for these URIs is `social.xboxlive.com`.

* [Remarks](get-users-ownerid-people.md#ID4EV)
* [URI parameters](get-users-ownerid-people.md#ID4E5)
* [Query string parameters](get-users-ownerid-people.md#ID4EJB)
* [Authorization](get-users-ownerid-people.md#ID4ERD)
* [Required Request Headers](get-users-ownerid-people.md#ID4EZE)
* [Optional Request Headers](get-users-ownerid-people.md#ID4EYF)
* [Request body](get-users-ownerid-people.md#ID4E5G)
* [HTTP status codes](get-users-ownerid-people.md#ID4EJH)
* [Required Response Headers](get-users-ownerid-people.md#ID4EBBAC)
* [Response body](get-users-ownerid-people.md#ID4ENCAC)

## Remarks <a id="ID4EV"></a>

GET operations won't modify any resources so this will produce the same results if executed once or multiple times.

## URI parameters <a id="ID4E5"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid\({xuid}\), or gt\({gamertag}\). |

## Query string parameters <a id="ID4EJB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| view | string | Return the people associated with a view. The default value is "all". The possible values are: &lt;/br&gt;**Note:**  Only the **All** value is supported if the calling user is different than the owning user. |
| startIndex | 32-bit unsigned integer | Return the items starting at the given index. |
| maxItems | 32-bit unsigned integer | Maximum number of people to return from the collection starting from the start index. The service may provide a default value if **maxItems** is not present and may return fewer than **maxItems** \(even if the last page of results has not yet been returned\). |

## Authorization <a id="ID4ERD"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | yes | Caller has user's Xbox User ID \(XUID\). | 401 Unauthorized |

## Required Request Headers <a id="ID4EZE"></a>

| Header | Description |
| :--- | :--- |
| Authorization | String. Authorization data for Xbox LIVE. This is typically an encrypted XSTS token. Example value: **XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;**. |

## Optional Request Headers <a id="ID4EYF"></a>

| Header | Description |
| :--- | :--- |
| X-RequestedServiceVersion | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1. |
| Accept | String. Content-Types that the caller accepts in the response. All responses are **application/json**. |

## Request body <a id="ID4E5G"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EJH"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | Success. |
| 400 | Bad Request | Query parameters or user IDs were malformed. |
| 403 | Forbidden | XUID claim could not be parsed from the authorization header. |

## Required Response Headers <a id="ID4EBBAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Length | 32-bit unsigned integer | Length, in bytes, of the response body. Example value: 22. |
| Content-Type | string | MIME type of the response body. This will always be **application/json**. |

## Response body <a id="ID4ENCAC"></a>

If the call is successful, the service returns the total number of people in the caller's people collection, and an array containing the caller's people collection. See [PeopleList \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-peoplelist.md).

### Sample response <a id="ID4EZCAC"></a>

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
            "isFollowingCaller": false,
            "isFavorite": false
        },
    ],
    "totalCount": 3
}
```

## See also <a id="ID4EDDAC"></a>

#### Parent <a id="ID4EFDAC"></a>

[/users/{ownerId}/people](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/people/uri-usersowneridpeople.md)

