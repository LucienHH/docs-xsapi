---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 71cceff4-3a74-dc05-12db-cfe3f20a8aea
permalink: en-us/docs/xboxlive/rest/uri-handleshandleiddelete.html
ms.date: 10/12/2017
title: 'DELETE (/handles/{handleId})'
description: 'DELETE (/handles/{handleId})'
---

# DELETE \(/handles/{handleId}\)

Deletes handles specified by handle ID.

> \[!IMPORTANT\] This method is used by the 2015 Multiplayer and applies only to that multiplayer version and later. It is intended for use with template contract 104/105 or later, and requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](delete-handles-handleid.md#ID4ET)
* [URI parameters](delete-handles-handleid.md#ID4EAB)
* [HTTP status codes](delete-handles-handleid.md#ID4ELB)
* [Request body](delete-handles-handleid.md#ID4ESB)
* [Response body](delete-handles-handleid.md#ID4E4B)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method deletes the handles for the specified ID and clears the user's current activity for the session. This method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.ClearActivityAsync**.  


## URI parameters <a id="ID4EAB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| handleId | GUID | The unique ID of the handle for the session. |

## HTTP status codes <a id="ID4ELB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4ESB"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4E4B"></a>

No objects are sent in the body of the response.

## See also <a id="ID4EIC"></a>

### Parent <a id="ID4EKC"></a>

[/handles/{handleId}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-handleshandleid.md)

