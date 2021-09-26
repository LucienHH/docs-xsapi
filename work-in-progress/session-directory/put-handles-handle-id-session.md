---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: d8a3d473-1192-ec0c-3935-c301f4f61e03
permalink: en-us/docs/xboxlive/rest/uri-handleshandleidsessionput.html
ms.date: 10/12/2017
title: 'PUT (/handles/{handle-id}/session)'
description: 'PUT (/handles/{handle-id}/session)'
---

# PUT \(/handles/{handle-id}/session\)

Creates or updates a session by dereferencing a handle.

> \[!IMPORTANT\] This method is used by the 2015 Multiplayer and applies only to that multiplayer version and later. It is intended for use with template contract 104/105 or later, and requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](put-handles-handle-id-session.md#ID4ET)
* [URI parameters](put-handles-handle-id-session.md#ID4ECB)
* [HTTP status codes](put-handles-handle-id-session.md#ID4ENB)
* [Request body](put-handles-handle-id-session.md#ID4EUB)
* [Response body](put-handles-handle-id-session.md#ID4E6B)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method writes a new or updated session to the multiplayer service, using the supplied session handle ID. The result is an object representing the new or updated session as returned from the server. This method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.WriteSessionByHandleAsync**.

The caller of this method obtains the handle ID from a player's **MultiplayerActivityDetails** object. Alternatively, the caller gets the ID from a protocol activation after a user has accepted a game invite.

## URI parameters <a id="ID4ECB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| handleId | GUID | The unique ID of the handle for the session. |

## HTTP status codes <a id="ID4ENB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EUB"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4E6B"></a>

No objects are sent in the body of the response.

## See also <a id="ID4EKC"></a>

### Parent <a id="ID4EMC"></a>

[/handles/{handleId}/session](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-handleshandleidsession.md)

