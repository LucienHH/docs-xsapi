---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 6a4c4a13-c968-3271-cbc3-b742a8de98b3
permalink: >-
  en-us/docs/xboxlive/rest/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionnameget.html
ms.date: 10/12/2017
title: >-
  GET
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName})
description: >-
  GET
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName})
---

# GET \(/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}\)

Gets a session object.

> \[!IMPORTANT\] This URI method requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](get-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4ET)
* [URI parameters](get-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EMB)
* [HTTP status codes](get-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EZB)
* [Request body](get-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4E6B)
* [Response body](get-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EKC)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method reads a session document for the specified name and retrieves the session. On success, it returns the session object, with all its attributes, obtained from the server. This method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.GetCurrentSessionAsync**. The parameters for the GET method directly parallel those specified in the **MultiplayerSessionReference** object for the session, passed in the _sessionReference_ parameter of **GetCurrentSessionAsync**.

The wire format for the GET method is shown below.

```cpp
GET /serviceconfigs/00000000-0000-0000-0000-000000000000/sessiontemplates/quick/sessions/00000000-0000-0000-0000-000000000001 HTTP/1.1
      Content-Type: application/json
```

## URI parameters <a id="ID4EMB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | Service configuration identifier \(SCID\). Part 1 of the session identifier. |
| sessionTemplateName | string | Name of the current instance of the session template. Part 2 of the session identifier. |
| sessionName | GUID | Unique ID of the session. Part 3 of the session identifier. |

## HTTP status codes <a id="ID4EZB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4E6B"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EKC"></a>

See the response structure in [MultiplayerSession \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-multiplayersession.md).  


## See also <a id="ID4ETC"></a>

### Parent <a id="ID4EVC"></a>

[/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionname.md)

