# GET /users/{requestorId}/permission/validate

{% api-method method="get" host="https://undefined" path="/users/{requestorId}/permission/validate" %}{% api-method-description %}
Gets a yes-or-no answer about whether the user is allowed to perform the specified action with a target user.
{% endapi-method-description %}
{% api-method-summary %}
/users/{requestorId}/permission/validate
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="requestorId" type="string" required=true %}
Required. Identifier of the user performing the action. The possible values are 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="setting" type="string" required=false %}
The PermissionId value to check against. Example value: "CommunicateUsingText".
{% endapi-method-parameter %}
{% api-method-parameter name="target" type="string" required=false %}
Identifier of the user on whom the action is to be performed. The possible values are 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example values: 
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Example value: 1.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "isAllowed": false,
    "reasons":
    [
        {"reason": "BlockedByRequestor"},
        {"reason": "MissingPrivilege", "restrictedSetting": "VideoCommunications"}
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
