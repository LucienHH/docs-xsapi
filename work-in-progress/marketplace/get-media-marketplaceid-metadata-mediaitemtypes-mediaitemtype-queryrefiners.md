# GET /media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners" %}
        {% api-method-description %}
        Lists the query refiners for the given media item type. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Lists the query refiners for the given media item type. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="marketplaceId" type="string" required=true %}
            Required. String value obtained from the 
            {% endapi-method-parameter %}

            {% api-method-parameter name="mediaitemtype" type="string" required=true %}
            Required. One of the values from 
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