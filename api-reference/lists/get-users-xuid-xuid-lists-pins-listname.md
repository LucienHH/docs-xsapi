# GET /users/xuid\(xuid\)/lists/PINS/{listname}

{% api-method method="get" host="https://eplists.xboxlive.com" path="/users/xuid\(xuid\)/lists/PINS/{listname}" %}
{% api-method-summary %}
/users/xuid\(xuid\)/lists/PINS/{listname}
{% endapi-method-summary %}

{% api-method-description %}
Returns the contents of a list. The domain for these URIs is
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
Xbox User ID \(XUID\).
{% endapi-method-parameter %}

{% api-method-parameter name="listtype" type="string" required=true %}
Type of the list \(how it is used and how it acts\). Always "PINS" for these related methods.
{% endapi-method-parameter %}

{% api-method-parameter name="listname" type="string" required=true %}
Name of the list \(which list of a given listtype to act on\). Always "XBLPins" for items in Pins.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Contains the STS token used to authenticate and authorize the request. Must be a token from XSTS service and include the XUID as one of the claims.
{% endapi-method-parameter %}

{% api-method-parameter name="X-XBL-Contract-Version" type="string" required=true %}
Specifies which API version is being requested \(positive integers\). Pins supports version 2. If this header is missing or the value is not supported then the service will return a 400 – Bad request with "Unsupported or missing contract version header" in the status description.
{% endapi-method-parameter %}

{% api-method-parameter name="Content-Type" type="string" required=true %}
Specifies whether the content of request/response bodies will be in json or xml. Supported values are "application/json" and "application/xml"
{% endapi-method-parameter %}

{% api-method-parameter name="If-Match" type="string" required=true %}
This header must contain the current version number of a list when making modify requests. Modify requests use PUT, POST, or DELETE verbs. If the version in the "If-Match" header does not match the current version of the list, the request will be rejected with an HTTP 412 – precondition failed return code. \(optional\) Can also be used for GETs, if present and the passed in version matches the current list version then no list data and an HTTP 304 – Not Modified code will be returned.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="skipItems" type="string" required=false %}
Optional. Number of items to skip in the enumeration before returning results. Default value: 0.
{% endapi-method-parameter %}

{% api-method-parameter name="maxItems" type="string" required=false %}
Optional. Maximum number of items to return. The default is 25 items if no maximum is specified in the request. The service does not place a maximum on this value; if the value is greater than the number of items in the list, then all items will be returned with no error.
{% endapi-method-parameter %}

{% api-method-parameter name="filterItemId" type="string" required=false %}
Optional. Specifies the item to find in the list. Returns all instances of the item in the list. Allows the client to quickly determine if and where an item is in a list. Handy for large lists to determine all instances of an item without iterating through the entire list. Default value: null.
{% endapi-method-parameter %}

{% api-method-parameter name="filterContentType" type="string" required=false %}
Optional. Specifies a comma-separated list of content types to return \(will not return types not in the list\). Used to only get certain content types from a list. A comma-separated list of content types is used for this filter. \(Multiple content types can be queried in one call.\) Content types supported include all the media types defined by Entertainment Discovery Services \(EDS\). Default value: null \(all content types\).
{% endapi-method-parameter %}

{% api-method-parameter name="filterDeviceType" type="string" required=false %}
Optional. Specifies a comma-separated list of device types to return \(will not return types not in the list\). Filters the return set to only return items which have been inserted from a specific set of device types. A comma-separated list of device types is used for this filter \(multiple device types can be queried in one call\). Possible values: XboxOne, MCapensis, WindowsPhone, WindowsPhone7, Web, PC, MoLive. Default value: null \(all content types\).
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{ 
"ListMetadata":
  {"ListVersion": 12,
   "ListCount": 6,
   "MaxListSize": 200,
   "AccessSetting": "OwnerOnly",
   "AllowDuplicates": true
  },
"ListItems":
  [{ 
   "Index": 0,
   "DateAdded": "\/Date(1198908717056)/",
   "DateModified": "\/Date(1198908717056)/",
   "HydrationResult": "Indeterminate",
   "HydratedItem": null

   "Item":
   {
     "ContentType": "Movie",
     "ItemId": "3a5095a5-eac3-4215-944d-27bc051faa47",
     "ProviderId": null,
     "Provider": null,
     "ImageUrl": "http://www.bing.com/thumb/get?bid=Gw%2fsjCGSS4kAAQ584x800&bn=SANGAM&fbid=7wIR63+Clmj+0A&fbn=CC",
     "Title": "The Dark Knight",
     "SubTitle": null,
     "Locale": "en-us",
     "AltImageUrl": null,
     "DeviceType": "XboxOne"
    }
  }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

