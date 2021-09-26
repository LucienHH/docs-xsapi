---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 2fd37b8e-b886-14f2-3399-59f530d85e4e
permalink: en-us/docs/xboxlive/rest/uri-usersowneridpeopletargetidget.html
ms.date: 10/12/2017
title: 'GET (/users/{ownerId}/people/{targetid})'
description: 'GET (/users/{ownerId}/people/{targetid})'
---

# GET \(/users/{ownerId}/people/{targetid}\)

Gets a person by target ID from caller's people collection. The domain for these URIs is `social.xboxlive.com`.

* [Remarks](get-users-ownerid-people-targetid.md#ID4EV)
* [URI parameters](get-users-ownerid-people-targetid.md#ID4E5)
* [Authorization](get-users-ownerid-people-targetid.md#ID4EJB)
* [Required Request Headers](get-users-ownerid-people-targetid.md#ID4ERC)
* [Optional Request Headers](get-users-ownerid-people-targetid.md#ID4EQD)
* [Request body](get-users-ownerid-people-targetid.md#ID4EWE)
* [HTTP status codes](get-users-ownerid-people-targetid.md#ID4EBF)
* [Required Response Headers](get-users-ownerid-people-targetid.md#ID4EDH)
* [Response body](get-users-ownerid-people-targetid.md#ID4EQAAC)

## Remarks <a id="ID4EV"></a>

GET operations won't modify any resources so this will produce the same results if executed once or multiple times.

## URI parameters <a id="ID4E5"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| ownerId | string | Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid\({xuid}\), or gt\({gamertag}\). |
| targetid | string | Identifier of the user whose data is being retrieved from the owner's People list, either an Xbox User ID \(XUID\) or a gamertag. Example values: xuid\(2603643534573581\), gt\(SomeGamertag\). |

## Authorization <a id="ID4EJB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | yes | Caller has user's Xbox User ID \(XUID\). | 401 Unauthorized |

## Required Request Headers <a id="ID4ERC"></a>

| Header | Description |
| :--- | :--- |
| Authorization | String. Authorization data for Xbox LIVE. This is typically an encrypted XSTS token. Example value: **XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;**. |

## Optional Request Headers <a id="ID4EQD"></a>

| Header | Description |
| :--- | :--- |
| X-RequestedServiceVersion | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1. |
| Accept | String. Content-Types that the caller accepts in the response. All responses are **application/json**. |

## Request body <a id="ID4EWE"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EBF"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | Success. |
| 400 | Bad Request | User IDs were malformed. |
| 403 | Forbidden | XUID claim could not be parsed from the authorization header. |
| 404 | Not Found | Target user was not found in the owner's People list. |

## Required Response Headers <a id="ID4EDH"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Length | 32-bit unsigned integer | Length, in bytes, of the response body. Example value: 22. |
| Content-Type | string | MIME type of the response body. This will always be **application/json**. |

## Response body <a id="ID4EQAAC"></a>

If the call is successful, the service returns the target person. See [Person \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-person.md).

### Sample response <a id="ID4E3AAC"></a>

```cpp
{
    "xuid": "2603643534573581",
    "isFavorite": false,
    "isFollowingCaller": false,
    "socialNetworks": ["LegacyXboxLive"]
}
```

## See also <a id="ID4EGBAC"></a>

#### Parent <a id="ID4EIBAC"></a>

[/users/{ownerId}/people/{targetid}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/people/uri-usersowneridpeopletargetid.md)

