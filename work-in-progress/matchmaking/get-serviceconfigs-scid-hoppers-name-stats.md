---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 4de5b07d-93e1-8ff0-05dd-1d3bb1802088
permalink: en-us/docs/xboxlive/rest/uri-serviceconfigsscidhoppershoppernamestatsget.html
ms.date: 10/12/2017
title: 'GET (/serviceconfigs/{scid}/hoppers/{name}/stats)'
description: 'GET (/serviceconfigs/{scid}/hoppers/{name}/stats)'
---

# GET \(/serviceconfigs/{scid}/hoppers/{name}/stats\)

Gets the statistics for a hopper.

> \[!IMPORTANT\] This method is intended for use with contract 103 or later, and requires a header element of X-Xbl-Contract-Version: 103 or later on every request.

* [Remarks](get-serviceconfigs-scid-hoppers-name-stats.md#ID4ET)
* [URI parameters](get-serviceconfigs-scid-hoppers-name-stats.md#ID4E5)
* [Authorization](get-serviceconfigs-scid-hoppers-name-stats.md#ID4EJB)
* [HTTP status codes](get-serviceconfigs-scid-hoppers-name-stats.md#ID4E3C)
* [Request body](get-serviceconfigs-scid-hoppers-name-stats.md#ID4EFD)
* [Response body](get-serviceconfigs-scid-hoppers-name-stats.md#ID4EQD)

## Remarks <a id="ID4ET"></a>

This HTTP/REST method gets statistics from the named hopper at the service configuration ID \(SCID\) level. This method can be wrapped by the **Microsoft.Xbox.Services.Matchmaking.MatchmakingService.GetHopperStatisticsAsync** API.  


## URI parameters <a id="ID4E5"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| scid | GUID | The service configuration identifier \(SCID\) for the session. |
| name | string | The name of the hopper. |

## Authorization <a id="ID4EJB"></a>

| Type | Required | Description | Response if missing |
| :--- | :--- | :--- | :--- |
| XUID \(user ID\) | yes | The user making the request must be a member of the ticket session referred to by the ticket. | 403 |
| Privileges and Device Type | yes | When the user's deviceType is set to console, only users with the multiplayer privilege in their claims are allowed to make calls to the matchmaking service. | 403 |
| Title ID/Proof of Purchase/Device Type | yes | The title that is being matched into must allow matchmaking for the specified title claim, device type combination. | 403 |

## HTTP status codes <a id="ID4E3C"></a>

The service returns an HTTP status code as it applies to MPSD.  


## Request body <a id="ID4EFD"></a>

No objects are sent in the body of this request.

## Response body <a id="ID4EQD"></a>

| Member | Type | Description |
| :--- | :--- | :--- |
| hopperName | string | The name of the selected hopper. |
| waitTime | 32-bit signed integer | Average matching time for the hopper \(an integral number of seconds\). |
| population | 32-bit signed integer | The number of people waiting for matches in the hopper. |

### Sample response <a id="ID4E1D"></a>

```cpp
{
      "hopperName":"contosoawesome2",
      "waitTime":30,
      "population":1
    }
```

## See also <a id="ID4EJE"></a>

#### Parent <a id="ID4ELE"></a>

[/serviceconfigs/{scid}/hoppers/{name}/stats](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/matchmaking/uri-serviceconfigsscidhoppershoppernamestats.md)

