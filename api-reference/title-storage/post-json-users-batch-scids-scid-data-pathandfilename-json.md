# POST /json/users/batch/scids/{scid}/data/{pathAndFileName},json

{% api-method method="post" host="https://titlestorage.xboxlive.com" path="/json/users/batch/scids/{scid}/data/{pathAndFileName},json" %}
{% api-method-summary %}
/json/users/batch/scids/{scid}/data/{pathAndFileName},json
{% endapi-method-summary %}

{% api-method-description %}
Downloads multiple files from multiple users with the same filename. The file to be downloaded is determined by the URI of the request. The body of the request contains the list of XUIDs of the users whose files to download. The body of the response will be a multi-part MIME message, with each part representing a file for a particular user with its own set of headers. It's possible for the parts of the response to be a mix of successes and failures. The domain for these URIs is
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
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Content-Type: multipart/form-data; boundary=c0a9fd75-d036-4294-8b7b-85fea15a31bb

228
--c0a9fd75-d036-4294-8b7b-85fea15a31bb
Content-Disposition: binary; name="123"; filename="123"
HttpStatusCode: 200
ETag: 0x8CF327717411C31
Content-Type: application/octet-stream

asdf123
--c0a9fd75-d036-4294-8b7b-85fea15a31bb
Content-Disposition: binary; name="456"; filename="456"
HttpStatusCode: 200
ETag: 0x8CF32771E954BB8
Content-Type: application/octet-stream

asdf456
--c0a9fd75-d036-4294-8b7b-85fea15a31bb
Content-Disposition: binary; name="789"; filename="789"
HttpStatusCode: 404


--c0a9fd75-d036-4294-8b7b-85fea15a31bb--

0
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

```text
# Sample Request

{
    "xuids" : 
    [
      12345,
      45678,
      78901
    ]
}
```

