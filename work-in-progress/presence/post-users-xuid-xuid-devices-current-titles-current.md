---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: d5e2d12d-ba75-2d04-2805-c69a4c143f73
permalink: en-us/docs/xboxlive/rest/uri-usersxuiddevicescurrenttitlescurrentpost.html
ms.date: 10/12/2017
title: 'POST (/users/xuid({xuid})/devices/current/titles/current)'
description: 'POST (/users/xuid({xuid})/devices/current/titles/current)'
---

# POST \(/users/xuid\({xuid}\)/devices/current/titles/current\)

Update a title with a user's presence. The domain for these URIs is `userpresence.xboxlive.com`.

* [Remarks](post-users-xuid-xuid-devices-current-titles-current.md#ID4EV)
* [URI parameters](post-users-xuid-xuid-devices-current-titles-current.md#ID4EEB)
* [Authorization](post-users-xuid-xuid-devices-current-titles-current.md#ID4EPB)
* [Required Request Headers](post-users-xuid-xuid-devices-current-titles-current.md#ID4ENE)
* [Optional Request Headers](post-users-xuid-xuid-devices-current-titles-current.md#ID4ERG)
* [Request body](post-users-xuid-xuid-devices-current-titles-current.md#ID4ERH)
* [Response body](post-users-xuid-xuid-devices-current-titles-current.md#ID4EKAAC)

## Remarks <a id="ID4EV"></a>

This URI can be used by all titles on non-console platforms to add and update the presence, rich presence, and media presence data for a title.

**SandboxId** is now retrieved from the claim in the XToken and enforced. If the **SandboxId** is not present, then Entertainment Discovery Services \(EDS\) will throw a 400 Bad request error.

## URI parameters <a id="ID4EEB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the target user. |

## Authorization <a id="ID4EPB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | Yes | Xbox User ID \(XUID\) of the caller | 403 Forbidden |
| titleId | Yes | titleId of the title | 403 Forbidden |
| deviceId | Yes for all except Windows and Web | deviceId of the caller | 403 Forbidden |
| deviceType | Yes for all except Web | deviceType of the caller | 403 Forbidden |
| sandboxId | Yes for calls coming from | sandbox of the caller | 403 Forbidden |

## Required Request Headers <a id="ID4ENE"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext. |
| Content-Type | string | The mime type of the body of the request Example value: application/json. |
| Content-Length | string | The length of the request body. Example value: 312. |
| Host | string | Domain name of the server. Example value: presencebeta.xboxlive.com. |

## Optional Request Headers <a id="ID4ERG"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |

## Request body <a id="ID4ERH"></a>

The request object is a [TitleRequest](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-titlerequest.md). Only the properties actually present in the body are updated. Any properties that are not part of the body but exist on the server will not be modified.

### Sample request <a id="ID4EAAAC"></a>

```cpp
{
  id:"12341234",
  placement:"snapped",
  state:"active"
}
```

## Response body <a id="ID4EKAAC"></a>

In case of success, an HTTP status code of 200 or 201 Created is returned, as appropriate.

In case of an error \(HTTP 4xx or 5xx\), appropriate error information is returned in the response body.

## See also <a id="ID4EVAAC"></a>

#### Parent <a id="ID4EXAAC"></a>

[/users/xuid\({xuid}\)/devices/current/titles/current](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/presence/uri-usersxuiddevicescurrenttitlescurrent.md)

#### Further Information <a id="ID4EBBAC"></a>

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

