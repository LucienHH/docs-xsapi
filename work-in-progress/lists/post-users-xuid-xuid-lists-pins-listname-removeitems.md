---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: f7235c68-3214-db10-52ad-c3665b31b8cd
permalink: en-us/docs/xboxlive/rest/uri-usersxuidlistspinslistnameremoveitemspost.html
ms.date: 10/12/2017
title: 'POST /users/xuid(xuid)/lists/PINS/{listname}/RemoveItems'
description: 'POST /users/xuid(xuid)/lists/PINS/{listname}/RemoveItems'
---

# POST /users/xuid\(xuid\)/lists/PINS/{listname}/RemoveItems

Removes items from a list by itemId. The domain for these URIs is `eplists.xboxlive.com`.

* [Remarks](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EV)
* [URI parameters](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EFB)
* [Query string parameters](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EOC)
* [Request body](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EZC)
* [HTTP status codes](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EED)
* [Required Request Headers](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4E1AAC)
* [Response body](post-users-xuid-xuid-lists-pins-listname-removeitems.md#ID4EQCAC)

## Remarks <a id="ID4EV"></a>

Remove items from the list by specifying item ids instead of indexes. Only 100 items are allowed to be removed in a single call **If no items are passed then the entire list will be deleted \(list will remain but empty, version number will continue to increment\).** Once the items are removed, the list is "compacted" such that no holes are left in the ordering of indexes.

An "If-Match:versionNumber" header is optional for this call. If it is included it will be validated. The versionNumber is the current version number of the file. If it is included and does not match the current list version number, then an HTTP 412 – precondition failed status code will be returned and the body of the response will contain the latest metadata of the list which includes the current version number. This is done to guard against updates from different clients trampling on each other.

## URI parameters <a id="ID4EFB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| XUID | string | XUID of the user. |
| listname | string | Name of the list to manipulate. |

## Query string parameters <a id="ID4EOC"></a>

Query parameters are not supported.

## Request body <a id="ID4EZC"></a>

```cpp
{
   "Items":
   [{"ItemId":  "ed591a0c-dde3-563f-99af-530278a3c402",
      "ProviderId":  null,
      "Provider":  null
   }]
}
```

## HTTP status codes <a id="ID4EED"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The request completed successfully. The response body should contain the requested resource \(for a GET\). POST and PUT requests will receive up-to-date list metadata \(list version, count, etc.\). |
| 201 | Created | A new list has been created. This is returned on the initial insert to a list. The response includes up-to-date metadata on the list and the location header contains the URI for the list. |
| 304 | Not Modified | Returned on GETs. Indicates that the client has the latest version of the list. The service compares the value in the **If-Match** header to the list version. If they are equal, then a 304 gets returned with no data. |
| 400 | Bad Request | The request was malformed. Could be an invalid value or type for a URI or query string parameter. Can also be the result of a missing required parameter or data value, or the request indicated a missing or invalid version of the API. See the **X-XBL-Contract-Version** header. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 404 | Not Found | The caller does not have access to the resource. This indicates that no such list has been created. |
| 412 | Precondition Failed | Indicates that the version of the list has changed and a modify request has failed. A modify request is an insert, update, or remove. The service checks the **If-Match** header for the list version. If it does not match the current version of the list, then the operation fails and this is returned along with the current list metadata \(which includes the current version\). |
| 500 | Internal Server Error | The service is refusing the request due to a server-side error. |
| 501 | Not Implemented | The caller requested a URI that has not been implemented on the server. \(Currently only used when a request is made for a list name that is not allow listed.\) |
| 503 | Service Unavailable | The server is refusing the request, usually due to excessive load. After a delay \(see the **Retry-after** header\), the request can be retried. |

## Required Request Headers <a id="ID4E1AAC"></a>

| Header | Description |
| :--- | :--- |
| Authorization | Contains the STS token used to authenticate and authorize the request. Must be a token from XSTS service and include the XUID as one of the claims. |
| X-XBL-Contract-Version | Specifies which API version is being requested \(positive integers\). Pins supports version 2. If this header is missing or the value is not supported then the service will return a 400 – Bad request with "Unsupported or missing contract version header" in the status description. |
| Content-Type | Specifies whether the content of request/response bodies will be in json or xml. Supported values are "application/json" and "application/xml" |
| If-Match | This header must contain the current version number of a list when making modify requests. Modify requests use PUT, POST, or DELETE verbs. If the version in the "If-Match" header does not match the current version of the list, the request will be rejected with an HTTP 412 – precondition failed return code. \(optional\) Can also be used for GETs, if present and the passed in version matches the current list version then no list data and an HTTP 304 – Not Modified code will be returned. |

## Response body <a id="ID4EQCAC"></a>

If the call is successful, the service returns the latest metadata for the list.

### Sample response <a id="ID4E1CAC"></a>

```cpp
{
        "ListVersion":  1,
        "ListCount":  1,
        "MaxListSize": 200,
        "AllowDuplicates": "true",
        "AccessSetting":  "OwnerOnly"
        }
```

## See also <a id="ID4EGDAC"></a>

#### Parent <a id="ID4EIDAC"></a>

[Universal Resource Identifier \(URI\) Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/atoc-xboxlivews-reference-uris.md)

