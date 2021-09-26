---
ms.localizationpriority: medium
ms.topic: article
keywords: 'xbox live, xbox, games, uwp, windows 10, xbox one'
assetID: 0fcbef77-4607-765e-72e1-d2e7620e2c61
permalink: >-
  en-us/docs/xboxlive/rest/uri-medialocalemediaitemtypequeryrefinersubqueryrefinervaluesget.html
ms.date: 10/12/2017
title: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/subQueryRefinerValues)
description: >-
  GET
  (/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/subQueryRefinerValues)
---

# GET \(/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/sub

Get the list of sub-values for a given query refiner value \(e.g., "subgenres in a given genre"\). The domain for these URIs is `eds.xboxlive.com`.

* [Remarks](get-media-marketplaceid-metadata-mediaitemtypes-mediaitemtype-queryrefiners-queryrefiner-subqueryref.md#ID4EV)
* [URI parameters](get-media-marketplaceid-metadata-mediaitemtypes-mediaitemtype-queryrefiners-queryrefiner-subqueryref.md#ID4EDB)

## Remarks <a id="ID4EV"></a>

The query refiner value is passed in as a query string parameter named **queryRefinerValue**, which is done to allow query refiner values with characters forbidden in URI stems to be passed.

This API is only supported for Music.

## URI parameters <a id="ID4EDB"></a>

| Parameter | Type | Description |
| :--- | :--- | :--- |
| marketplaceId | string | Required. String value obtained from the **Windows.Xbox.ApplicationModel.Store.Configuration.MarketplaceId**. |

## See also <a id="ID4EOB"></a>

### Parent <a id="ID4EQB"></a>

[/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/subQueryRefinerValues](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/uri-medialocalemediaitemtypequeryrefinersubqueryrefinervalues.md)

### Further Information <a id="ID4E1B"></a>

[EDS Common Headers](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edscommonheaders.md)

[EDS Parameters](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsparameters.md)

[EDS Query Refiners](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/edsqueryrefiners.md)

[Marketplace URIs](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/work-in-progress/marketplace/atoc-reference-marketplace.md)

[Additional Reference](https://github.com/LucienHH/docs-xsapi/tree/8aaeb3d77dec37e3bd2a1d99ea913649665f2490/additional/atoc-xboxlivews-reference-additional.md)

