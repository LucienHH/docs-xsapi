---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 6a59bc0b-8edd-87bf-efaf-f16efa3bedf7
permalink: en-us/docs/xboxlive/rest/uri-systemstringsvalidatepost.html
ms.date: 10/12/2017
title: POST (/system/strings/validate)
description: POST (/system/strings/validate)
---

# POST \(/system/strings/validate\)

Accepts an array of strings for validation and returns an array of results of equal size. The domain for these URIs is `client-strings.xboxlive.com`.

* [Remarks](post-system-strings-validate.md#ID4EV)
* [Required Request Headers](post-system-strings-validate.md#ID4EIB)
* [Request body](post-system-strings-validate.md#ID4ELC)
* [HTTP status codes](post-system-strings-validate.md#ID4E4C)
* [Response body](post-system-strings-validate.md#ID4ETF)

## Remarks <a id="ID4EV"></a>

Each result indicates whether the corresponding string is acceptable on Xbox LIVE, and contains the offending string if applicable.

Identical strings will always give identical results. If you receive a non-successful result, analyze the result and modify the string accordingly.

> \[!NOTE\] The resulting **VerifyStringResult** will only report the first offending word in the string. There might be additional offending words within the string. If you plan to replace the offending words to make the string usable, you should replace the offending word or substring and then re-verify the string to look for additional offending substrings.

## Required Request Headers <a id="ID4EIB"></a>

| Header | Description |
| :--- | :--- |
| Authorization | Authentication Token. Example: XBL3.0 x=\[hash\];\[token\]. |
| x-xbl-contract-version | Integer API contract version. Must be 1 or 2 for this API. |

## Request body <a id="ID4ELC"></a>

The request body is an array of strings, with no limits on the size of the array, and 512 characters per string.

### Sample request <a id="ID4ETC"></a>

```cpp
{
    "stringstoVerify":
    [
        "Poppycock",
        "The quick brown fox jumped over the lazy dog.",
        "Hey, want to play games together?",
        "oh noes"
    ]
}
```

## HTTP status codes <a id="ID4E4C"></a>

The service returns one of the status codes in this section in response to a request made with this method on this resource. For a complete list of standard HTTP status codes used with Xbox Live Services, see [Standard HTTP status codes](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/httpstatuscodes.md).

| Code | Reason phrase | Description |
| :--- | :--- | :--- |
| 200 | OK | All strings were processed successfully. This does not necessarily mean all strings had positive HResults. |
| 401 | Unauthorized | The request requires user authentication. |
| 403 | Forbidden | The request is not allowed for the user or service. |
| 406 | Not Acceptable | Missing **Content-type: application/json** header. |
| 408 | Request Timeout | Service could not understand malformed request. Typically an invalid parameter. |

## Response body <a id="ID4ETF"></a>

Returns an array of [VerifyStringResult \(JSON\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/json/json-verifystringresult.md), of the same size as the request array.

## See also <a id="ID4EAG"></a>

#### Parent <a id="ID4ECG"></a>

[/system/strings/validate](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/system-strings-validatation/uri-systemstringsvalidate.md)

