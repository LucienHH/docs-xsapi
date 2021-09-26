# GET /serviceconfigs/{scid}/sessions

{% api-method method="get" host="https://undefined" path="/serviceconfigs/{scid}/sessions" %}{% api-method-description %}
Retrieves specified session information.
{% endapi-method-description %}
{% api-method-summary %}
/serviceconfigs/{scid}/sessions
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="scid" type="string" required=true %}
Service configuration identifier (SCID). Part 1 of the session ID.
{% endapi-method-parameter %}
{% api-method-parameter name="keyword" type="string" required=true %}
A keyword used to filter results to just sessions identified with that string.
{% endapi-method-parameter %}
{% api-method-parameter name="xuid" type="string" required=true %}
Xbox user IDs for the users for whom to retrieve sessions. The users must be active in the sessions.
{% endapi-method-parameter %}
{% api-method-parameter name="reservations" type="string" required=true %}
Value indicating if the list of sessions includes those that the users have not accepted. This parameter can only be set to true. This setting requires the caller to have server-level access to the session, or the caller's XUID claim to match the Xbox user ID filter.
{% endapi-method-parameter %}
{% api-method-parameter name="inactive" type="string" required=true %}
Value indicating if the list of sessions includes those that the users have accepted but are not actively playing. This parameter can only be set to true.
{% endapi-method-parameter %}
{% api-method-parameter name="private" type="string" required=true %}
Value indicating if the list of sessions includes private sessions. This parameter can only be set to true. It is valid only when querying your own sessions, or when querying server-to-server. Setting this parameter to true requires the caller to have server-level access to the session, or the caller's XUID claim to match the Xbox user ID filter.
{% endapi-method-parameter %}
{% api-method-parameter name="visibility" type="string" required=true %}
An enumeration value indicating visibility status used in filtering results. Currently this parameter can only be set to Open to include open sessions. See 
{% endapi-method-parameter %}
{% api-method-parameter name="version" type="string" required=true %}
A positive integer indicating the major session version or lower of the sessions to include. The value must be less than or equal to the request's contract version modulo 100.
{% endapi-method-parameter %}
{% api-method-parameter name="take" type="string" required=true %}
A positive integer indicating the maximum number of sessions to retrieve.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
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
