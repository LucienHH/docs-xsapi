# GET /users/xuid({xuid})/scids/{scid}/stats

{% api-method method="get" host="https://userstats.xboxlive.com" path="/users/xuid({xuid})/scids/{scid}/stats" %}{% api-method-description %}
Gets a service configuration scoped by a comma-delimited list of user statistic names on behalf of the specified user. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/users/xuid({xuid})/scids/{scid}/stats
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
Xbox User ID (XUID) of the user on whose behalf to access the service configuration.
{% endapi-method-parameter %}
{% api-method-parameter name="scid" type="string" required=true %}
Identifier of the service configuration that contains the resource being accessed.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="statNames" type="string" required=false %}
The only query string parameter is the comma delimited user statistic name URI noun.For example, the following URI informs the service that four statistics are requested on behalf of the user id specified in the URI. 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the authentication token, and so on. Default value: 1.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "user": {
    "xuid": "123456789",
        "gamertag": "WarriorSaint",
        "stats": [
            {
                "statname": "Wins",
                "type": "Integer",
                "value": 40
            },
            {
                "statname": "Kills",
                "type": "Integer",
                "value": 700
            },
            {
                "statname": "KDRatio",
                "type": "Double",
                "value": 2.23
            },
            {
                "statname": "Headshots",
                "type": "Integer",
                "value": 173
            }
        ],
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
