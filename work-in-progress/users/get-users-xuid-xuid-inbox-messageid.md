# GET /users/xuid({xuid})/inbox/{messageId}

{% api-method method="get" host="https://msg.xboxlive.com" path="/users/xuid({xuid})/inbox/{messageId}" %}
        {% api-method-description %}
        Retrieves the detailed message text for a particular user message, marking it as read on the service. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Retrieves the detailed message text for a particular user message, marking it as read on the service. The domain for these URIs is 
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
        {
          "header":
          {
            "expiration":"2011-10-11T23:59:59.9999999",
            "messageType":"User",
            "senderXuid":"123456789",
            "sender":"Striker",
            "sent":"2011-05-08T17:30:00Z",
            "hasAudio":false,
            "hasPhoto":false,
            "hasText":true
          },
        "messageText":"random user text up to 256 characters"
        }

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}