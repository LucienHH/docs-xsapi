---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: c54eede3-3e3b-2cbe-1be9-8bf3a48171bc
permalink: en-us/docs/xboxlive/rest/uri-usersxuidinboxmessageiddelete.html
ms.date: 10/12/2017
title: 'DELETE (/users/xuid({xuid})/inbox/{messageId})'
description: 'DELETE (/users/xuid({xuid})/inbox/{messageId})'
---

# DELETE \(/users/xuid\({xuid}\)/inbox/{messageId}\)

Deletes a user message in the user's inbox. The domain for these URIs is `msg.xboxlive.com`.

* [Remarks](delete-users-xuid-xuid-inbox-messageid.md#ID4EV)
* [URI parameters](delete-users-xuid-xuid-inbox-messageid.md#ID4ECB)
* [Authorization](delete-users-xuid-xuid-inbox-messageid.md#ID4EPB)
* [Request body](delete-users-xuid-xuid-inbox-messageid.md#ID4E1B)
* [HTTP status codes](delete-users-xuid-xuid-inbox-messageid.md#ID4EHC)
* [JavaScript Object Notation \(JSON\) Response](delete-users-xuid-xuid-inbox-messageid.md#ID4EAE)
* [Effect of privacy settings on resource](delete-users-xuid-xuid-inbox-messageid.md#ID4EYF)

## Remarks <a id="ID4EV"></a>

The delete operation is idempotent.

The only content type this API supports is "application/json", which is required in the HTTP headers of each call.

## URI parameters <a id="ID4ECB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | unsigned 64-bit integer | The Xbox User ID \(XUID\) of the player who is making the request. |
| messageId | string\[50\] | ID of the message being retrieved or deleted. |

## Authorization <a id="ID4EPB"></a>

You must have your own user claim to delete a user message.

## Request body <a id="ID4E1B"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EHC"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Description |
| :--- | :--- |
| 204 | Success. |
| 403 | The XUID cannot be converted or a valid XUID claim cannot be found. |
| 404 | Message ID in the URI cannot be parsed or an XUID is missing in the URI. |
| 500 | General server-side error. |

## JavaScript Object Notation \(JSON\) Response <a id="ID4EAE"></a>

In case of error, the service may return an errorResponse object, which may contain values from the environment of the service.

| Property | Type | Description |
| :--- | :--- | :--- |
| errorSource | string | An indication of where the error originated. |
| errorCode | int | Numeric code associated with the error \(can be null\). |
| errorMessage | string | Details of the error if configured to show details. |

## Effect of privacy settings on resource <a id="ID4EYF"></a>

Only you can delete your own user messages.

## See also <a id="ID4EDG"></a>

### Parent <a id="ID4EFG"></a>

[/users/xuid\({xuid}\)/inbox](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/users/uri-usersxuidinbox.md)

### Reference  [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md) <a id="ID4ETG"></a>

