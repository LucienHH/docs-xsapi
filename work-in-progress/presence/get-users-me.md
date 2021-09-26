---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 726c279b-73fb-02ea-cbff-700ff2dc31af
permalink: en-us/docs/xboxlive/rest/uri-usersmeget.html
ms.date: 10/12/2017
title: GET (/users/me)
description: GET (/users/me)
---

# GET \(/users/me\)

Obtain the current user's [PresenceRecord](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-presencerecord.md) without having to know the user's XUID. The domain for these URIs is `userpresence.xboxlive.com`.

* [Query string parameters](get-users-me.md#ID4EZ)
* [Authorization](get-users-me.md#ID4EIC)
* [Required Request Headers](get-users-me.md#ID4ELD)
* [Optional Request Headers](get-users-me.md#ID4EPF)
* [Request body](get-users-me.md#ID4EPG)
* [Response body](get-users-me.md#ID4E1G)

## Query string parameters <a id="ID4EZ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| level | string | Optional.  |

## Authorization <a id="ID4EIC"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | Yes | Xbox User ID \(XUID\) of the caller | 403 Forbidden |

## Required Request Headers <a id="ID4ELD"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext. |
| Accept | string | Content-Types that are acceptable. The only one supported by Presence is application/json, but it must be specified in the header. |
| Accept-Language | string | Acceptable locale for strings in the response. Example values: en-US. |
| Host | string | Domain name of the server. Example value: presencebeta.xboxlive.com. |

## Optional Request Headers <a id="ID4EPF"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |

## Request body <a id="ID4EPG"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4E1G"></a>

### Sample response <a id="ID4EAH"></a>

This method returns a [PresenceRecord](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-presencerecord.md).

```cpp
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

## See also <a id="ID4EQH"></a>

#### Parent <a id="ID4ESH"></a>

[/users/me](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/presence/uri-usersme.md)

