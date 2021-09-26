# PUT /handles/{handle-id}/session

{% api-method method="put" host="https://sessiondirectory.xboxlive.com" path="/handles/{handle-id}/session" %}
{% api-method-summary %}
/handles/{handle-id}/session
{% endapi-method-summary %}

{% api-method-description %}
Creates or updates a session by dereferencing a handle.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="handleId" type="string" required=true %}
The unique ID of the handle for the session.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

