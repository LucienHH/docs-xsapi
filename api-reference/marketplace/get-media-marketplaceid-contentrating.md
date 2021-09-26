# GET /media/{marketplaceId}/contentRating

{% api-method method="get" host="https://eds.xboxlive.com" path="/media/{marketplaceId}/contentRating" %}{% api-method-description %}
Get the content rating token. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/media/{marketplaceId}/contentRating
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="marketplaceId" type="string" required=true %}
Required. String value obtained from the 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="filterExplicit" type="string" required=false %}
Optional. Filters explicit music.
{% endapi-method-parameter %}
{% api-method-parameter name="filterFamilyOnlyApps" type="string" required=false %}
Optional. Filter apps not marked as family friendly.
{% endapi-method-parameter %}
{% api-method-parameter name="filterUnrated" type="string" required=false %}
Optional. Determines whether content that is unrated should be included in the response or not.
{% endapi-method-parameter %}
{% api-method-parameter name="maxGameRating" type="string" required=false %}
Optional. Filters games.
{% endapi-method-parameter %}
{% api-method-parameter name="maxMovieRating" type="string" required=false %}
Optional. Filters movies above a specific level.
{% endapi-method-parameter %}
{% api-method-parameter name="maxTVRating" type="string" required=false %}
Optional. Filters TV.
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
