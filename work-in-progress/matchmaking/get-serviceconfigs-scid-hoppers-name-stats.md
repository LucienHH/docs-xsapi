# GET /serviceconfigs/{scid}/hoppers/{name}/stats

{% api-method method="get" host="https://undefined" path="/serviceconfigs/{scid}/hoppers/{name}/stats" %}
        {% api-method-description %}
        Gets the statistics for a hopper.
        {% endapi-method-description %}
        {% api-method-summary %}
        Gets the statistics for a hopper.
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
        {% endapi-method-path-parameters %}
{% endapi-method-request %}
        {% api-method-response %}
        
        {% api-method-response-example httpCode=200 %}
        {% api-method-response-example-description %}
        
        {% endapi-method-response-example-description %}
        
        ```text
        {
      "hopperName":"contosoawesome2",
      "waitTime":30,
      "population":1
    }

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}