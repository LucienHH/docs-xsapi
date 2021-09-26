# DELETE /users/xuid({xuid})/inbox/{messageId}

{% api-method method="delete" host="https://msg.xboxlive.com" path="/users/xuid({xuid})/inbox/{messageId}" %}{% api-method-description %}
Deletes a user message in the user's inbox. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/users/xuid({xuid})/inbox/{messageId}
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
The Xbox User ID (XUID) of the player who is making the request.
{% endapi-method-parameter %}
{% api-method-parameter name="messageId" type="string" required=true %}
ID of the message being retrieved or deleted.
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
