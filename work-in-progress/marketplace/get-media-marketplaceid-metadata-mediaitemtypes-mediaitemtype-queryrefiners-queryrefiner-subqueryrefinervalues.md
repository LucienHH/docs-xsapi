# GET /media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/subQueryRefinerValues

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryRefiner}/subQueryRefinerValues" %}
        {% api-method-description %}
        Get the list of sub-values for a given query refiner value (e.g., "subgenres in a given genre"). The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Get the list of sub-values for a given query refiner value (e.g., "subgenres in a given genre"). The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="marketplaceId" type="string" required=true %}
            Required. String value obtained from the 
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