# GET /global/scids/{scid}/data/{pathAndFileName},{type}

{% api-method method="get" host="https://titlestorage.xboxlive.com" path="/global/scids/{scid}/data/{pathAndFileName},{type}" %}
{% api-method-summary %}
/global/scids/{scid}/data/{pathAndFileName},{type}
{% endapi-method-summary %}

{% api-method-description %}
Downloads a file. The domain for these URIs is
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
the ID of the service config to look up.
{% endapi-method-parameter %}

{% api-method-parameter name="pathAndFileName" type="string" required=true %}
Path and file name for the item to be accessed. Valid characters for the path portion \(up to and including the final forward slash\) include uppercase letters \(A-Z\), lowercase letters \(a-z\), numbers \(0-9\), underscore \(
{% endapi-method-parameter %}

{% api-method-parameter name="type" type="string" required=true %}
The format of the data. Possible values are: binary, config or json.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
API contract version.
{% endapi-method-parameter %}

{% api-method-parameter name="Authorization" type="string" required=true %}
STS authentication token. STSTokenString is replaced by the token returned by the authentication request. See Authenticating and Authorizing Xbox LIVE Services Requests for additional information about retrieving an STS token and creating an authorization header.
{% endapi-method-parameter %}

{% api-method-parameter name="If-Match" type="string" required=false %}
Specifies an ETag that must match an exisitng item to complete the operation.
{% endapi-method-parameter %}

{% api-method-parameter name="If-None-Match" type="string" required=false %}
Specifies an ETag that must not match any exisitng items to complete the operation.
{% endapi-method-parameter %}

{% api-method-parameter name="Range" type="string" required=false %}
Specifies the range of bytes to download. Follows the standard HTTP Range header format.
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

