# GET /serviceconfigs/{scid}/sessiontemplates

{% api-method method="get" host="https://undefined" path="/serviceconfigs/{scid}/sessiontemplates" %}
        {% api-method-description %}
        Retrieves a set of MPSD session templates.
        {% endapi-method-description %}
        {% api-method-summary %}
        Retrieves a set of MPSD session templates.
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="scid" type="string" required=true %}
            Service configuration identifer (SCID). Part 1 of the session ID.
            {% endapi-method-parameter %}

            {% api-method-parameter name="sessionTemplateName" type="string" required=true %}
            Name of the current instance of the session template. Part 2 of the session ID.
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