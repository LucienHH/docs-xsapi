# DELETE /users/xuid({xuid})/devices/current/titles/current

{% api-method method="delete" host="https://userpresence.xboxlive.com" path="/users/xuid({xuid})/devices/current/titles/current" %}
        {% api-method-description %}
        Remove the presence of a closing title, instead of waiting for the 
        {% endapi-method-description %}
        {% api-method-summary %}
        Remove the presence of a closing title, instead of waiting for the 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="xuid" type="string" required=true %}
            Xbox User ID (XUID) of the target user.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-headers %}
        
            {% api-method-parameter name="Authorization" type="string" required=true %}
            Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
            {% endapi-method-parameter %}

            {% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
            Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Example values: 3, vnext.
            {% endapi-method-parameter %}

            {% api-method-parameter name="Content-Type" type="string" required=true %}
            The mime type of the body of the request Example value: application/json.
            {% endapi-method-parameter %}

            {% api-method-parameter name="Content-Length" type="string" required=true %}
            The length of the request body. Example value: 312.
            {% endapi-method-parameter %}

            {% api-method-parameter name="Host" type="string" required=true %}
            Domain name of the server. Example value: presencebeta.xboxlive.com.
            {% endapi-method-parameter %}
        {% endapi-method-headers %}
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