---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: c97ef943-8bea-8a41-90d7-faea874284c8
permalink: en-us/docs/xboxlive/rest/uri-usersxuidget.html
ms.date: 10/12/2017
title: 'GET (/users/xuid({xuid}))'
description: 'GET (/users/xuid({xuid}))'
---

# GET \(/users/xuid\({xuid}\)\)

Discover the presence of another user or client. The domain for these URIs is `userpresence.xboxlive.com`.

* [Remarks](get-users-xuid-xuid.md#ID4EV)
* [URI parameters](get-users-xuid-xuid.md#ID4EDB)
* [Query string parameters](get-users-xuid-xuid.md#ID4EOB)
* [Authorization](get-users-xuid-xuid.md#ID4E4C)
* [Effect of privacy settings on resource](get-users-xuid-xuid.md#ID4EAE)
* [Required Request Headers](get-users-xuid-xuid.md#ID4EVH)
* [Optional Request Headers](get-users-xuid-xuid.md#ID4E1BAC)
* [Request body](get-users-xuid-xuid.md#ID4E1CAC)
* [Response body](get-users-xuid-xuid.md#ID4EFDAC)

## Remarks <a id="ID4EV"></a>

The response can be filtered to provide part of the [PresenceRecord](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-presencerecord.md) if the consumer is not interested in the entire object.

> \[!NOTE\] The data returned is constrained by privacy and content isolation rules.

## URI parameters <a id="ID4EDB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the target user. |

## Query string parameters <a id="ID4EOB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| level | string | Optional.  |

## Authorization <a id="ID4E4C"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | Yes | Xbox User ID \(XUID\) of the caller | 403 Forbidden |

## Effect of privacy settings on resource <a id="ID4EAE"></a>

This method always returns 200 OK, but might not return content in the response body.

| Requesting User | Target User's Privacy Setting | Behavior |
| :--- | :--- | :--- |
| me | - | 200 OK |
| friend | everyone | 200 OK |
| friend | friends only | 200 OK |
| friend | blocked | 200 OK |
| non-friend user | everyone | 200 OK |
| non-friend user | friends only | 200 OK |
| non-friend user | blocked | 200 OK |
| third-party site | everyone | 200 OK |
| third-party site | friends only | 200 OK |
| third-party site | blocked | 200 OK |

## Required Request Headers <a id="ID4EVH"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext. |
| Accept | string | Content-Types that are acceptable. The only one supported by Presence is application/json, but it must be specified in the header. |
| Accept-Language | string | Acceptable locale for strings in the response. Example values: en-US. |
| Host | string | Domain name of the server. Example value: presencebeta.xboxlive.com. |

## Optional Request Headers <a id="ID4E1BAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |

## Request body <a id="ID4E1CAC"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EFDAC"></a>

### Sample response <a id="ID4ELDAC"></a>

If there is no existing record for the user, a record with no devices is returned.

```javascript
{
  xuid:"0123456789",
  state:"online",
  devices:
  [{
    type:"D",
    titles:
    [{
      id:"12341234",
      name:"Contoso 5",
      state:"active",
      placement:"fill",
      timestamp:"2012-09-17T07:15:23.4930000",
      activity:
      {
        richPresence:"Team Deathmatch on Nirvana"
      }
    },
    {
      id:"12341235",
      name:"Contoso Waypoint",
      timestamp:"2012-09-17T07:15:23.4930000",
      placement:"snapped",
      state:"active",
      activity:
      {
        richPresence:"Using radar"
      }
    }]
  },
  {
    type:W8,
    titles:
    [{
      id:"23452345",
      name:"Contoso Gamehelp",
      state:"active",
      placement:"full",
      timestamp:"2012-09-17T07:15:23.4930000",
      activity:
      {
        richPresence:"Nirvana page",
      }
    }]
  }]
}
```

## See also <a id="ID4EXDAC"></a>

#### Parent <a id="ID4EZDAC"></a>

[/users/xuid\({xuid}\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/presence/uri-usersxuid.md)

