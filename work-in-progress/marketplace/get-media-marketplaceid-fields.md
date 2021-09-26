# GET /media/{marketplaceId}/fields

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/fields" %}{% api-method-description %}
Gets the fields token. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/media/{marketplaceId}/fields
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="marketplaceId" type="string" required=true %}
Required. String value obtained from the 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="desired" type="string" required=false %}
Required. The '.'-separated list of fields that should be returned in addition to the minimum set. Not all fields specified are guaranteed to be returned for each object (data may simply not exist for certain items), but no fields outside the minimum set that aren't specified here will be returned.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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
