---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 8d22c668-af9a-1d24-8d65-830c2ce913d7
permalink: en-us/docs/xboxlive/rest/uri-privacyusersrequestoridpermissionvalidateget.html
ms.date: 10/12/2017
title: 'GET (/users/{requestorId}/permission/validate)'
description: 'GET (/users/{requestorId}/permission/validate)'
---

# GET \(/users/{requestorId}/permission/validate\)

Gets a yes-or-no answer about whether the user is allowed to perform the specified action with a target user.

* [URI parameters](get-users-requestorid-permission-validate.md#ID4EQ)
* [Query string parameters](get-users-requestorid-permission-validate.md#ID4E2)
* [Authorization](get-users-requestorid-permission-validate.md#ID4EDC)
* [Required Request Headers](get-users-requestorid-permission-validate.md#ID4EID)
* [Request body](get-users-requestorid-permission-validate.md#ID4ETE)
* [HTTP status codes](get-users-requestorid-permission-validate.md#ID4E5E)
* [Required Response Headers](get-users-requestorid-permission-validate.md#ID4ETG)
* [Response body](get-users-requestorid-permission-validate.md#ID4EKAAC)

## URI parameters <a id="ID4EQ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| requestorId | string | Required. Identifier of the user performing the action. The possible values are `xuid({xuid})` and `me`. This must be a logged-in user. Example value: `xuid(0987654321)`. |

## Query string parameters <a id="ID4E2"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| setting | string enumeration | The PermissionId value to check against. Example value: "CommunicateUsingText". |
| target | string | Identifier of the user on whom the action is to be performed. The possible values are `xuid({xuid})`. Example values: `xuid(0987654321)` |

## Authorization <a id="ID4EDC"></a>

Authorization claims used \| Claim\| Type\| Required?\| Example value\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| Xuid\| 64-bit signed integer\| yes\| 1234567890\|

## Required Request Headers <a id="ID4EID"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example values: `XBL3.0 x=<userhash>;<token>` |
| X-RequestedServiceVersion | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Example value: 1. |

## Request body <a id="ID4ETE"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4E5E"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 400 | The request is invalid. | Examples: incorrect setting IDs, incorrect URIs, etc. |
| 404 | The user specified in the URI does not exist. | The specified resource could not be found. |

## Required Response Headers <a id="ID4ETG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Content-Type | string | The MIME type of the body of the request. Example value: `application/json` |
| Content-Length | string | The number of bytes being sent in the response. Example value: 34 |
| Cache-Control | string | Polite request from the server to specify caching behavior. Example: `no-cache, no-store` |

## Response body <a id="ID4EKAAC"></a>

See [PermissionCheckResponse \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-permissioncheckresponse.md).

### Sample response <a id="ID4EWAAC"></a>

```cpp
{
    "isAllowed": false,
    "reasons":
    [
        {"reason": "BlockedByRequestor"},
        {"reason": "MissingPrivilege", "restrictedSetting": "VideoCommunications"}
    ]
}
```

## See also <a id="ID4EABAC"></a>

#### Parent <a id="ID4ECBAC"></a>

[/users/{requestorId}/permission/validate](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/privacy/uri-privacyusersrequestoridpermissionvalidate.md)

[PermissionId Enumeration](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/enums/privacy-enum-permissionid.md)

