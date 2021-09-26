# undefined /users/xuid(xuid)/lists/PINS/{listname}/RemoveItems

{% api-method method="options" host="https://eplists.xboxlive.com" path="/users/xuid(xuid)/lists/PINS/{listname}/RemoveItems" %}{% api-method-description %}
Removes items from a list by index. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
undefined
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="XUID" type="string" required=true %}
XUID of the user.
{% endapi-method-parameter %}
{% api-method-parameter name="listname" type="string" required=true %}
Name of the list to manipulate.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="indexes" type="string" required=false %}
Zero or a positive integer. The numbers do not have to be contiguous. For example, the query parameter indexes=1,8 will remove the items at indexes 1 and 8. 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Contains the STS token used to authenticate and authorize the request. Must be a token from XSTS service and include the XUID as one of the claims.
{% endapi-method-parameter %}
{% api-method-parameter name="X-XBL-Contract-Version" type="string" required=true %}
Specifies which API version is being requested (positive integers). Pins supports version 2. If this header is missing or the value is not supported then the service will return a 400 – Bad request with "Unsupported or missing contract version header" in the status description.
{% endapi-method-parameter %}
{% api-method-parameter name="Content-Type" type="string" required=true %}
Specifies whether the content of request/response bodies will be in json or xml. Supported values are "application/json" and "application/xml"
{% endapi-method-parameter %}
{% api-method-parameter name="If-Match" type="string" required=true %}
This header must contain the current version number of a list when making modify requests. Modify requests use PUT, POST, or DELETE verbs. If the version in the "If-Match" header does not match the current version of the list, the request will be rejected with an HTTP 412 – precondition failed return code. (optional) Can also be used for GETs, if present and the passed in version matches the current list version then no list data and an HTTP 304 – Not Modified code will be returned.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
        "ListVersion":  1,
        "ListCount":  1,
        "MaxListSize": 200,
        "AllowDuplicates": "true",
        "AccessSetting":  "OwnerOnly"
        }

      
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
