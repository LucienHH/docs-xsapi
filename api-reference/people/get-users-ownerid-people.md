# GET /users/{ownerId}/people

{% api-method method="get" host="https://social.xboxlive.com" path="/users/{ownerId}/people" %}
{% api-method-summary %}
/users/{ownerId}/people
{% endapi-method-summary %}

{% api-method-description %}
Gets caller's people collection. The domain for these URIs is
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid\({xuid}\), or gt\({gamertag}\).
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
String. Authorization data for Xbox LIVE. This is typically an encrypted XSTS token. Example value:
{% endapi-method-parameter %}

{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=false %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
{% endapi-method-parameter %}

{% api-method-parameter name="Accept" type="string" required=false %}
String. Content-Types that the caller accepts in the response. All responses are
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="view" type="string" required=false %}
Return the people associated with a view. The default value is "all". The possible values are:
{% endapi-method-parameter %}

{% api-method-parameter name="startIndex" type="string" required=false %}
Return the items starting at the given index.
{% endapi-method-parameter %}

{% api-method-parameter name="maxItems" type="string" required=false %}
Maximum number of people to return from the collection starting from the start index. The service may provide a default value if
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "people": [
        {
            "xuid": "2603643534573573",
            "isFavorite": true,
            "isFollowingCaller": false,
            "socialNetworks": ["LegacyXboxLive"]
        },
        {
            "xuid": "2603643534573572",
            "isFavorite": true,
            "isFollowingCaller": false,
            "socialNetworks": ["LegacyXboxLive"]
        },
        {
            "xuid": "2603643534573577",
            "isFollowingCaller": false,
            "isFavorite": false
        },
    ],
    "totalCount": 3
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

