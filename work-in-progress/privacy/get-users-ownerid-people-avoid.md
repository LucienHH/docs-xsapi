# GET /users/{ownerId}/people/avoid

{% api-method method="get" host="https://undefined" path="/users/{ownerId}/people/avoid" %}{% api-method-description %}
Gets the Avoid list for a user.
{% endapi-method-description %}
{% api-method-summary %}
undefined
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="ownerId" type="string" required=true %}
Required. Identifier of the user whose resource is being accessed. The possible values are 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: 
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
