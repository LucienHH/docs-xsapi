# POST /users/xuid(xuid)/lists/PINS/{listname}/index({index})?insertIndex={insertIndex}

{% api-method method="post" host="https://eplists.xboxlive.com" path="/users/xuid(xuid)/lists/PINS/{listname}/index({index})?insertIndex={insertIndex}" %}
        {% api-method-description %}
        Moves an item in a list to a different position within the list. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Moves an item in a list to a different position within the list. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="XUID" type="string" required=true %}
            XUID of the user.
            {% endapi-method-parameter %}

            {% api-method-parameter name="listname" type="string" required=true %}
            Name of the list to manipulate.
            {% endapi-method-parameter %}

            {% api-method-parameter name="index" type="string" required=true %}
            Specifies the current index of the item to be moved. If the index value is zero or a positive integer, this refers to the current index of the item, and the request body of the call should be empty. However, if the index value is "-1", the item to be moved must be specified by ItemId or Provider/ProviderID in the request body of the call.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-query-parameters %}
        
            {% api-method-parameter name="insertIndex" type="string" required=false %}
            Specifies the list location to insert the item. Allowed values are zero, positive integers, and "end". "end" places the item at the end of the current list. If the specified value is beyond the end of the list, the item is inserted at the end of the list.
            {% endapi-method-parameter %}
        {% endapi-method-query-parameters %}
        {% api-method-headers %}
        
            {% api-method-parameter name="Authorization" type="string" required=true %}
            Contains the STS token used to authenticate and authorize the request. Must be a token from XSTS service and include the XUID as one of the claims.
            {% endapi-method-parameter %}

            {% api-method-parameter name="X-XBL-Contract-Version" type="string" required=true %}
            Specifies which API version is being requested (positive integers). Pins supports version 2. If this header is missing or the value is not supported then the service will return a 400 – Bad request with "Unsupported or missing contract version header" in the status description.
            {% endapi-method-parameter %}

            {% api-method-parameter name="Content-Type" type="string" required=true %}
            Specifies whether the content of request/response bodies will be in json or xml. Supported values are "application/json" and "application/xml"
            {% endapi-method-parameter %}

            {% api-method-parameter name="If-Match" type="string" required=true %}
            This header must contain the current version number of a list when making modify requests. Modify requests use PUT, POST, or DELETE verbs. If the version in the "If-Match" header does not match the current version of the list, the request will be rejected with an HTTP 412 – precondition failed return code. (optional) Can also be used for GETs, if present and the passed in version matches the current list version then no list data and an HTTP 304 – Not Modified code will be returned.
            {% endapi-method-parameter %}
        {% endapi-method-headers %}
{% endapi-method-request %}
        {% api-method-response %}
        
        {% api-method-response-example httpCode=200 %}
        {% api-method-response-example-description %}
        
        {% endapi-method-response-example-description %}
        
        ```text
        { 
  "ListVersion":  1,
  "ListCount":  1,
  "MaxListSize": 200,
  "AllowDuplicates": "true",
  "AccessSetting":  "OwnerOnly"
}

      

        ```
        {% endapi-method-response-example %}
        {% endapi-method-response %}
        
        {% endapi-method-spec %}
        {% endapi-method %}