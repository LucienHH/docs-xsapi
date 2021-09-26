# GET /users/{ownerId}/summary

{% api-method method="get" host="https://social.xboxlive.com" path="/users/{ownerId}/summary" %}{% api-method-description %}
Gets summary data about the owner from the caller's perspective.
{% endapi-method-description %}
{% api-method-summary %}
/users/{ownerId}/summary
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Identifier of the user whose resource is being accessed. The possible values are "me", xuid({xuid}), or gt({gamertag}). Example values: 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authorization data for . This is typically an encrypted XSTS token. Example value: 
{% endapi-method-parameter %}
{% api-method-parameter name="x-xbl-contract-version" type="string" required=false %}
Build name/number of the service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Example values: 1
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=false %}
Content-Types that are acceptable. All responses will be 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "targetFollowingCount": 87,
    "targetFollowerCount": 19,
    "isCallerFollowingTarget": true,
    "isTargetFollowingCaller": false,
    "hasCallerMarkedTargetAsFavorite": true,
    "hasCallerMarkedTargetAsKnown": true,
    "legacyFriendStatus": "None",
    "recentChangeCount": 5,
    "watermark": "5246775845000319351"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
