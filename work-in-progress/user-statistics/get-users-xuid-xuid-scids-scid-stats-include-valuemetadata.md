# GET /users/xuid({xuid})/scids/{scid}/stats?include=valuemetadata

{% api-method method="get" host="https://userstats.xboxlive.com" path="/users/xuid({xuid})/scids/{scid}/stats?include=valuemetadata" %}{% api-method-description %}
undefined
{% endapi-method-description %}{% api-method-summary %}
undefined
{% endapi-method-summary %}{% api-method-spec %}
{% api-method-request %}{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
Xbox User ID (XUID) of the user on whose behalf to access the service configuration.
{% endapi-method-parameter %}
{% api-method-parameter name="scid" type="string" required=true %}
Identifier of the service configuration that contains the resource being accessed.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}{% api-method-query-parameters %}
{% api-method-parameter name="statNames" type="string" required=false %}
A comma delimited list of user statistic names.For example, the following URI informs the service that four statistics are requested on behalf of the user id specified in the URI.{::nomakrdown}
{% endapi-method-parameter %}
{% api-method-parameter name="include=valuemetadata" type="string" required=false %}
Indicates that the response includes any value metadata associated with the uset stat values.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
{% endapi-method-parameter %}
{% api-method-parameter name="X-Xbl-Contract-Version" type="string" required=true %}
Indicates which version of the API to use. This value must be set to "3" in order to include value metadata in the response.
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}{% api-method-response %}
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
        "value": 40,
        "valuemetadata" : "{\"region\" : \"EU\", \"isRanked\" : true}"
      },
      {
        "statname": "Kills",
        "type": "Integer",
        "value": 700,
        "valuemetadata" : "{\"longestKillStreak" : 15, \"favoriteTarget\" : \"CrazyPigeon\"}"
      },
      {
        "statname": "KDRatio",
        "type": "Double",
        "value": 2.23,
        "valuemetadata" : "{\"totalKills\" : 700, \"totalDeaths\" : 314}"
      },
      {
        "statname": "Headshots",
        "type": "Integer",
        "value": 173,
        "valuemetadata" : ""
      }
    ],
  }
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}{% endapi-method-spec %}
{% endapi-method %}