# POST /handles/query

{% api-method method="post" host="https://undefined" path="/handles/query" %}
        {% api-method-description %}
        Creates queries for session handles.
        {% endapi-method-description %}
        {% api-method-summary %}
        Creates queries for session handles.
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
        
        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}