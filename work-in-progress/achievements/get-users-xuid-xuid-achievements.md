# GET /users/xuid({xuid})/achievements

{% api-method method="get" host="https://achievements.xboxlive.com" path="/users/xuid({xuid})/achievements" %}
        {% api-method-description %}
        Gets the list of achievements defined on the title, those unlocked by the user, or those the user has in progress. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Gets the list of achievements defined on the title, those unlocked by the user, or those the user has in progress. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="xuid" type="string" required=true %}
            Xbox User ID (XUID) of the user whose (resource) is being accessed. Must match the XUID of the authenticated user.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-query-parameters %}
        
            {% api-method-parameter name="skipItems" type="string" required=false %}
            Return items beginning after the given number of items. For example, 
            {% endapi-method-parameter %}

            {% api-method-parameter name="continuationToken" type="string" required=false %}
            Return the items starting at the given continuation token.
            {% endapi-method-parameter %}

            {% api-method-parameter name="maxItems" type="string" required=false %}
            Maximum number of items to return from the collection, which can be combined with 
            {% endapi-method-parameter %}

            {% api-method-parameter name="titleId" type="string" required=false %}
            A filter for the returned results. Accepts one or more comma-delimited, decimal title identifiers.
            {% endapi-method-parameter %}

            {% api-method-parameter name="unlockedOnly" type="string" required=false %}
            Filter for the returned results. If set to 
            {% endapi-method-parameter %}

            {% api-method-parameter name="possibleOnly" type="string" required=false %}
            Filter for the returned results. If set to 
            {% endapi-method-parameter %}

            {% api-method-parameter name="types" type="string" required=false %}
            A filter for the returned results. Can be "Persistent" or "Challenge". Default is all supported types.
            {% endapi-method-parameter %}

            {% api-method-parameter name="orderBy" type="string" required=false %}
            Specifies the order in which to return the results. Can be "Unordered", "Title", "UnlockTime", or "EndingSoon". The default is "Unordered".
            {% endapi-method-parameter %}
        {% endapi-method-query-parameters %}
        {% api-method-headers %}
        
            {% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
            Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, etc. Default value: 1.
            {% endapi-method-parameter %}

            {% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
            If present and set to 2, the V2 version of this API will be used. Otherwise, V1.
            {% endapi-method-parameter %}

            {% api-method-parameter name="Accept-Language" type="string" required=true %}
            List of desired locales and fallbacks (e.g., fr-FR, fr, en-GB, en-WW, en-US). The Achievements service will work through the list until it finds matching localized strings. If none are found, it attempts to match the location defined in the user token, which comes from the user's IP address. If still no matching localized strings are found, it uses the default strings provided by the title developer/publisher.
            {% endapi-method-parameter %}
        {% endapi-method-headers %}
{% endapi-method-request %}
        {% api-method-response %}
        
        {% api-method-response-example httpCode=200 %}
        {% api-method-response-example-description %}
        
        {% endapi-method-response-example-description %}
        
        ```text
        {
    "achievements":
    [{
        "id":"3",
        "serviceConfigId":"b5dd9daf-0000-0000-0000-000000000000",
        "name":"Default NameString for Microsoft Achievements Sample Achievement 3",
        "titleAssociations":
        [{
                "name":"Microsoft Achievements Sample",
                "id":3051199919,
                "version":"abc"
        }],
        "progressState":"Achieved",
        "progression":
        {
                "achievementState":"Achieved",
                "requirements":null,
                "timeUnlocked":"2013-01-17T03:19:00.3087016Z",
        },
        "mediaAssets":
        [{
                "name":"Icon Name",
                "type":"Icon",
                "url":"http://www.xbox.com"
        }],
        "platform":"D",
        "isSecret":true,
        "description":"Default DescriptionString for Microsoft Achievements Sample Achievement 3",
        "lockedDescription":"Default UnachievedString for Microsoft Achievements Sample Achievement 3",
        "productId":"12345678-1234-1234-1234-123456789012",
        "achievementType":"Challenge",
        "participationType":"Individual",
        "timeWindow":
        {
                "startDate":"2013-02-01T00:00:00Z",
                "endDate":"2100-07-01T00:00:00Z"
        },
        "rewards":
        [{
                "name":null,
                "description":null,
                "value":"10",
                "type":"Gamerscore",
                "valueType":"Int"
        },
        {
                "name":"Default Name for InAppReward for Microsoft Achievements Sample Achievement 3",
                "description":"Default Description for InAppReward for Microsoft Achievements Sample Achievement 3",
                "value":"1",
                "type":"InApp",
                "valueType":"String"
        }],
        "estimatedTime":"06:12:14",
        "deeplink":"aWFtYWRlZXBsaW5r",
        "isRevoked":false
        }],
        "pagingInfo":
        {
                "continuationToken":null,
                "totalRecords":1
        }
}
         

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}