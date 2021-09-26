# GET /untrustedplatform/users/xuid({xuid})/scids/{scid}/data/{path}

{% api-method method="get" host="https://titlestorage.xboxlive.com" path="/untrustedplatform/users/xuid({xuid})/scids/{scid}/data/{path}" %}{% api-method-description %}
Lists file information at a specified path. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/untrustedplatform/users/xuid({xuid})/scids/{scid}/data/{path}
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
{% api-method-parameter name="path" type="string" required=true %}
The path to the data items to return. All matching directories and subdirectories get returned. Valid characters include uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), underscore (_), and forward slash (/). May be empty. Max length of 256.
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
{
"blobs":
[
    {
        "fileName":"foo\bar\blob.txt,binary",
        "clientFileTime":"2012-01-01T01:02:03.1234567Z",
        "displayName":"Friendly Name",
        "size":12,
        "etag":"0x8CEB3E4F8F3A5BF"
    },
    {
        "fileName":"foo\bar\blob2.txt,binary",
        "displayName":"Blob 2",
        "size":4,
        "etag":"0x8CEB3FE57F1A142"
    },
    {
        "fileName":"foo\jsonblob.txt,json",
        "size":15,
        "etag":"0x8CEB40152B4A6F8"
    }
],
"pagingInfo":
    {
        "continuationToken":"54",
    }
}
         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
