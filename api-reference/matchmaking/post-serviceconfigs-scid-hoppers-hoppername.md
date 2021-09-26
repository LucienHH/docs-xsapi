# POST /serviceconfigs/{scid}/hoppers/{hoppername}

{% api-method method="post" host="https://momatch.xboxlive.com" path="/serviceconfigs/{scid}/hoppers/{hoppername}" %}
{% api-method-summary %}
/serviceconfigs/{scid}/hoppers/{hoppername}
{% endapi-method-summary %}

{% api-method-description %}
Creates the specified match ticket.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
The service configuration identifier \(SCID\) for the session.
{% endapi-method-parameter %}

{% api-method-parameter name="hoppername" type="string" required=true %}
The name of the hopper.
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

```text
# Sample Request

POST /serviceconfigs/{scid}/hoppers/{hoppername}

{
  "giveUpDuration":10,
  "preserveSession": "never",
  "ticketSessionRef": {
     "scid": "ABBACDDC-0000-0000-0000-000000000001",  
     "templateName": "TestTemplate",
     "name": "5E55104-0000-0000-0000-000000000001"
  },
  "ticketAttributes": {
    "desiredMap": "Test Map",
    "desiredGameType": "Test GameType"
  }
}
```

