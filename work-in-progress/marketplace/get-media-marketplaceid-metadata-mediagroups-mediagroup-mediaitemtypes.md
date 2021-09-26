# GET /media/{marketplaceId}/metadata/mediaGroups/{mediagroup}/mediaItemTypes

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/metadata/mediaGroups/{mediagroup}/mediaItemTypes" %}
        {% api-method-description %}
        Lists the available mediaItemTypes per media group for the given version of EDS. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Lists the available mediaItemTypes per media group for the given version of EDS. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="marketplaceId" type="string" required=true %}
            Required. String value obtained from the 
            {% endapi-method-parameter %}

            {% api-method-parameter name="mediagroup" type="string" required=true %}
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