---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 7a5ea583-ffca-5da7-a02a-535c52535928
permalink: >-
  en-us/docs/xboxlive/rest/uri-privacyusersrequestoridpermissionvalidatepost.html
ms.date: 10/12/2017
title: 'POST (/users/{requestorId}/permission/validate)'
description: 'POST (/users/{requestorId}/permission/validate)'
---

# POST \(/users/{requestorId}/permission/validate\)

Gets a set of yes-or-no answers about whether the user is allowed to perform specified actions with a set of target users.

* [Remarks](post-users-requestorid-permission-validate.md#ID4EQ)
* [URI parameters](post-users-requestorid-permission-validate.md#ID4ECB)
* [Authorization](post-users-requestorid-permission-validate.md#ID4ENB)
* [Required Request Headers](post-users-requestorid-permission-validate.md#ID4ESC)
* [Request body](post-users-requestorid-permission-validate.md#ID4E4D)
* [HTTP status codes](post-users-requestorid-permission-validate.md#ID4ETE)
* [Required Response Headers](post-users-requestorid-permission-validate.md#ID4EIG)
* [Response body](post-users-requestorid-permission-validate.md#ID4E5H)

## Remarks <a id="ID4EQ"></a>

The request body takes a list of users and a list of settings, and the result is an allowed/blocked result for each user/setting pair.

In cross-network multiplayer scenarios \(where privacy communications checks must be performed between users that have an Xbox User ID \(XUID\) and off-network users that do not\), please refer to [PermissionCheckBatchRequest \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-permissioncheckbatchrequest.md) for User types.

## URI parameters <a id="ID4ECB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| requestorId | string | Required. Identifier of the user performing the action. The possible values are `xuid({xuid})` and `me`. This must be a logged-in user. Example value: `xuid(0987654321)`. |

## Authorization <a id="ID4ENB"></a>

Authorization claims used \| Claim\| Type\| Required?\| Example value\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| Xuid\| 64-bit signed integer\| yes\| 1234567890\|

## Required Request Headers <a id="ID4ESC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example values: `XBL3.0 x=<userhash>;<token>` |
| X-RequestedServiceVersion | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Example value: 1. |

## Request body <a id="ID4E4D"></a>

### Required members <a id="ID4EDE"></a>

See [PermissionCheckBatchRequest \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-permissioncheckbatchrequest.md).

```cpp
{
    "users":
    [
        {"xuid":"12345"},
        {"xuid":"54321"}
    ],
    "permissions":
    [
        "ViewTargetGameHistory",
        "ViewTargetProfile"
    ]
}
```

## HTTP status codes <a id="ID4ETE"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 400 | The request is invalid. | Examples: incorrect setting IDs, incorrect URIs, etc. |
| 404 | The user specified in the URI does not exist. | The specified resource could not be found. |

## Required Response Headers <a id="ID4EIG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Type | string | The MIME type of the body of the request. Example value: `application/json` |
| Content-Length | string | The number of bytes being sent in the response. Example value: 34 |
| Cache-Control | string | Polite request from the server to specify caching behavior. Example: `no-cache, no-store` |

## Response body <a id="ID4E5H"></a>

See [PermissionCheckBatchResponse \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-permissioncheckbatchresponse.md).

### Sample response <a id="ID4ELAAC"></a>

```cpp
{
    "responses":
    [
        {
            "user": {"xuid":"12345"},
            "permissions":
            [
                {
                    "isAllowed":true
                },
                {
                    "isAllowed":true
                }
            ]
        },
        {
            "user": {"xuid":"54321"},
            "permissions":
            [
                {
                    "isAllowed":false,
                    "reasons":
                    [
                        {"reason":"NotAllowed"}
                    ]
                },
                {
                    "isAllowed":false,
                    "reasons":
                    [
                        {"reason":"PrivilegeRest", "restrictedSetting":"AllowProfileViewing"}
                    ]
                }
            ]
        }
    ]
}
```

## See also <a id="ID4EVAAC"></a>

#### Parent <a id="ID4EXAAC"></a>

[/users/{requestorId}/permission/validate](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/privacy/uri-privacyusersrequestoridpermissionvalidate.md)

[PermissionId Enumeration](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/enums/privacy-enum-permissionid.md)

