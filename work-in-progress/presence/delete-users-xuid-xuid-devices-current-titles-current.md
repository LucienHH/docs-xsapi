---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 3bf75247-0a2a-0e4c-afcc-9e7654a89648
permalink: en-us/docs/xboxlive/rest/uri-usersxuiddevicescurrenttitlescurrentdelete.html
ms.date: 10/12/2017
title: 'DELETE (/users/xuid({xuid})/devices/current/titles/current)'
description: 'DELETE (/users/xuid({xuid})/devices/current/titles/current)'
---

# DELETE \(/users/xuid\({xuid}\)/devices/current/titles/current\)

Remove the presence of a closing title, instead of waiting for the [PresenceRecord](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-presencerecord.md) to expire. The domain for these URIs is `userpresence.xboxlive.com`.

* [URI parameters](delete-users-xuid-xuid-devices-current-titles-current.md#ID4EZ)
* [Authorization](delete-users-xuid-xuid-devices-current-titles-current.md#ID4EEB)
* [Required Request Headers](delete-users-xuid-xuid-devices-current-titles-current.md#ID4ERD)
* [Optional Request Headers](delete-users-xuid-xuid-devices-current-titles-current.md#ID4EVF)
* [Request body](delete-users-xuid-xuid-devices-current-titles-current.md#ID4EVG)
* [Response body](delete-users-xuid-xuid-devices-current-titles-current.md#ID4EAH)

## URI parameters <a id="ID4EZ"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | 64-bit unsigned integer | Xbox User ID \(XUID\) of the target user. |

## Authorization <a id="ID4EEB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID | Yes | Xbox User ID \(XUID\) of the caller | 403 Forbidden |
| titleId | Yes | titleId of the title | 403 Forbidden |
| deviceId | Yes for all except Windows and Web | deviceId of the caller | 403 Forbidden |
| deviceType | Yes for all except Web | deviceType of the caller | 403 Forbidden |

## Required Request Headers <a id="ID4ERD"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext. |
| Content-Type | string | The mime type of the body of the request Example value: application/json. |
| Content-Length | string | The length of the request body. Example value: 312. |
| Host | string | Domain name of the server. Example value: presencebeta.xboxlive.com. |

## Optional Request Headers <a id="ID4EVF"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |

## Request body <a id="ID4EVG"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EAH"></a>

In case of success, HTTP status code is returned with no response body.

In case of error \(HTTP 4xx or 5xx\), appropriate error information is returned in the response body.

## See also <a id="ID4ELH"></a>

### Parent <a id="ID4ENH"></a>

[/users/xuid\({xuid}\)/devices/current/titles/current](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/presence/uri-usersxuiddevicescurrenttitlescurrent.md)

