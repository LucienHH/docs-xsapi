# GET /media/{marketplaceId}/metadata/mediaItemTypes

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/metadata/mediaItemTypes" %}
{% api-method-summary %}
/media/{marketplaceId}/metadata/mediaItemTypes
{% endapi-method-summary %}

{% api-method-description %}
Lists all supported mediaItemTypes for the given EDS version. The domain for these URIs is
{% endapi-method-description %}

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

