---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: aa5de623-7787-a47c-b7e4-305693b9fe35
permalink: >-
  en-us/docs/xboxlive/rest/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionnamemembersmedelete.html
ms.date: 10/12/2017
title: >-
  DELETE
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/me)
description: >-
  DELETE
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/me)
---

# DELETE \(/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members

Removes a member from a session.

> \[!IMPORTANT\] This URI method requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-members-me.md#ID4ET)
* [URI parameters](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-members-me.md#ID4E3)
* [HTTP status codes](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-members-me.md#ID4EHB)
* [Request body](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-members-me.md#ID4ENB)
* [Response body](delete-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname-members-me.md#ID4EYB)

## Remarks <a id="ID4ET"></a>

All session member resource operations require an Xbox User ID \(XUID\) authorization.  


## URI parameters <a id="ID4E3"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | Service configuration identifier \(SCID\). Part 1 of the session identifier. |
| sessionTemplateName | string | Name of the current instance of the session template. Part 2 of the session identifier. |
| sessionName | GUID | Unique ID of the session. Part 3 of the session identifier. |

## HTTP status codes <a id="ID4EHB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4ENB"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EYB"></a>

See the response structure in [MultiplayerSession \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-multiplayersession.md).  


## See also <a id="ID4EBC"></a>

### Parent <a id="ID4EDC"></a>

[/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/me](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionnamemembersme.md)

