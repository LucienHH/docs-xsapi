# GET /users/xuid({xuid})/history/titles

{% api-method method="get" host="https://achievements.xboxlive.com" path="/users/xuid({xuid})/history/titles" %}
        {% api-method-description %}
        Gets a list of titles for which the user has unlocked or made progress on its achievements. This API does not return a user's full history of titles played or launched. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Gets a list of titles for which the user has unlocked or made progress on its achievements. This API does not return a user's full history of titles played or launched. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="xuid" type="string" required=true %}
            Xbox User ID (XUID) of the user whose title history is being accessed.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-query-parameters %}
        
            {% api-method-parameter name="skipItems" type="string" required=false %}
            Return items beginning after the given number of items. For example, 
            {% endapi-method-parameter %}

            {% api-method-parameter name="continuationToken" type="string" required=false %}
            Return the items starting at the given continuation token.
            {% endapi-method-parameter %}

            {% api-method-parameter name="maxItems" type="string" required=false %}
            Maximum number of items to return from the collection, which can be combined with 
            {% endapi-method-parameter %}
        {% endapi-method-query-parameters %}
        {% api-method-headers %}
        
            {% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
            Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc.
            {% endapi-method-parameter %}

            {% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
            If present and set to 2, the V2 version of this API will be used. Otherwise, V1.
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