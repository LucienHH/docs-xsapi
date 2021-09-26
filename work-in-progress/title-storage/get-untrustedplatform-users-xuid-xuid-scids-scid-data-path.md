---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 7f1e511b-7c99-d5e9-7829-7777fd56fefc
permalink: >-
  en-us/docs/xboxlive/rest/uri-untrustedplatformusersxuidscidssciddatapath-get.html
ms.date: 10/12/2017
title: 'GET (/untrustedplatform/users/xuid({xuid})/scids/{scid}/data/{path})'
description: 'GET (/untrustedplatform/users/xuid({xuid})/scids/{scid}/data/{path})'
---

# GET \(/untrustedplatform/users/xuid\({xuid}\)/scids/{scid}/data/{path}\)

Lists file information at a specified path. The domain for these URIs is `titlestorage.xboxlive.com`.

* [URI parameters](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EX)
* [Optional Query String Parameters](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4ECB)
* [Authorization](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EWC)
* [Required Request Headers](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EDD)
* [Request body](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EME)
* [HTTP status codes](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EZE)
* [Response body](get-untrustedplatform-users-xuid-xuid-scids-scid-data-path.md#ID4EMCAC)

## URI parameters <a id="ID4EX"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | unsigned 64-bit integer | The Xbox User ID \(XUID\) of the player who making the request. |
| scid | guid | the ID of the service config to look up. |
| path | string | The path to the data items to return. All matching directories and subdirectories get returned. Valid characters include uppercase letters \(A-Z\), lowercase letters \(a-z\), numbers \(0-9\), underscore \(\_\), and forward slash \(/\). May be empty. Max length of 256. |

## Optional Query String Parameters <a id="ID4ECB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| skipItems | int | Return the items starting at N+1 in the collection, for example, skip N items. |
| continuationToken | string | Return the items starting at the given continuation token. The continuationToken parameter takes precedence over skipItems if both are provided. In other words, the skipItems parameter is ignored if continuationToken parameter is present. |
| maxItems | int | Maximum number of items to return from the collection, which can be combined with skipItems and continuationToken to return a range of items. The service may provide a default value if maxItems is not present, and may return fewer than maxItems, even if the last page of results has not yet been returned. |

## Authorization <a id="ID4EWC"></a>

The request must include a valid Xbox LIVE authorization header. If caller is not allowed to access this resource, the service will return a 403 Forbidden response. If the header is invalid or missing, the service will return a 401 Unauthorized response.

## Required Request Headers <a id="ID4EDD"></a>

| Header | Value | Description |
| :--- | :--- | :--- |
| x-xbl-contract-version | 1 | API contract version. |
| Authorization | XBL3.0 x=\[hash\];\[token\] | STS authentication token. STSTokenString is replaced by the token returned by the authentication request. See Authenticating and Authorizing Xbox LIVE Services Requests for additional information about retrieving an STS token and creating an authorization header. |

## Request body <a id="ID4EME"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EZE"></a>

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

## Response body <a id="ID4EMCAC"></a>

If the call is successful, the service will return an array of [TitleBlob](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-titleblob.md) objects.

### Sample response <a id="ID4E1CAC"></a>

```cpp
{
"blobs":
[
    {
        "fileName":"foo\bar\blob.txt,binary",
        "clientFileTime":"2012-01-01T01:02:03.1234567Z",
        "displayName":"Friendly Name",
        "size":12,
        "etag":"0x8CEB3E4F8F3A5BF"
    },
    {
        "fileName":"foo\bar\blob2.txt,binary",
        "displayName":"Blob 2",
        "size":4,
        "etag":"0x8CEB3FE57F1A142"
    },
    {
        "fileName":"foo\jsonblob.txt,json",
        "size":15,
        "etag":"0x8CEB40152B4A6F8"
    }
],
"pagingInfo":
    {
        "continuationToken":"54",
    }
}
```

## See also <a id="ID4EGDAC"></a>

#### Parent <a id="ID4EIDAC"></a>

[/untrustedplatform/users/xuid\({xuid}\)/scids/{scid}/data/{path}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/title-storage/uri-untrustedplatformusersxuidscidssciddatapath.md)

#### Reference  [TitleBlob \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-titleblob.md) <a id="ID4EUDAC"></a>

[PagingInfo \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-paginginfo.md)

