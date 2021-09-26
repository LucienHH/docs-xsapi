---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 05b2449f-3ef4-4fdf-df32-e72bcfc473d2
permalink: >-
  en-us/docs/xboxlive/rest/uri-medialocalemetadatamediaitemtypequeryrefinersqueryrefinernameget.html
ms.date: 10/12/2017
title: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername})
description: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername})
---

# GET \(/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername}

Lists the acceptable values for the given query refiner name and given media item type. The domain for these URIs is `eds.xboxlive.com`.

* [URI parameters](get-media-marketplaceid-metadata-mediaitemtypes-mediaitemtype-queryrefiners-queryrefinername.md#ID4EV)

## URI parameters <a id="ID4EV"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| marketplaceId | string | Required. String value obtained from the **Windows.Xbox.ApplicationModel.Store.Configuration.MarketplaceId**. |
| mediaitemtype | string | Required. One of the values from [GET \(/media/{marketplaceId}/metadata/mediaGroups/{mediagroup}/mediaItemTypes\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalemetadatamediagroupsmediaitemtypesget.md). |
| queryrefinername | string | Required. Name of the query refiner for which values are needed, such as "Genre" or "Decade". See QueryRefiners. |

## See also <a id="ID4EAB"></a>

### Parent <a id="ID4ECB"></a>

[/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername}](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalemetadatamediaitemtypequeryrefinersqueryrefinername.md)

### Further Information <a id="ID4EMB"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

