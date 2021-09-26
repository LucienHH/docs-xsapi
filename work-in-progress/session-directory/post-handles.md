---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 21f3e289-0b0e-2731-befb-bd4c0d71973e
permalink: en-us/docs/xboxlive/rest/uri-handlespost.html
ms.date: 10/12/2017
title: POST (/handles)
description: POST (/handles)
---

# POST \(/handles\)

Sets the multiplayer session for the user's current activity, and invites session members if required.

> \[!IMPORTANT\] This method is used by the 2015 Multiplayer and applies only to that multiplayer version and later. It is intended for use with template contract 104/105 or later, and requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](post-handles.md#ID4ET)
* [URI parameters](post-handles.md#ID4EHB)
* [HTTP status codes](post-handles.md#ID4EPB)
* [Request body](post-handles.md#ID4EVB)
* [Response body](post-handles.md#ID4EJC)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method can be used to set the session for current activity. In this case, the method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.SetActivityAsync**. The request body must define the session reference, using the **sessionRef** object in the JSON file, with the type field to "activity". No response body is retrieved. For definitions of the items specified in a session reference, see **Microsoft.Xbox.Services.Multiplayer.MultiplayerSessionReference**.

This POST method can also be used to invite users specified by the handles to a session. In this case, the method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.SendInvitesAsync**. This use of the POST method requires your request body to define the session reference, but with the type field set to "invite". The response body is an invite handle.

## URI parameters <a id="ID4EHB"></a>

None

## HTTP status codes <a id="ID4EPB"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EVB"></a>

### Request body for setting activity <a id="ID4E1B"></a>

```cpp
{
  "version": 1,
  "type": "activity",
  "sessionRef": {
    "scid": "bd6c41c3-01c3-468a-a3b5-3e0fe8133862",
    "templateName": "deathmatch",
    // The session name is optional in a POST; if not specified, MPSD fills in a GUID.//
    "name": "session-49"
  },
}
```

### Request body for sending invites <a id="ID4EBC"></a>

```cpp
{
  // Common handle fields
  "id: "47ca0049-a5ba-4bc1-aa22-fcf834ce4c13",
  "version": 1,
  "type": "invite",
  "sessionRef": {
    "scid": "bd6c41c3-01c3-468a-a3b5-3e0fe8133862",
    "templateName": "deathmatch",
    "name": "session-49"
   },
   "inviteAttributes": {
     "titleId" : {titleId}, // The title being invited to, in decimal uint32. This value is used to find the title name and/or image.
     "context" : {context}, // The title defined context token. Must be 256 characters or less when URI-encoded.
     "contextString" : {contextstring}, // The string name of a custom invite string to display in the invite notification.
     "senderString" : {sender} // The string name of the sender when the sender is a service.
   },
   "invitedXuid": "3210",
}
```

## Response body <a id="ID4EJC"></a>

### Response body for setting activity <a id="ID4EOC"></a>

None.  


### Response body for sending invites <a id="ID4ESC"></a>

An invite handle.  


## See also <a id="ID4EXC"></a>

#### Parent <a id="ID4EZC"></a>

[/handles](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-handles.md)

