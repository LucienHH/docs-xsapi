# DELETE /serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/

{% api-method method="delete" host="https://sessiondirectory.xboxlive.com" path="/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/me" %}
{% api-method-summary %}
/serviceconfigs/{scid}/sessiontemplates/{sessionTemplateName}/sessions/{sessionName}/members/me
{% endapi-method-summary %}

{% api-method-description %}
Removes a member from a session.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
Service configuration identifier \(SCID\). Part 1 of the session identifier.
{% endapi-method-parameter %}

{% api-method-parameter name="sessionTemplateName" type="string" required=true %}
Name of the current instance of the session template. Part 2 of the session identifier.
{% endapi-method-parameter %}

{% api-method-parameter name="sessionName" type="string" required=true %}
Unique ID of the session. Part 3 of the session identifier.
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

