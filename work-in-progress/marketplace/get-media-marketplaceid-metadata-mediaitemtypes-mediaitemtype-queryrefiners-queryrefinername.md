# GET /media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername}

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername}" %}{% api-method-description %}
Lists the acceptable values for the given query refiner name and given media item type. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/media/{marketplaceId}/metadata/mediaItemTypes/{mediaitemtype}/queryrefiners/{queryrefinername}
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
{% api-method-parameter name="queryrefinername" type="string" required=true %}
Required. Name of the query refiner for which values are needed, such as "Genre" or "Decade". See QueryRefiners.
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
