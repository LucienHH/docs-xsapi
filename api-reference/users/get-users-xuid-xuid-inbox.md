# GET /users/xuid\({xuid}\)/inbox

{% api-method method="get" host="https://msg.xboxlive.com" path="/users/xuid\({xuid}\)/inbox" %}
{% api-method-summary %}
/users/xuid\({xuid}\)/inbox
{% endapi-method-summary %}

{% api-method-description %}
Retrieves a specified number of user message summaries from the service. The domain for these URIs is
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
The Xbox User ID \(XUID\) of the player who is making the request.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="maxItems" type="string" required=false %}
Maximum number of messages returned.
{% endapi-method-parameter %}

{% api-method-parameter name="continuationToken" type="string" required=false %}
String returned in a previous enumeration call; used to continue enumeration.
{% endapi-method-parameter %}

{% api-method-parameter name="skipItems" type="string" required=false %}
Number of messages to skip; ignored if continuationToken is present.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
          "results":
          [
            {
              "header":
              {
                "expiration":"2011-10-11T23:59:59.9999999",
                "id":"opaqueBlobOfText",
                "messageType":"User",
                "isRead":false,
                "senderXuid":"123456789",
                "sender":"Striker",
                "sent":"2011-05-08T17:30:00Z",
                "hasAudio":false,
                "hasPhoto":false,
                "hasText":true
              },
            "messageSummary":"first 20 chars"
          },
          ...
        ],
        "pagingInfo":
          {
          "continuationToken":"opaqueBlobOfText"
          "totalItems":5,
          }
        }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

