---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: c2527a08-411b-d4e4-422f-a8438804bfe6
permalink: en-us/docs/xboxlive/rest/uri-usersmegroupsmonikerget.html
ms.date: 10/12/2017
title: 'GET (/users/me/groups/{moniker} )'
description: 'GET (/users/me/groups/{moniker} )'
---

# GET \(/users/me/groups/{moniker} \)

Gets the PresenceRecord for my group. The domain for these URIs is `userpresence.xboxlive.com`.

* [Remarks](get-users-me-groups-moniker.md#ID4EV)
* [URI parameters](get-users-me-groups-moniker.md#ID4E5)
* [Query string parameters](get-users-me-groups-moniker.md#ID4EJB)
* [Authorization](get-users-me-groups-moniker.md#ID4EKC)
* [Effect of privacy settings on resource](get-users-me-groups-moniker.md#ID4EQD)
* [Required Request Headers](get-users-me-groups-moniker.md#ID4EEH)
* [Optional Request Headers](get-users-me-groups-moniker.md#ID4EMBAC)
* [Request body](get-users-me-groups-moniker.md#ID4EMCAC)
* [HTTP status codes](get-users-me-groups-moniker.md#ID4EXCAC)
* [Required Response Headers](get-users-me-groups-moniker.md#ID4E3GAC)
* [Optional Response Headers](get-users-me-groups-moniker.md#ID4EMJAC)
* [Response body](get-users-me-groups-moniker.md#ID4E5KAC)

## Remarks <a id="ID4EV"></a>

Retrieves the users in the group specified by the moniker related to the user in the claims, and returns the PresenceRecord for those users. Data that is gated by Privacy or Content Isolation will simply not be returned.

## URI parameters <a id="ID4E5"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| moniker | string | String defining the group of users. The only accepted moniker at present is "People" with an uppercase 'P'. |

## Query string parameters <a id="ID4EJB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| level | string | Returns the level of detail as specified by this query string. Valid options include "user", "device", "title", and "all".The level "user" is the PresenceRecord object without the DeviceRecord nested object. The level "device" is the PresenceRecord and DeviceRecord objects without the TitleRecord nested object. The level "title" is the PresenceRecord, DeviceRecord, and TitleRecord objects without the ActivityRecord nested object. The level "all" is the entire record, including all nested objects.If this parameter is not provided, the service defaults to the title level \(that is, it returns presence for this user down to the details of title\). |

## Authorization <a id="ID4EKC"></a>

Authorization claims used \| Claim\| Type\| Required?\| Example value\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| **Xuid**\| 64-bit signed integer\| yes\| 1234567890\|

## Effect of privacy settings on resource <a id="ID4EQD"></a>

The service will always return 200 OK if the request itself is well-formed. However, it will filter out information from the response when privacy checks do not pass.

Effect of Privacy Settings on Resource \| Requesting User\| Target User's Privacy Setting\| Behavior\| \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| --- \| \| me\| -\| As described.\| \| friend\| everyone\| As described.\| \| friend\| friends only\| As described.\| \| friend\| blocked\| As described - the service will filter out data.\| \| non-friend user\| everyone\| As described.\| \| non-friend user\| friends only\| As described - the service will filter out data.\| \| non-friend user\| blocked\| As described - the service will filter out data.\| \| third-party site\| everyone\| As described - the service will filter out data.\| \| third-party site\| friends only\| As described - the service will filter out data.\| \| third-party site\| blocked\| As described - the service will filter out data.\|

## Required Request Headers <a id="ID4EEH"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Authorization | string | Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=&lt;userhash&gt;;&lt;token&gt;". |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext. |
| Accept | string | Content-Types that are acceptable. The only one Presence supports is **application/json**, but it still must be specified in the header. |
| Accept-Language | string | Acceptable locale for strings in the response. Example value: en-US. |
| Host | string | Domain name of the server. Example value: userpresence.xboxlive.com. |

## Optional Request Headers <a id="ID4EMBAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| X-RequestedServiceVersion |  | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1. |

## Request body <a id="ID4EMCAC"></a>

No objects are sent in the body of this request.

## HTTP status codes <a id="ID4EXCAC"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | The session was successfully retrieved. |
| 400 | Bad Request | Service could not understand malformed request. Typically an invalid parameter. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 404 | Not Found | The specified resource could not be found. |
| 405 | Method Not Allowed | HTTP method was used on an unsupported content type. |
| 406 | Not Acceptable | Resource version is not supported. |
| 500 | Request Timeout | Service could not understand malformed request. Typically an invalid parameter. |
| 503 | Request Timeout | Service could not understand malformed request. Typically an invalid parameter. |

## Required Response Headers <a id="ID4E3GAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| x-xbl-contract-version | string | Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 1, vnext. |
| Content-Type | string | The mime type of the body of the request. Example value: **application/json**. |
| Cache-Control | string | Polite request to specify caching behavior. Example values: "no-cache". |
| X-XblCorrelationId | string | Service-generated value to correlate what the server returns and what is received by the client. Example value: "4106d0bc-1cb3-47bd-83fd-57d041c6febe". |
| X-Content-Type-Option | string | Returns the SDL-compliant value. Example value: "nosniff". |
| Date | string | The date/time the message was sent. Example value: "Tue, 17 Nov 2012 10:33:31 GMT". |

## Optional Response Headers <a id="ID4EMJAC"></a>

| Header | Type | Description |
| :--- | :--- | :--- |
| Retry-After | string | Returned on 503 HTTP errors. Lets client know how long to wait before retrying the call. Example values: "120". |
| Content-Length | string | Length of response body. Example value: "527". |
| Content-Encoding | string | Encoding type of the response. Example value: "gzip". |

## Response body <a id="ID4E5KAC"></a>

This API returns an array of PresenceRecord objects, one for each of the XUIDs from the request.

### Sample response <a id="ID4EGLAC"></a>

```cpp
[
     {
         xuid:"0123456789",
         state:"online",
         devices:
         [
             {
                 type:"D",
                 titles:
                 [
                     {
                         id:"12341234",
                         name:"Contoso 5",
                         lastModified:"2012-09-17T07:15:23.4930000",
                         placement:"full",
                         state:"active",
                         activity:
                         {
                             richPresence:"Playing on Nirvana"
                         },
                     }
                 ]
             }
         ]
     },
     {
         xuid:"0123456780",
         state:"online",
         devices:
         [
             {
                 type:"D",
                 titles:
                 [
                     {
                         id:"12341235",
                         name:"Contoso Waypoint",
                         lastModified:"2012-09-17T07:15:23.4930000",
                         placement;"full",
                         state:"active",
                         activity:
                         {
                             richPresence:"Viewing stats"
                         },
                     }
                 ]
             }
         ]
     },
     {
         xuid:"0123456781",
         state:"online",
         devices:
         [
             {
                 type:"Win8",
                 titles:
                 [
                     {
                         id:"23452345",
                         name:"Contoso Gamehelp",
                         state:"active",
                         timestamp:"2012-09-17T07:15:23.4930000",
                         activity:
                         {
                             richPresence:"Viewing help"
                         }
                     }
                 ]
             }
         ]
     }
 ]
```

## See also <a id="ID4EQLAC"></a>

#### Parent <a id="ID4ESLAC"></a>

[/users/me/groups/{moniker}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/presence/uri-usersmegroupsmoniker.md)

