---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: d9ff3f21-aa70-af41-afa1-9a9244fcdb95
permalink: en-us/docs/xboxlive/rest/uri-scidhoppernameticketiddelete.html
ms.date: 10/12/2017
title: 'DELETE (/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid})'
description: 'DELETE (/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid})'
---

# DELETE \(/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid}\)

Removes a match ticket.

> \[!IMPORTANT\] This method is intended for use with contract 103 or later, and requires a header element of X-Xbl-Contract-Version: 103 or later on every request.

* [Remarks](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4ET)
* [URI parameters](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4E2)
* [Authorization](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4EGB)
* [HTTP status codes](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4EOC)
* [Request body](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4EXC)
* [Response body](delete-serviceconfigs-scid-hoppers-hoppername-tickets-ticketid.md#ID4ECD)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method deletes the specified ticket ID from the named hopper at the service configuration ID \(SCID\) level. This method can be wrapped by **Microsoft.Xbox.Services.Matchmaking.MatchmakingService.DeleteMatchTicketAsync**.  


## URI parameters <a id="ID4E2"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | The service configuration identifier \(SCID\) for the session. |
| name | string | The name of the hopper. |
| ticketId | GUID | The ticket ID. |

## Authorization <a id="ID4EGB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID \(user ID\) | yes | The user making the request must be a member of the ticket session referred to by the ticket. | 403 |
| Privileges and Device Type | yes | When the user's deviceType is set to console, only users with the multiplayer privilege in their claims are allowed to make calls to the matchmaking service. | 403 |

## HTTP status codes <a id="ID4EOC"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EXC"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4ECD"></a>

No objects are sent in the body of the response.

## See also <a id="ID4EPD"></a>

### Parent <a id="ID4ERD"></a>

[/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/matchmaking/uri-scidhoppernameticketid.md)

