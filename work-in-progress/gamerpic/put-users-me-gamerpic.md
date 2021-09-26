---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: ddf71c62-197d-a81d-35a7-47c6dc9e1b0c
permalink: en-us/docs/xboxlive/rest/uri-usersmegamerpicput.html
ms.date: 10/12/2017
title: PUT (/users/me/gamerpic)
description: PUT (/users/me/gamerpic)
---

# PUT \(/users/me/gamerpic\)

Uploads a 1080x1080 gamerpic.

* [Request body](put-users-me-gamerpic.md#ID4EQ)
* [HTTP status codes](put-users-me-gamerpic.md#ID4EZ)
* [Response body](put-users-me-gamerpic.md#ID4EXC)

## Request body <a id="ID4EQ"></a>

The request body is a gamerpic \(1080x1080 PNG file\).

## HTTP status codes <a id="ID4EZ"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | Successful GET. |
| 201 | Created. | Upload was successful. |
| 403 | Forbidden | The privilege is revoked. |
| 500 | Error | Something went wrong. |

## Response body <a id="ID4EXC"></a>

No objects are sent in the body of the response.

## See also <a id="ID4ECD"></a>

### Parent <a id="ID4EED"></a>

[/users/me/gamerpic](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/gamerpic/uri-usersmegamerpic.md)

