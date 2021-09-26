---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: f7964d2e-a8c8-2caa-ca97-e0d76ef586f4
permalink: en-us/docs/xboxlive/rest/uri-usersxuidlistspinslistnameput.html
ms.date: 10/12/2017
title: 'PUT (/users/xuid(xuid)/lists/PINS/{listname})'
description: 'PUT (/users/xuid(xuid)/lists/PINS/{listname})'
---

# PUT \(/users/xuid\(xuid\)/lists/PINS/{listname}\)

Updates the items in a list according to the indexes specified for each item in the request body. The domain for these URIs is `eplists.xboxlive.com`.

* [Remarks](put-users-xuid-xuid-lists-pins-listname.md#ID4EV)
* [URI parameters](put-users-xuid-xuid-lists-pins-listname.md#ID4E1B)
* [Authorization](put-users-xuid-xuid-lists-pins-listname.md#ID4EFC)
* [HTTP status codes](put-users-xuid-xuid-lists-pins-listname.md#ID4ESC)
* [Required Request Headers](put-users-xuid-xuid-lists-pins-listname.md#ID4EPH)
* [Request body](put-users-xuid-xuid-lists-pins-listname.md#ID4EGBAC)
* [Response body](put-users-xuid-xuid-lists-pins-listname.md#ID4EWBAC)

## Remarks <a id="ID4EV"></a>

This call will update the items in a list according to the indexes specified for each item in the request body. This call will not insert items into the list, and if items do not exist at the specified indexes, then the call will return a 400 Bad Request status. Multiple items can be updated in a single call, but all must exist in the current list. That is, all get updated or none get updated.

This call will allow the item to be updated to be specified by the **itemId** instead of **index**. To do this, simply use "-1" for the index in the **IndexedItems** structure that is sent to the service. Obviously in this case, the **itemId** cannot be changed as part of the update, so it will only work for changes to other metadata fields. The **provider**/**providerId** combo can be used instead of **itemId** to identify the item. Internally, the service searches the list for these items and figures out the proper indexes to update. If the item or items cannot be found then a 400 Bad Request status will be returned and no items will be updated.

This call requires an **If-Match:versionNumber** header to be included in the request if using indexes to identify items. If using item IDs to identify the items \(and the list doesn't allow duplicates\), then the **If-Match** header is optional. If present, the **if-Match** header will always be validated. In the header, the **versionNumber** is the current version number of the list. If it is not included \(and required\), or does not match the current list version number, then an HTTP 412 Precondition Failed status code will be returned and the body of the response will contain the latest metadata of the list that includes the current version number. This is to guard against updates from different clients trampling on one another.

## URI parameters <a id="ID4E1B"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| xuid | string | Xbox User ID \(XUID\). |
| listtype | string | Type of the list \(how it is used and how it acts\). Always "PINS" for these related methods. |
| listname | string | Name of the list \(which list of a given listtype to act on\). Always "XBLPins" for items in Pins. |

## Authorization <a id="ID4EFC"></a>

This call expects an XSTS SAML token in the **Authorization** header. A Xuid claim must exist within that SAML token to identify the caller. This value is used to determine if the caller has access rights to the list data in question. The list itself will be identified by the Xuid as well and will be included in the URI for the list. Using this, we may in the future support shared access to lists, but that is not a feature at this time. Currently, all lists that a user accesses will be their own and there is no shared access. Thus the Xuid in the URI must match the Xuid in the SAML claims token.

> \[!NOTE\] Both XBL Auth 2.0 and 3.0 tokens are supported at present.

## HTTP status codes <a id="ID4ESC"></a>

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

## Required Request Headers <a id="ID4EPH"></a>

| Header | Description |
| :--- | :--- |
| Authorization | Contains the STS token used to authenticate and authorize the request. Must be a token from XSTS service and include the XUID as one of the claims. |
| X-XBL-Contract-Version | Specifies which API version is being requested \(positive integers\). Pins supports version 2. If this header is missing or the value is not supported then the service will return a 400 – Bad request with "Unsupported or missing contract version header" in the status description. |
| Content-Type | Specifies whether the content of request/response bodies will be in json or xml. Supported values are "application/json" and "application/xml" |
| If-Match | This header must contain the current version number of a list when making modify requests. Modify requests use PUT, POST, or DELETE verbs. If the version in the "If-Match" header does not match the current version of the list, the request will be rejected with an HTTP 412 – precondition failed return code. \(optional\) Can also be used for GETs, if present and the passed in version matches the current list version then no list data and an HTTP 304 – Not Modified code will be returned. |

## Request body <a id="ID4EGBAC"></a>

### Sample request <a id="ID4EMBAC"></a>

```cpp
{"IndexedItems":
 [{    "Index": 0, 
     "Item": 
     {
    "ContentType": "Movie",
    "ItemId": "3a5095a5-eac3-4215-944d-27bc051faa47",
    "ProviderId": null,
    "Provider": null,
    "ImageUrl": "http://www.bing.com/thumb/...",
    "Title": "The Dark Knight",
    "SubTitle":null, 
    "Locale": "en-us",
    "DeviceType": "XboxOne"
}
}]}
```

## Response body <a id="ID4EWBAC"></a>

### Sample response <a id="ID4E3BAC"></a>

```cpp
{
  "ListVersion":  1,
  "ListCount":  1,
  "MaxListSize": 200,
  "AllowDuplicates": "true",
  "AccessSetting":  "OwnerOnly"
}
```

## See also <a id="ID4EGCAC"></a>

#### Parent <a id="ID4EICAC"></a>

[/users/xuid\(xuid\)/lists/PINS/{listname}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/lists/uri-usersxuidlistspinslistname.md)

