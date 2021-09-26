# GET /scids/{scid}/leaderboards/{leaderboardname}?include=valuemetadata

{% api-method method="get" host="https://leaderboards.xboxlive.com" path="/scids/{scid}/leaderboards/{leaderboardname}?include=valuemetadata" %}{% api-method-description %}
Gets a predefined global leaderboard along with any metadata associated with the leaderboard values.
{% endapi-method-description %}
{% api-method-summary %}
/scids/{scid}/leaderboards/{leaderboardname}?include=valuemetadata
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
Identifier of the service configuration which contains the resource being accessed.
{% endapi-method-parameter %}
{% api-method-parameter name="leaderboardname" type="string" required=true %}
Unique identifier of the predefined leaderboard resource being accessed.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% api-method-query-parameters %}
{% api-method-parameter name="include=valuemetadata" type="string" required=false %}
Indicates that the response includes any value metadata associated with the leaderboard values.
{% endapi-method-parameter %}
{% api-method-parameter name="maxItems" type="string" required=false %}
Maximum number of leaderboard records to return in a page of results. If not specified, a default number will be returned (10). The max value for maxItems is still undefined, but we want to avoid large data sets, so this value should probably target the largest set that a tuner UI could handle per call.
{% endapi-method-parameter %}
{% api-method-parameter name="skipToRank" type="string" required=false %}
Return a page of results starting with the specified leaderboard rank. The rest of the results will be in sort order by rank. This query string can return a continuation token which can be fed back into a subsequent query to get "the next page" of results.
{% endapi-method-parameter %}
{% api-method-parameter name="skipToUser" type="string" required=false %}
Return a page of leaderboard results around the specified gamer xuid, regardless of that user's rank or score. The page will be ordered by percentile rank with the specified user in the last position of the page for predefined views, or in the middle for stat leaderboard views. There is no continuationToken provided for this type of query.
{% endapi-method-parameter %}
{% api-method-parameter name="continuationToken" type="string" required=false %}
If a previous call returned a continuationToken, then the caller can pass back that token "as is" in a query string to get the next page of results.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
String. Authentication credentials for HTTP authentication. Example value: 
{% endapi-method-parameter %}
{% api-method-parameter name="X-Xbl-Contract-Version" type="string" required=true %}
String. Indicates which version of the API to use. This value must be set to "3" in order to include value metadata in the response.
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
String. Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
String. Content-Types that are acceptable. Example value: 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "pagingInfo": {
        "continuationToken": "15003",
        "totalItems": 23437
    },
    "leaderboardInfo": {
        "displayName": "Total flags captured",
        "totalCount": 23437,
        "columnDefinition" : 
            {
                "displayName": "Flags Captured",
                "statName": "flagscaptured",
                "type": "Integer"
            }
    },
    "userList": [
        {
            "gamertag": "WarriorSaint",
            "xuid": "1234567890123444",
            "percentile": 0.64,
            "rank": 15000,
            "value": "1002",
            "valuemetadata" : "{\"color\" : \"silver\",\"weight\" : 2000, \"israining\" : false}"
        },
        {
            "gamertag": "xxxSniper39",
            "xuid": "1234567890123555",
            "percentile": 0.64,
            "rank": 15001,
            "value": "993",
            "valuemetadata" : "{\"color\" : \"silver\",\"weight\" : 2020, \"israining\" : true}"
 
        },
        {
            "gamertag": "WhockaWhocka",
            "xuid": "1234567890123666",
            "percentile": 0.64,
            "rank": 15002,
            "value": "700",
            "valuemetadata" : "{\"color\" : \"red\",\"weight\" : 300, \"israining\" : false}"
        }
    ]
}
         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
