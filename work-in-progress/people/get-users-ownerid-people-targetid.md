# GET /users/{ownerId}/people/{targetid}

{% api-method method="get" host="https://social.xboxlive.com" path="/users/{ownerId}/people/{targetid}" %}{% api-method-description %}
Gets a person by target ID from caller's people collection. The domain for these URIs is 
{% endapi-method-description %}{% api-method-summary %}
Gets a person by target ID from caller's people collection. The domain for these URIs is 
{% endapi-method-summary %}{% api-method-spec %}
{% api-method-request %}{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid({xuid}), or gt({gamertag}).
{% endapi-method-parameter %}
{% api-method-parameter name="targetid" type="string" required=true %}
Identifier of the user whose data is being retrieved from the owner's People list, either an Xbox User ID (XUID) or a gamertag. Example values: xuid(2603643534573581), gt(SomeGamertag).
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}{% api-method-headers %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
String. Content-Types that the caller accepts in the response. All responses are 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "xuid": "2603643534573581",
    "isFavorite": false,
    "isFollowingCaller": false,
    "socialNetworks": ["LegacyXboxLive"]
}
         

```
{% endapi-method-response-example %}
{% endapi-method-response %}{% endapi-method-spec %}
{% endapi-method %}