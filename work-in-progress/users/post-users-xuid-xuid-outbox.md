# POST /users/xuid({xuid})/outbox

{% api-method method="post" host="https://msg.xboxlive.com" path="/users/xuid({xuid})/outbox" %}{% api-method-description %}
Sends a specified message to a list of recipients. The domain for these URIs is 
{% endapi-method-description %}{% api-method-summary %}
Sends a specified message to a list of recipients. The domain for these URIs is 
{% endapi-method-summary %}{% api-method-spec %}
{% api-method-request %}{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
The Xbox User ID (XUID) of the player who is making the request.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text

```
{% endapi-method-response-example %}
{% endapi-method-response %}{% endapi-method-spec %}
{% endapi-method %}```text
# Sample Request

{
          "header":
          {
            "recipients":
            [{"gamertag":"GoTeamEmily"},
            {"gamertag":"Longstreet360"}]
          },
          "messageText":"random user text"
        }

```