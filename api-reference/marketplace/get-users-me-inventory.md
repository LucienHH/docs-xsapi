# GET /users/me/inventory

{% api-method method="get" host="https://eds.xboxlive.com" path="/users/me/inventory" %}{% api-method-description %}
Provides the set of inventory currently associated with the provided user back to the caller. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/users/me/inventory
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-query-parameters %}
{% api-method-parameter name="availability" type="string" required=false %}
The current availability of items to return. Default is "Available" which returns items for which the current date falls between the start date and the end date range. Other values include "All", which returns all items, and "Unavailable" which returns items for which the current date falls outside the start date and end date range and it therefore not currently available.
{% endapi-method-parameter %}
{% api-method-parameter name="container" type="string" required=false %}
Optional. If you set the value to the Product ID of a game, then the results from the inventory only include items related to that game. This is especially useful when calling the inventory from your server to filter results down to a specific game's products.
{% endapi-method-parameter %}
{% api-method-parameter name="expandSatisfyingEntitlements" type="string" required=false %}
A flag that indicates if the response includes all satisfying entitlements that the user has within the results returned. The default is "false". When this parameter is used with a value of "true", any products that are granted to the user through satisfying entitlements such as bundled items, Xbox 360 purchases migrated to Xbox One, subscription benefits, etc. are added to the results. When this value is "false" then only the parent items such as the Bundle's ProductID are returned in the results and not the individual included items. 
{% endapi-method-parameter %}
{% api-method-parameter name="productIds" type="string" required=false %}
A collection of ProductIds that you want to specifically retrieve from the user's inventory, separated by ','. If the user does not have a supplied ProductID in their inventory results, that item will not appear in the results from the API call. If you pass in the productID of a bundle along with the expandSatisfyingEntitlements parameter set to true, all items included in the bundle are returned in the call results (whether you specified their productIds in your query string or not).
{% endapi-method-parameter %}
{% api-method-parameter name="state" type="string" required=false %}
The state of the items to return. The default is "all", which returns all items. Other values are "Enabled", which indicates that only itemsthat are enabled should be returned, "Suspended", which indicates that only items that are suspended should be returned, "Expired", which indicates that only items which have expired should be returned, "Cancelled", which indicates that only items that are cancelled should be returned, and "Renewed", which indicates that only items that have been renewed should be returned.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
  "pagingInfo": {
    "continuationToken": string,
    "totalItems": int
  },
  "items":
  {
    "url": string,
    "itemType": "Music",
    "titleId": string,
    "containers": string,
    "obtained": DateTime,
    "startDate": DateTime,
    "endDate": DateTime,
    "state": "Enabled"  
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
