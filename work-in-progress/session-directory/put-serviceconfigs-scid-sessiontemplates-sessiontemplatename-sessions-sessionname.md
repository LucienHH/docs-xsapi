---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: e3e4f164-ac5e-cbd9-8c05-2e1ac00dc55e
permalink: >-
  en-us/docs/xboxlive/rest/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionnameput.html
ms.date: 10/12/2017
title: >-
  PUT
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName})
description: >-
  PUT
  (/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName})
---

# PUT \(/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}\)

Creates, updates, or joins a session.

> \[!IMPORTANT\] This URI method requires a header element of X-Xbl-Contract-Version: 104/105 or later on every request.

* [Remarks](put-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4ET)
* [URI parameters](put-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EYB)
* [HTTP status codes](put-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EFC)
* [Request body](put-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4EOC)
* [Response body](put-serviceconfigs-scid-sessiontemplates-sessiontemplatename-sessions-sessionname.md#ID4E4C)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method creates, joins, or updates a session, depending on what subset of the same JSON request body template is sent. On success, it returns a **MultiplayerSession** object containing the response returned from the server. The attributes in it might be different from the attributes in the passed-in **MultiplayerSession** object. This method can be wrapped by **Microsoft.Xbox.Services.Multiplayer.MultiplayerService.WriteSessionAsync**.

Session creation and update operations use PUT with an application/json body that represents the changes to apply. The operations are idempotent, that is, multiple applications of the same changes have no additional effect.

The JSON request body mirrors the session data structure. All fields and sub-fields are optional.

The wire format for the PUT method's session creation or joining mode is shown below.

> \[!NOTE\] Take care using this pattern. Upates are applied blindly, no matter the current state of the session.

```cpp
PUT /serviceconfigs/00000000-0000-0000-0000-000000000000/sessiontemplates/quick/sessions/00000000-0000-0000-0000-000000000001 HTTP/1.1
         Content-Type: application/json
```

The wire format for the PUT method's session update mode is shown below.

```cpp
PUT /serviceconfigs/00000000-0000-0000-0000-000000000000/sessiontemplates/quick/sessions/00000000-0000-0000-0000-000000000001 HTTP/1.1
         Content-Type: application/json
```

The wire format for the PUT method to update session properties is shown below. It is equivalent to a PUT operation to the session URI with a body having nothing but the object below as properties. The difference is that this operation returns error code 404 Not Found if the session does not exist. This operation supports the If-Match header.

```cpp
PUT /serviceconfigs/00000000-0000-0000-0000-000000000000/sessiontemplates/quick/sessions/00000000-0000-0000-0000-000000000001/properties HTTP/1.1
         Content-Type: application/json

         { "system": { }, "custom": { } }
```

## URI parameters <a id="ID4EYB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | Service configuration identifier \(SCID\). Part 1 of the session identifier. |
| sessionTemplateName | string | Name of the current instance of the session template. Part 2 of the session identifier. |
| sessionName | GUID | Unique ID of the session. Part 3 of the session identifier. |

## HTTP status codes <a id="ID4EFC"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EOC"></a>

Below is a sample request body for creating or joining a session. The following members of the request body are optional. All other possible members are prohibited in a request.

| Member | Type | Description |
| :--- | :--- | :--- |
| constants | object | Read-only settings that are merged with the session template to produce the constants for the session. |
| properties | object | Changes to be merged into the session properties. |
| members.me | object | Constants and properties that work much like their top-level counterparts. Any PUT method requires the user to be a member of the session, and adds the user if necessary. If "me" is specified as null, the member making the request is removed from the session. |
| members | object | Other objects that represent users to add to the session, keyed by a zero-based index. The number of members in a request always starts with 0, even if the session already contains members. Members are added to the session in the order in which they appear in the request. Member properties can only be set by the user to whom they belong. |
| servers | object | Values indicating updates and additions to the session's set of associated server participants. If a server is specified as null, that server entry is removed from the session. |

```cpp
{
  "properties": {
    "custom": {"KANWE": "MGMSY"},
    "system": {}
  },
  "constants": {
    "custom": {},
    "system": {"visibility": "open"}
  },
  "members": {
    "reserve_0": {
    "constants": {
      "custom": {"type": "leader"},
      "system": {"xuid": "5500461"} }}
   }
}
```

## Response body <a id="ID4E4C"></a>

Sample response body for creating or joining a session:

```cpp
{
  "contractVersion": 104,
  "correlationId": "0FE81338-EE96-46E3-A3B5-2DBBD6C41C3B",
  "nextTimer": "2009-06-15T13:45:30.0900000Z",

  "initializing": {
    "stage": "measuring",
    "stageStartTime": "2009-06-15T13:45:30.0900000Z",
    "episode": 1
  },

  "hostCandidates": [ "ab90a362", "99582e67" ],

  "constants": {
    "system": {"visibility": "open"},
    "custom": {}
  },

  "properties": {
     "system": { "turn": [] },
     "custom": { "myProperty": "myValue" }
  },

  "members": {
      "1": {
        "properties": {
        "system": { },
        "custom": { }
      },

      "constants": {
        "system": { "xuid": "5500461" },
        "custom": { }
      }

      "gamertag": "stacy",
      "deviceToken": "9f4032ba7",
      "reserved": true,
      "activeTitleId": "8397267",
      "joinTime": "2009-06-15T13:45:30.0900000Z",
      "turn": true,
      "initializationFailure": "latency",
      "initializationEpisode": 1,
      "next": 4
    },
  },

  "membersInfo": {
      "first": 1,
      "next": 4,
      "count": 1,
      "accepted": 0
  },

  "servers": {
      "name": {
        "constants": { },
        "properties": { }
      }
  }
}
```

## See also <a id="ID4EID"></a>

### Parent <a id="ID4EKD"></a>

[/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/session-directory/uri-serviceconfigsscidsessiontemplatessessiontemplatenamesessionssessionname.md)

