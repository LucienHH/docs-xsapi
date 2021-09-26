# POST /users/{ownerId}/people/xuids

{% api-method method="post" host="https://social.xboxlive.com" path="/users/{ownerId}/people/xuids" %}{% api-method-description %}
Gets people by XUID from caller's people collection. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/users/{ownerId}/people/xuids
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Identifier of the user whose resource is being accessed. Must match the authenticated user. The possible values are "me", xuid({xuid}), or gt({gamertag}).
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
String. Authorization data for Xbox LIVE. This is typically an encrypted XSTS token. Example value: 
{% endapi-method-parameter %}
{% api-method-parameter name="Content-Length" type="string" required=true %}
32-bit unsigned integer. Length, in bytes, of the request body. Example value: 22.
{% endapi-method-parameter %}
{% api-method-parameter name="Content-Type" type="string" required=true %}
String. MIME type of the request body. This must be 
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=false %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=false %}
String. Content-Types that the caller accepts in the response. All responses are 
{% endapi-method-parameter %}
{% endapi-method-headers %}
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
            "isFavorite": false,
            "isFollowingCaller": false
        },
    ],
    "totalCount": 3
}
         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
```text
# Sample Request

{
    "xuids": [
        "2533274790395904", 
        "2533274792986770", 
        "2533274794866999"
    ]
}
      

```