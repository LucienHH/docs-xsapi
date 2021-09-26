---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: ef295295-fee1-b247-2a45-3accf2816fd2
permalink: en-us/docs/xboxlive/rest/uri-untrustedplatformusersxuidscidsscid-get.html
ms.date: 10/12/2017
title: 'GET (/untrustedplatform/users/xuid({xuid})/scids/{scid})'
description: 'GET (/untrustedplatform/users/xuid({xuid})/scids/{scid})'
---

# GET \(/untrustedplatform/users/xuid\({xuid}\)/scids/{scid}\)

Retrieves quota information for this storage type. The domain for these URIs is `titlestorage.xboxlive.com`.

* [URI parameters](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4EX)
* [Authorization](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4ECB)
* [Required Request Headers](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4ENB)
* [Request body](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4EWC)
* [HTTP status codes](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4EBD)
* [Response body](get-untrustedplatform-users-xuid-xuid-scids-scid.md#ID4EUAAC)

## URI parameters <a id="ID4EX"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | unsigned 64-bit integer | The Xbox User ID \(XUID\) of the player who making the request. |
| scid | guid | the ID of the service config to look up. |

## Authorization <a id="ID4ECB"></a>

The request must include a valid Xbox LIVE authorization header. If caller is not allowed to access this resource, the service will return a 403 Forbidden response. If the header is invalid or missing, the service will return a 401 Unauthorized response.

## Required Request Headers <a id="ID4ENB"></a>

| Header | Value | Description |
| :--- | :--- | :--- |
| x-xbl-contract-version | 1 | API contract version. |
| Authorization | XBL3.0 x=\[hash\];\[token\] | STS authentication token. STSTokenString is replaced by the token returned by the authentication request. See Authenticating and Authorizing Xbox LIVE Services Requests for additional information about retrieving an STS token and creating an authorization header. |

## Request body <a id="ID4EWC"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EBD"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The request was successful. |
| 201 | Created | The entity was created. |
| 400 | Bad Request | Service could not understand malformed request. Typically an invalid parameter. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 404 | Not Found | The specified resource could not be found. |
| 406 | Not Acceptable | Resource version is not supported. |
| 408 | Request Timeout | The request took too long to complete. |
| 500 | Internal Server Error | The server encountered an unexpected condition which prevented it from fulfilling the request. |
| 503 | Service Unavailable | Request has been throttled, try the request again after the client-retry value in seconds \(e.g. 5 seconds later\). |

## Response body <a id="ID4EUAAC"></a>

If the call is successful, the service will return a [quotaInfo](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-quota.md) object.

### Sample response <a id="ID4ECBAC"></a>

```cpp
{
  "quotaInfo" :
  {
    "usedBytes" : 619,
    "quotaBytes" : 16777216
  }
}
```

## See also <a id="ID4EOBAC"></a>

#### Parent <a id="ID4EQBAC"></a>

[/untrustedplatform/users/xuid\({xuid}\)/scids/{scid}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/title-storage/uri-untrustedplatformusersxuidscidsscid.md)

#### Reference <a id="ID4E1BAC"></a>

[quotaInfo \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-quota.md)

