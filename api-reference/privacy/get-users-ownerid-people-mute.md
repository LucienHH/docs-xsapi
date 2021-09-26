# GET /users/{ownerId}/people/mute

{% api-method method="get" host="https://privacy.xboxlive.com" path="/users/{ownerId}/people/mute" %}{% api-method-description %}
Gets the mute list for a user.
{% endapi-method-description %}
{% api-method-summary %}
/users/{ownerId}/people/mute
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Required. Identifier of the user whose resource is being accessed. The possible values are "me", 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: 
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the authorization token, and so on. Example values: 
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
Content-Types that are acceptable. Example value: 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "users":
    [
        { "xuid":"12345" },
        { "xuid":"23456" }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
