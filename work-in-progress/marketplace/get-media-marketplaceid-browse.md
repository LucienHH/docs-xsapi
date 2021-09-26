---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 024447a0-c615-e08b-f867-3b6c4c0db5dc
permalink: en-us/docs/xboxlive/rest/uri-medialocalebrowseget.html
ms.date: 10/12/2017
title: 'GET (media/{marketplaceId}/browse)'
description: 'GET (media/{marketplaceId}/browse)'
---

# GET \(media/{marketplaceId}/browse\)

Allows browsing for items within a single media group. The domain for these URIs is `eds.xboxlive.com`.

* [Remarks](get-media-marketplaceid-browse.md#ID4EV)
* [URI parameters](get-media-marketplaceid-browse.md#ID4EFB)
* [Query string parameters](get-media-marketplaceid-browse.md#ID4EQB)
* [Response body](get-media-marketplaceid-browse.md#ID4E6B)

## Remarks <a id="ID4EV"></a>

Pages of data returned from this search can be accessed non-sequentially using the skipItems parameter instead of using the continuation token. This API accepts Query Refiners.

**SandboxId** is now retrieved from the claim in the XToken and enforced. If the **SandboxId** is not present, then Entertainment Discovery Services \(EDS\) will throw a 400 Bad request error.

## URI parameters <a id="ID4EFB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| marketplaceId | string | Required. String value obtained from the **Windows.Xbox.ApplicationModel.Store.Configuration.MarketplaceId**. |

## Query string parameters <a id="ID4EQB"></a>

This API accepts the following query parameters: combinedContentRating, desiredMediaItemTypes, fields, maxItems, preferredProvider, q, queryRefiners, skipItems, firstPartyOnly, freeOnly, hasTrailer, latestOnly, subscriptionLevel, and topRatedOnly.

See [EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md) for more information on these parameters.

## Response body <a id="ID4E6B"></a>

### Sample response <a id="ID4EFC"></a>

The JSON code below is in response to the call `/media/en-us/browse?orderBy=releaseDate&desiredMediaItemTypes=DGame&fields=all`.

```cpp
{
    "Items": [{
        "MediaGroup": "GameType",
        "MediaItemType": "DGame",
        "ID": "6c5402e4-3cd5-4b29-a9c4-bec7d2c7514a",
        "Name": "Tanks-A",
        "ReducedName": "Tanks-A short title",
        "ReleaseDate": "2013-05-14T00: 00: 00Z",
        "TitleId": "1676B413",
        "VuiDisplayName": "Tanks-A vui",
        "DeveloperName": "Microsoft Studios",
        "PublisherName": "Microsoft Studios",
        "SortName": "Tanks-A sort title. ",
        "KValue": "4",
        "KValueNamespace": "bingbox",
        "AllTimePlayCount": 30.0,
        "SevenDaysPlayCount": 30.0,
        "ThirtyDaysPlayCount": 30.0,
        "AllTimeRatingCount": 12.0,
        "ThirtyDaysRatingCount": 12.0,
        "SevenDaysRatingCount": 12.0,
        "AllTimeAverageRating": 0.8,
        "ThirtyDaysAverageRating": 0.8,
        "SevenDaysAverageRating": 0.8,
        "LegacyIds": [{
            "IdType": "TitleId",
            "Value": "1676B413"
        }],
        "Availabilities": [{
            "AvailabilityID": "",
            "ContentId": "c9fcb807-626d-5347-b918-65496f084219",
            "Devices": [{
                "Name": "Durango"
            }]
        }],
        "Packages": [{
            "CdnFileLocation": [{
                "SortOrder": null,
                "Uri": "www.microsoft.com"
            }],
            "ContentId": "c9fcb807-626d-5347-b918-65496f084219",
            "GameRegionMask": 1,
            "PackageType": "CAB",
            "LicenseBit": 1,
            "LicenseType": "SyncCast DTO"
        }],
        "SandboxId": "PART.Dev1"
    },
    {
        "MediaGroup": "GameType",
        "MediaItemType": "DGame",
        "ID": "fd16e2fb-eca4-4182-8f69-a98fdd6e57a1",
        "Name": "Vector based massively multiplayer Tanks game.",
        "ReducedName": "Tanks",
        "ReleaseDate": "2013-03-15T00: 00: 00Z",
        "TitleId": "69A60C76",
        "VuiDisplayName": "Tanks",
        "DeveloperName": "Microsoft Studios",
        "Images": [{
            "ID": "32ebd9fe-6a22-4111-954e-564ec69d802a",
            "ResizeUrl": "http: //images-eds.dnet.xboxlive.com/image?url=RIJNAEIo6.u.tudW9rXJ2lWDOsMikqfNiHE2Sp4qbgNbH6_drY8Ek2cyHXEnnUKPUXAH_m8a3Oe4_wpV7CkKA0Snc9puIYOGxsIfyyncTBv.MIluDZX6UqAPsJYHE5go_J_BBfxNWW6yrK4.K75aMQ--",
            "Purposes": ["Box_Art"],
            "Purpose": "Box_Art",
            "Height": 300,
            "Width": 219,
            "Order": 1
        },
        {
            "ID": "32ebd9fe-6a22-4111-954e-564ec69d802a",
            "ResizeUrl": "http: //images-eds.dnet.xboxlive.com/image?url=RIJNAEIo6.u.tudW9rXJ2lWDOsMikqfNiHE2Sp4qbgNbH6_drY8Ek2cyHXEnnUKPUXAH_m8a3Oe4_wpV7CkKA0Snc9puIYOGxsIfyyncTBv.MIluDZX6UqAPsJYHE5go_J_BBfxNWW6yrK4.K75aMQ--",
            "Purposes": ["Box_Art"],
            "Purpose": "Box_Art",
            "Height": 120,
            "Width": 85,
            "Order": 1
        },
        {
            "ID": "32ebd9fe-6a22-4111-954e-564ec69d802a",
            "ResizeUrl": "http: //images-eds.dnet.xboxlive.com/image?url=RIJNAEIo6.u.tudW9rXJ2lWDOsMikqfNiHE2Sp4qbgNbH6_drY8Ek2cyHXEnnUKPUXAH_m8a3Oe4_wpV7CkKA0Snc9puIYOGxsIfyyncTBv.MIluDZX6UqAPsJYHE5go_J_BBfxNWW6yrK4.K75aMQ--",
            "Purposes": ["Image"],
            "Purpose": "Image",
            "Height": 720,
            "Width": 1280,
            "Order": 1
        }],
        "PublisherName": "Microsoft Studios",
        "RatingId": "10",
        "ParentalRating": "E",
        "ParentalRatingSystem": "ESRB",
        "SortName": "\n            Vector based massively multiplayer Tanks game.\n          ",
        "Capabilities": [{
            "NonLocalizedName": "onlineMultiplayerMin",
            "Value": "3"
        },
        {
            "NonLocalizedName": "onelineMultiplayerMax",
            "Value": "5"
        }],
        "KValue": "5",
        "KValueNamespace": "bingbox",
        "AllTimePlayCount": 30.0,
        "SevenDaysPlayCount": 30.0,
        "ThirtyDaysPlayCount": 30.0,
        "AllTimeRatingCount": 12.0,
        "ThirtyDaysRatingCount": 12.0,
        "SevenDaysRatingCount": 12.0,
        "AllTimeAverageRating": 0.8,
        "ThirtyDaysAverageRating": 0.8,
        "SevenDaysAverageRating": 0.8,
        "LegacyIds": [{
            "IdType": "TitleId",
            "Value": "69A60C76"
        }],
        "Availabilities": [{
            "AvailabilityID": "",
            "ContentId": "7AE9DAB2-1162-488D-9F80-B804EC5AF879",
            "Devices": [{
                "Name": "Durango"
            }]
        }],
        "Packages": [{
            "CdnFileLocation": [{
                "SortOrder": null,
                "Uri": "https: //update.dnet.xboxlive.com/test_cdn/tanks-randomkey.xvc"
            },
            {
                "SortOrder": null,
                "Uri": "https: //update.dnet.xboxlive.com/test_cdn/tanks-randomkey.xvc"
            },
            {
                "SortOrder": null,
                "Uri": "https: //update.dnet.xboxlive.com/test_cdn/tanks-randomkey.xvc"
            }],
            "ContentId": "7AE9DAB2-1162-488D-9F80-B804EC5AF879",
            "PackageType": "XVC",
            "LicenseType": "Xbox Live Games Machine and User"
        }],
        "SandboxId": "PART.Dev1"
    }],
    "ImpressionGuid": "5d3085cf-7d17-43b4-a9c1-a1ccfe764eb1"
}
```

## See also <a id="ID4EUC"></a>

#### Parent <a id="ID4EWC"></a>

[/media/{marketplaceId}/browse](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalebrowse.md)

#### Further Information <a id="ID4EAD"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

