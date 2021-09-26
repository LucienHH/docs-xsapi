# GET /scids/{scid}/leaderboards/{leaderboardname}

{% api-method method="get" host="https://leaderboards.xboxlive.com" path="/scids/{scid}/leaderboards/{leaderboardname}" %}{% api-method-description %}
Gets a predefined global leaderboard.
{% endapi-method-description %}
{% api-method-summary %}
/scids/{scid}/leaderboards/{leaderboardname}
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
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
String. Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
String. Content-Types that are acceptable. Example value: 
{% endapi-method-parameter %}
{% api-method-parameter name="If-None-Match" type="string" required=false %}
String. Entity tag, used if client supports caching. Example value: 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "leaderboardInfo": 
    {   
       "displayName": "Total flags captured",
       "totalCount": 23437,
       "columns": [
              {
                  "displayName": "Flags Captured",
                  "statName": "flagscaptured",
                  "type": "Integer"
              }
       ]
    },
    "userList": [
        {
            "gamertag": "AverageJoe",
            "percentile": 55.00,
            "rank": 11718,
            "value": 1219,
            "xuid": 1234567890123444
        },
        {
            "gamertag": "AreUWatchinMe",
            "percentile": 60.00,
            "rank": 14162,
            "value": 1062,
            "xuid": 2343737892734333
        },
         {
            "gamertag": "WarriorSaint",
            "percentile": 64.39,
            "rank": 15000,
            "value ": 1000,
            "xuid": 1234567890123455
        }
    ]
}
         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
