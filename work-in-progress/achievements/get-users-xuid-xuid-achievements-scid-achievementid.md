# GET /users/xuid({xuid})/achievements/{scid}/{achievementid}

{% api-method method="get" host="https://achievements.xboxlive.com" path="/users/xuid({xuid})/achievements/{scid}/{achievementid}" %}
        {% api-method-description %}
        Gets the details of the Achievement. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Gets the details of the Achievement. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="xuid" type="string" required=true %}
            Xbox User ID (XUID) of the user whose resource is being accessed. Must match the XUID of the authenticated user.
            {% endapi-method-parameter %}

            {% api-method-parameter name="scid" type="string" required=true %}
            Unique identifier of the service configuration whose achievement is being accessed.
            {% endapi-method-parameter %}

            {% api-method-parameter name="achievementid" type="string" required=true %}
            Unique (within the specified SCID) identifier of the achievement that is being accessed.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-headers %}
        
            {% api-method-parameter name="X-RequestedServiceVersion" type="string" required=true %}
            Build name/number of the Xbox LIVE service to which this request should be directed. The request will only be routed to that service after verifying the validity of the header, the claims in the auth token, and so on. Default value: 1.
            {% endapi-method-parameter %}

            {% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
            Defaults to V1.
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
    "achievement":
    {
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
    }
}
         

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}