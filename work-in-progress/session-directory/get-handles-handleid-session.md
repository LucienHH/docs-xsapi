---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 1f22954c-e77b-69c2-63f4-741fbd965f8f
permalink: en-us/docs/xboxlive/rest/uri-handleshandleidsessionget.html
ms.date: 10/12/2017
title: 'GET (/handles/{handleId}/session)'
description: 'GET (/handles/{handleId}/session)'
---

# GET \(/handles/{handleId}/session\)

Gets a session object for the specified handle identifier.

> \[!IMPORTANT\] This method is used by the 2015 Multiplayer and applies only to that multiplayer version and later. It is intended for use with template contract 104/105 or later, and requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](get-handles-handleid-session.md#ID4ET)
* [URI parameters](get-handles-handleid-session.md#ID4EDB)
* [HTTP status codes](get-handles-handleid-session.md#ID4EOB)
* [Request body](get-handles-handleid-session.md#ID4EVB)
* [Response body](get-handles-handleid-session.md#ID4E6B)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method retrieves a session object from the server, using the supplied service-side pointer to the session \(handle\). The return is the session object, with all its attributes. This method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.GetCurrentSessionByHandleAsync**.

The caller of this method obtains the handle ID from a player's **MultiplayerActivityDetails** object. Alternatively, the caller gets the ID from a protocol activation after a user has accepted a game invite.

## URI parameters <a id="ID4EDB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| handleId | GUID | The unique ID of the handle for the session. |

## HTTP status codes <a id="ID4EOB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EVB"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4E6B"></a>

See the response structure in [MultiplayerSession \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-multiplayersession.md).  


## See also <a id="ID4EIC"></a>

### Parent <a id="ID4EKC"></a>

[/handles/{handleId}/session](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-handleshandleidsession.md)

