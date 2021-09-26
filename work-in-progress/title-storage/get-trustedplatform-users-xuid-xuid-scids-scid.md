# GET /trustedplatform/users/xuid({xuid})/scids/{scid}

{% api-method method="get" host="https://titlestorage.xboxlive.com" path="/trustedplatform/users/xuid({xuid})/scids/{scid}" %}
        {% api-method-description %}
        Retrieves quota information for this storage type. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Retrieves quota information for this storage type. The domain for these URIs is 
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
  "quotaInfo" :
  {
    "usedBytes" : 619,
    "quotaBytes" : 16777216
  }
}
         

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}