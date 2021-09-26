# GET /users/xuid({xuid})/groups/{moniker}/broadcasting/count

{% api-method method="get" host="https://userpresence.xboxlive.com" path="/users/xuid({xuid})/groups/{moniker}/broadcasting/count" %}{% api-method-description %}
Retrieves the count of the broadcasting users specified by the groups moniker related to the XUID that appears in the URI. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/users/xuid({xuid})/groups/{moniker}/broadcasting/count
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
Xbox User ID (XUID) of the user related to the XUIDs in the Group.
{% endapi-method-parameter %}
{% api-method-parameter name="moniker" type="string" required=true %}
String defining the group of users. The only accepted moniker at present is "People" with an uppercase 'P'.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="level" type="string" required=false %}
Returns the level of detail as specified by this query string. Valid options include "user", "device", "title", and "all".The level "user" is the PresenceRecord object without the DeviceRecord nested object. The level "device" is the PresenceRecord and DeviceRecord objects without the TitleRecord nested object. The level "title" is the PresenceRecord, DeviceRecord, and TitleRecord objects without the ActivityRecord nested object. The level "all" is the entire record, including all nested objects.If this parameter is not provided, the service defaults to the title level (that is, it returns presence for this user down to the details of title).
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
{% endapi-method-parameter %}
{% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
Content-Types that are acceptable. The only one Presence supports is 
{% endapi-method-parameter %}
{% api-method-parameter name="Accept-Language" type="string" required=true %}
Acceptable locale for strings in the response. Example value: en-US.
{% endapi-method-parameter %}
{% api-method-parameter name="Host" type="string" required=true %}
Domain name of the server. Example value: userpresence.xboxlive.com.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "count":42
 }

         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
