---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: e3420658-4738-8e80-44da-8281726fce01
permalink: en-us/docs/xboxlive/rest/uri-privacyusersxuidpeopleavoidget.html
ms.date: 10/12/2017
title: 'GET (/users/{ownerId}/people/avoid)'
description: 'GET (/users/{ownerId}/people/avoid)'
---

# GET \(/users/{ownerId}/people/avoid\)

Gets the Avoid list for a user.

* [Remarks](get-users-ownerid-people-avoid.md#ID4EQ)
* [URI parameters](get-users-ownerid-people-avoid.md#ID4EZ)
* [Authorization](get-users-ownerid-people-avoid.md#ID4EEB)
* [Required Request Headers](get-users-ownerid-people-avoid.md#ID4EJC)
* [HTTP status codes](get-users-ownerid-people-avoid.md#ID4EYD)
* [Required Response Headers](get-users-ownerid-people-avoid.md#ID4E1F)
* [Response body](get-users-ownerid-people-avoid.md#ID4ESH)

## Remarks <a id="ID4EQ"></a>

If a target is given, only returns that user if they're on the block list, or else empty if they're not.

## URI parameters <a id="ID4EZ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Required. Identifier of the user whose resource is being accessed. The possible values are `xuid({xuid})`. Must be the authenticated user. Example value: `xuid(2603643534573581)`. Maximum size: none. |

## Authorization <a id="ID4EEB"></a>

Authorization claims used \| Claim\| Type\| Required?\| Example value\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| Xuid\| 64-bit signed integer\| yes\| 1234567890\|

## Required Request Headers <a id="ID4EJC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: `Xauth=<authtoken>`. Maximum size: none. |
| Accept | string | Content-Types that are acceptable. Example value: `application/json`. Maximum size: none. |

## HTTP status codes <a id="ID4EYD"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 400 | Bad Request | The target ID specified in the URI is not valid. |
| 403 | Forbidden | The owner specified in the URI is not the authenticated user. |
| 404 | Not Found | The owner specified in the URI does not exist. |

## Required Response Headers <a id="ID4E1F"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Type | string | The MIME type of the body of the request. Example value: `application/json`. Maximum size: none. |
| Content-Length | string | The number of bytes being sent in the response. Example value: 34. Maximum size: none. |
| Cache-Control | string | Polite request from the server to specify caching behavior. Example value: `application/json`. Maximum size: none. |

## Response body <a id="ID4ESH"></a>

### Sample response <a id="ID4EYH"></a>

```cpp
{
    "users":
    [
        { "xuid":"12345" },
        { "xuid":"23456" }
    ]
}
```

## See also <a id="ID4EDAAC"></a>

#### Parent <a id="ID4EFAAC"></a>

[/users/{ownerId}/people/avoid](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/privacy/uri-privacyusersxuidpeopleavoid.md)

