---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 39c921d1-a166-74b9-fcbc-ea3c0c58cc40
permalink: >-
  en-us/docs/xboxlive/rest/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionnamemembersservernamedelete.html
ms.date: 10/12/2017
title: >-
  DELETE
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/servers/{server-name})
description: >-
  DELETE
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/servers/{server-name})
---

# DELETE \(/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/servers

Removes the specified server from a session.

> \[!IMPORTANT\] This URI method requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [URI parameters](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-servers-server.md#ID4ET)
* [HTTP status codes](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-servers-server.md#ID4E5)
* [Request body](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-servers-server.md#ID4EFB)
* [Response body](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-servers-server.md#ID4EOB)

## URI parameters <a id="ID4ET"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | Service configuration identifier \(SCID\). Part 1 of the session identifier. |
| sessionTemplateName | string | Name of the current instance of the session template. Part 2 of the session identifier. |
| sessionName | GUID | Unique ID of the session. Part 3 of the session identifier. |

## HTTP status codes <a id="ID4E5"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EFB"></a>

See the request structure in [MultiplayerSessionRequest \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-multiplayersessionrequest.md).  


## Response body <a id="ID4EOB"></a>

See the response structure in [MultiplayerSession \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-multiplayersession.md).  


## See also <a id="ID4E1B"></a>

### Parent <a id="ID4E3B"></a>

[/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/servers/{server-name}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionnamemembersservername.md)

