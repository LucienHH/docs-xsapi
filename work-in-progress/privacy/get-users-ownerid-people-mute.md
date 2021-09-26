---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 49b6c830-95f7-3200-0e46-0a1af573971c
permalink: en-us/docs/xboxlive/rest/uri-privacyusersowneridpeoplemuteget.html
ms.date: 10/12/2017
title: 'GET (/users/{ownerId}/people/mute)'
description: 'GET (/users/{ownerId}/people/mute)'
---

# GET \(/users/{ownerId}/people/mute\)

Gets the mute list for a user.

* [Remarks](get-users-ownerid-people-mute.md#ID4EQ)
* [URI parameters](get-users-ownerid-people-mute.md#ID4EZ)
* [Effect of privacy settings on resource](get-users-ownerid-people-mute.md#ID4EEB)
* [Authorization](get-users-ownerid-people-mute.md#ID4ENB)
* [Required Request Headers](get-users-ownerid-people-mute.md#ID4ESC)
* [Request body](get-users-ownerid-people-mute.md#ID4EPE)
* [HTTP status codes](get-users-ownerid-people-mute.md#ID4E1E)
* [Required Response Headers](get-users-ownerid-people-mute.md#ID4E3G)
* [Response body](get-users-ownerid-people-mute.md#ID4ETAAC)

## Remarks <a id="ID4EQ"></a>

If a target is given, this URI returns only that user if the user is on the mute list, or else empty if the user is not.

## URI parameters <a id="ID4EZ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Required. Identifier of the user whose resource is being accessed. The possible values are "me", `xuid({xuid})`, or gt\({gamertag}\). Must be the authenticated user. Example values: `xuid(2603643534573581)`, `gt(SomeGamertag)`. Maximum size: none. |

## Effect of privacy settings on resource <a id="ID4EEB"></a>

None.

## Authorization <a id="ID4ENB"></a>

Authorization claims used \| Claim\| Type\| Required?\| Example value\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| Xuid\| 64-bit signed integer\| yes\| 1234567890\|

## Required Request Headers <a id="ID4ESC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: `Xauth=<authtoken>`. Maximum size: none. |
| X-RequestedServiceVersion | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the authorization token, and so on. Example values: `1`, `vnext`. Maximum size: none. |
| Accept | string | Content-Types that are acceptable. Example value: `application/json`. Maximum size: none. |

## Request body <a id="ID4EPE"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4E1E"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | Successful request for the mute list. |
| 400 | Bad Request | The target ID specified in the URI is not valid. |
| 403 | Forbidden | The owner specified in the URI is not the authenticated user. |
| 404 | Not Found | The owner specified in the URI does not exist. |

## Required Response Headers <a id="ID4E3G"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Type | string | The MIME type of the body of the request. Example value: `application/json` |
| Content-Length | string | The number of bytes being sent in the response. Example value: 34 |
| Cache-Control | string | Polite request from the server to specify caching behavior. Example: `no-cache, no-store` |

## Response body <a id="ID4ETAAC"></a>

### Sample response <a id="ID4EZAAC"></a>

See [UserList](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-userlist.md).

```cpp
{
    "users":
    [
        { "xuid":"12345" },
        { "xuid":"23456" }
    ]
}
```

## See also <a id="ID4EJBAC"></a>

#### Parent <a id="ID4ELBAC"></a>

[/users/{ownerId}/people/mute](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/privacy/uri-privacyusersowneridpeoplemute.md)

