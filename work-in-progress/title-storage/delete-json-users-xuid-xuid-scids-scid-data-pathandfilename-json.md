# DELETE /json/users/xuid({xuid})/scids/{scid}/data/{pathAndFileName},json

{% api-method method="delete" host="https://titlestorage.xboxlive.com" path="/json/users/xuid({xuid})/scids/{scid}/data/{pathAndFileName},json" %}{% api-method-description %}
Deletes a file. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
undefined
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
The Xbox User ID (XUID) of the player who making the request.
{% endapi-method-parameter %}
{% api-method-parameter name="scid" type="string" required=true %}
the ID of the service config to look up.
{% endapi-method-parameter %}
{% api-method-parameter name="pathAndFileName" type="string" required=true %}
Path and file name for the item to be accessed. Valid characters for the path portion (up to and including the final forward slash) include uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), underscore (
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-headers %}
{% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
API contract version.
{% endapi-method-parameter %}
{% api-method-parameter name="Authorization" type="string" required=true %}
STS authentication token. STSTokenString is replaced by the token returned by the authentication request. See Authenticating and Authorizing Xbox LIVE Services Requests for additional information about retrieving an STS token and creating an authorization header.
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
