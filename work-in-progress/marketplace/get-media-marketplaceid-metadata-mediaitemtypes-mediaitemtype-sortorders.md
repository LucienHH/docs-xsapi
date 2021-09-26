---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 225e8cb2-44eb-6b7b-eaa0-1ea2d2602f6f
permalink: >-
  en-us/docs/xboxlive/rest/uri-medialocalemetadatamediaitemtypesortordersget.html
ms.date: 10/12/2017
title: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/sortorders)
description: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/sortorders)
---

# GET \(/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/sortorders\)

Lists available sort orders for a given mediaitem type and a given version of EDS. The domain for these URIs is `eds.xboxlive.com`.

* [URI parameters](get-media-marketplaceid-metadata-mediaitemtypes-mediaitemtype-sortorders.md#ID4EV)

## URI parameters <a id="ID4EV"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| marketplaceId | string | Required. String value obtained from the **Windows.Xbox.ApplicationModel.Store.Configuration.MarketplaceId**. |
| mediaitemtype | string | Required. One of the values from [GET \(/media/{marketplaceId}/metadata/mediaGroups/{mediagroup}/mediaItemTypes\)](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalemetadatamediagroupsmediaitemtypesget.md). |

## See also <a id="ID4EAB"></a>

### Parent <a id="ID4ECB"></a>

[/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/sortorders](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalemetadatamediaitemtypesortorders.md)

### Further Information <a id="ID4EMB"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

