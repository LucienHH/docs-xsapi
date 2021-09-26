---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 5172c7be-371b-f0b1-d1d0-f0981eb2bfa7
permalink: en-us/docs/xboxlive/rest/uri-serviceconfigsscidsessiontemplatesget.html
ms.date: 10/12/2017
title: 'GET (/serviceconfigs/{scid}/sessiontemplates)'
description: 'GET (/serviceconfigs/{scid}/sessiontemplates)'
---

# GET \(/serviceconfigs/{scid}/sessiontemplates\)

Retrieves a set of MPSD session templates.

> \[!IMPORTANT\] This URI method requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [URI parameters](get-serviceconfigs-scid-sessiontemplates.md#ID4ET)
* [HTTP status codes](get-serviceconfigs-scid-sessiontemplates.md#ID4E5)
* [Request body](get-serviceconfigs-scid-sessiontemplates.md#ID4EFB)
* [Response body](get-serviceconfigs-scid-sessiontemplates.md#ID4EQB)

## URI parameters <a id="ID4ET"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | Service configuration identifer \(SCID\). Part 1 of the session ID. |
| sessionTemplateName | string | Name of the current instance of the session template. Part 2 of the session ID. |

## HTTP status codes <a id="ID4E5"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EFB"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EQB"></a>

```cpp
{
    "results": [ {
            "xuid": "9876",    // If the session was found from a xuid, that xuid.
            "startTime": "2009-06-15T13:45:30.0900000Z",
            "sessionRef": {
                "scid": "foo",
                "templateName": "bar",
                "name": "session-seven"
            },
            "accepted": 4,    // Approximate number of non-reserved members.
            "status": "active",    // or "reserved" or "inactive". This is the state of the user in the session, not the session itself. Only present if the session was found using a xuid.
            "visibility": "open",    // or "private", "visible", or "full"
            "joinRestriction": "local",    // or "followed". Only present if 'visibility' is "open" or "full" and the session has a join restriction.
            "myTurn": true,    // Not present is the same as 'false'. Only present if the session was found using a xuid.
            "keywords": [ "one", "two" ]
        }
    ]
}
```

## See also <a id="ID4EZB"></a>

### Parent <a id="ID4E2B"></a>

[/serviceconfigs/{scid}/sessiontemplates](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-serviceconfigsscidsessiontemplates.md)

