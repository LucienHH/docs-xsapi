# GET /handles/{handle-id}

{% api-method method="get" host="https://undefined" path="/handles/{handle-id}" %}
        {% api-method-description %}
        Retrieves handles specified by handle ID.
        {% endapi-method-description %}
        {% api-method-summary %}
        Retrieves handles specified by handle ID.
        {% endapi-method-summary %}
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