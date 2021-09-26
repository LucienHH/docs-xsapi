# GET /users/xuid({xuid})/scids/{scid}/stats/{statname)/people/{all|favorite}

{% api-method method="get" host="https://https://leaderboards.xboxlive.com/users/xuid(2533274916402282)/scids/c1ba92a9-0000-0000-0000-000000000000/stats/EnemyDefeats/people/all?sort=descending" path="/users/xuid({xuid})/scids/{scid}/stats/{statname)/people/{all|favorite}" %}{% api-method-description %}
undefined
{% endapi-method-description %}{% api-method-summary %}
undefined
{% endapi-method-summary %}{% api-method-spec %}
{% api-method-request %}{% api-method-path-parameters %}
{% api-method-parameter name="xuid" type="string" required=true %}
Identifier of the user.
{% endapi-method-parameter %}
{% api-method-parameter name="scid" type="string" required=true %}
Identifier of the service configuration that contains the resource being accessed.
{% endapi-method-parameter %}
{% api-method-parameter name="statname" type="string" required=true %}
Unique identifier of the user stat resource being accessed.
{% endapi-method-parameter %}
{% api-method-parameter name="all" type="string" required=true %}
enumeration
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}{% api-method-query-parameters %}
{% api-method-parameter name="maxItems" type="string" required=false %}
Maximum number of leaderboard records to return in a page of results. If not specified, a default number will be returned (10). The max value for maxItems is still undefined, but we want to avoid large data sets, so this value should probably target the largest set that a tuner UI could handle per call.
{% endapi-method-parameter %}
{% api-method-parameter name="skipToRank" type="string" required=false %}
Return a page of results starting with the specified leaderboard rank. The rest of the results will be in sort order by rank. This query string can return a continuation token which can be fed back into a subsequent query to get "the next page" of results.
{% endapi-method-parameter %}
{% api-method-parameter name="skipToUser" type="string" required=false %}
Return a page of leaderboard results around the specified gamer xuid, regardless of that user's rank or score. The page will be ordered by percentile rank with the specified user in the last position of the page for predefined views, or in the middle for stat leaderboard views. There is no 
{% endapi-method-parameter %}
{% api-method-parameter name="continuationToken" type="string" required=false %}
If a previous call returned a 
{% endapi-method-parameter %}
{% api-method-parameter name="sort" type="string" required=false %}
Specify whether to rank the list of players from low-to-high value order ("ascending") or high-to-low value order ("descending"). This is an optional parameter; the default is descending order.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
String. Authentication credentials for HTTP authentication. Example value: "XBL3.0 x=
{% endapi-method-parameter %}
{% api-method-parameter name="Content-Type" type="string" required=true %}
String. The MIME type of the request body. Example value: "application/json".
{% endapi-method-parameter %}
{% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1.
{% endapi-method-parameter %}
{% api-method-parameter name="Accept" type="string" required=true %}
String. Acceptable Content-Type values. Example value: "application/json".
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "pagingInfo": null,
    "leaderboardInfo": {
        "displayName": "Kills",
        "totalCount": 3,
        "columns": [
            {
                "displayName": "Kills",
                "statName": "enemydefeats",
                "type": "integer"
            }
        ]
    },
    "userList": [
        {
            "gamertag":"xxxSniper39",
            "xuid":"1234567890123555",
            "percentile":1.0,
            "rank":1,
            "values": [
                "47"
            ]
        },
        {
            "gamertag":"WarriorSaint",
            "xuid":"2533274916402282",
            "percentile":0.66,
            "rank":2,
            "values": [
                "42"
            ]
        },
        {
            "gamertag":"WhockaWhocka",
            "xuid":"1234567890123666",
            "percentile":0.33,
            "rank":3,
            "values": [
                "12"
            ]
        }
    ]
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}{% endapi-method-spec %}
{% endapi-method %}