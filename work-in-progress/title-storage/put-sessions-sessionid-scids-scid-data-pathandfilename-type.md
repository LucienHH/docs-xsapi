---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 40005e52-cd24-38ed-cfed-2c590cc2276f
permalink: >-
  en-us/docs/xboxlive/rest/uri-sessionssessionidscidssciddatapathandfilenametype-put.html
ms.date: 10/12/2017
title: 'PUT (/sessions/{sessionId}/scids/{scid}/data/{pathAndFileName},{type})'
description: 'PUT (/sessions/{sessionId}/scids/{scid}/data/{pathAndFileName},{type})'
---

# PUT \(/sessions/{sessionId}/scids/{scid}/data/{pathAndFileName},{type}\)

Uploads a file. The data can be uploaded in a full upload in which the data and metadata are sent in a single message, or as a multi-block upload in which the data and metadata are sent in a series of smaller blocks. Only files that are smaller than four megabytes can be sent as a single message. Multi-block upload is not supported for data of type json. The domain for these URIs is `titlestorage.xboxlive.com`.

* [URI parameters](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EX)
* [Authorization](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EEB)
* [Optional Query String Parameters](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4ERB)
* [Required Request Headers](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4ENE)
* [Optional Request Headers](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EWF)
* [Request body](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EZG)
* [HTTP status codes](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EEH)
* [Response body](put-sessions-sessionid-scids-scid-data-pathandfilename-type.md#ID4EXEAC)

## URI parameters <a id="ID4EX"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| sessionId | string | the ID of the session to look up. |
| scid | guid | the ID of the service config to look up. |
| pathAndFileName | string | Path and file name for the item to be accessed. Valid characters for the path portion \(up to and including the final forward slash\) include uppercase letters \(A-Z\), lowercase letters \(a-z\), numbers \(0-9\), underscore \(_\), and forward slash \(/\). The path portion may be empty. Valid characters for the file name portion \(everything after the final forward slash\) include uppercase letters \(A-Z\), lowercase letters \(a-z\), numbers \(0-9\), underscore \(_\), period \(.\), and hyphen \(-\). The file name may not be empty, end in a period or contain two consecutive periods. |
| type | string | The format of the data. Possible values are binary or json. |

## Authorization <a id="ID4EEB"></a>

The request must include a valid Xbox LIVE authorization header. If caller is not allowed to access this resource, the service will return a 403 Forbidden response. If the header is invalid or missing, the service will return a 401 Unauthorized response.

## Optional Query String Parameters <a id="ID4ERB"></a>

For single message uploads, the query string parameters are:

| Parameter | Type | Description |
| :--- | :--- | :--- |
| clientFileTime | DateTime | Date/Time of the file on whatever client last uploaded the file. |
| displayName | string | Name of the file that should be shown to the user. |

For multi-block uploads, the query string parameters are:

| Parameter | Type | Description |
| :--- | :--- | :--- |
| clientFileTime | DateTime | Date/Time of the file on whatever client last uploaded the file. |
| displayName | string | Name of the file that should be shown to the user. |
| continuationToken | string | The continuation token from the response of the previous upload request. If this is the first block, this should not be specified. |
| finalBlock | bool | Set to true for the last block of the file. Set to false for all other blocks. |

## Required Request Headers <a id="ID4ENE"></a>

| Header | Value | Description |
| :--- | :--- | :--- |
| x-xbl-contract-version | 1 | API contract version. |
| Authorization | XBL3.0 x=\[hash\];\[token\] | STS authentication token. STSTokenString is replaced by the token returned by the authentication request. See Authenticating and Authorizing Xbox LIVE Services Requests for additional information about retrieving an STS token and creating an authorization header. |

## Optional Request Headers <a id="ID4EWF"></a>

| Header | Description |
| :--- | :--- |
| If-Match | Specifies an ETag that must match an exisitng item to complete the operation. |
| If-None-Match | Specifies an ETag that must not match any exisitng items to complete the operation. |

## Request body <a id="ID4EZG"></a>

The request body contains the contents of the file being uploaded. For single message uploads, the body is the complete contents of the file. For multi-block uploads, the body is the portion of the file specified in the query string parameters.

## HTTP status codes <a id="ID4EEH"></a>

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

## Response body <a id="ID4EXEAC"></a>

If the call is a multi-block request and it is successful, the service will return a continution token to pass with the next block.

### Sample response <a id="ID4EDFAC"></a>

```cpp
{
    "continuationToken":"abcd1234-1111-2222-3333-abcd12345678-1"
}
```

## See also <a id="ID4EPFAC"></a>

#### Parent <a id="ID4ERFAC"></a>

[/sessions/{sessionId}/scids/{scid}/data/{pathAndFileName},{type}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/title-storage/uri-sessionssessionidscidssciddatapathandfilenametype.md)

