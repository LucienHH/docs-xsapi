# DELETE /serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid}

{% api-method method="delete" host="https://undefined" path="/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid}" %}{% api-method-description %}
Removes a match ticket.
{% endapi-method-description %}
{% api-method-summary %}
/serviceconfigs/{scid}/hoppers/{hoppername}/tickets/{ticketid}
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
The service configuration identifier (SCID) for the session.
{% endapi-method-parameter %}
{% api-method-parameter name="name" type="string" required=true %}
The name of the hopper.
{% endapi-method-parameter %}
{% api-method-parameter name="ticketId" type="string" required=true %}
The ticket ID.
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
