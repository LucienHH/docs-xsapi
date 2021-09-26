# POST /handles/query?include=relatedInfo

{% api-method method="post" host="https://undefined" path="/handles/query?include=relatedInfo" %}{% api-method-description %}
Creates queries for session handles that include related session information.
{% endapi-method-description %}
{% api-method-summary %}
/handles/query?include=relatedInfo
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-query-parameters %}
{% api-method-parameter name="keyword" type="string" required=false %}
A keyword, for example, "foo", that must be found in sessions or templates if they are to be retrieved.
{% endapi-method-parameter %}
{% api-method-parameter name="xuid" type="string" required=false %}
The Xbox user ID, for example, "123", for sessions to include in the query. By default, the user must be active in the session for it to be included.
{% endapi-method-parameter %}
{% api-method-parameter name="reservations" type="string" required=false %}
True to include sessions for which the user is set as a reserved player but has not joined to become an active player. This parameter is only used when querying your own sessions, or when querying a specific user's sessions server-to-server.
{% endapi-method-parameter %}
{% api-method-parameter name="inactive" type="string" required=false %}
True to include sessions that the user has accepted but is not actively playing. Sessions in which the user is "ready" but not "active" count as inactive.
{% endapi-method-parameter %}
{% api-method-parameter name="private" type="string" required=false %}
True to include private sessions. This parameter is only used when querying your own sessions, or when querying a specific user's sessions server-to-server.
{% endapi-method-parameter %}
{% api-method-parameter name="visibility" type="string" required=false %}
Visibility state for the sessions. Possible values are defined by the 
{% endapi-method-parameter %}
{% api-method-parameter name="version" type="string" required=false %}
The maximum session version that should be included. For example, a value of 2 specifies that only sessions with a major session version of 2 or less should be included. The version number must be less than or equal to the request's contract version mod 100.
{% endapi-method-parameter %}
{% api-method-parameter name="take" type="string" required=false %}
The maximum number of sessions to retrieve. This number must be between 0 and 100.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
    "results": [{
        "id": "11111111-ebe0-42da-885f-033860a818f6",
        "type": "activity",
        "version": 1,
        "sessionRef": {
            "scid": "8dfb0100-ebe0-42da-885f-033860a818f6",
            "templateName": "party",
            "name": "e3a836aeac6f4cbe9bcab985494d3175"
        },

    "titleId": "1234567",
    "ownerXuid": "3212",

    // Only if ?include=relatedInfo
        "relatedInfo": {
            "visibility": "open",
            "joinRestriction": "followed",
            "closed": true,
            "maxMembersCount": 8,
            "membersCount": 4,
        }
    },
    {
        "id": "11111111-ebe0-42da-885f-033860a818f7",
        "type": "activity",
        "version": 1,
        "sessionRef": {
            "scid": "8dfb0100-ebe0-42da-885f-033860a818f6",
            "templateName": "TitleStorageTestDefault",
            "name": "795fcaa7-8377-4281-bd7e-e86c12843632"
        },
    "titleId": "1234567",
    "ownerXuid": "3212",

    // Only if ?include=relatedInfo
        "relatedInfo": {
            "visibility": "open",
            "joinRestriction": "followed",
            "closed": false,
            "maxMembersCount": 8,
            "membersCount": 4,
        }
    }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
```text
# Sample Request

{
  "type": "activity",
  "scid": "B5B1F71F-A328-4371-89E0-C3AD222D0E92"  // optional filter on scid
  "owners": {
     "people": {
       "moniker": "favorites",
       "monikerXuid": "3210"
     }
  }
}

```