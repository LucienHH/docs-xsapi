# POST /users/xuid(xuid)/lists/PINS/{listname}

{% api-method method="post" host="https://eplists.xboxlive.com" path="/users/xuid(xuid)/lists/PINS/{listname}" %}
        {% api-method-description %}
        Inserts items into the list at the index based on the query string parameter 
        {% endapi-method-description %}
        {% api-method-summary %}
        Inserts items into the list at the index based on the query string parameter 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-path-parameters %}
        
            {% api-method-parameter name="xuid" type="string" required=true %}
            Xbox User ID (XUID).
            {% endapi-method-parameter %}

            {% api-method-parameter name="listtype" type="string" required=true %}
            Type of the list (how it is used and how it acts). Always "PINS" for these related methods.
            {% endapi-method-parameter %}

            {% api-method-parameter name="listname" type="string" required=true %}
            Name of the list (which list of a given listtype to act on). Always "XBLPins" for items in Pins.
            {% endapi-method-parameter %}
        {% endapi-method-path-parameters %}
        {% api-method-query-parameters %}
        
            {% api-method-parameter name="insertIndex" type="string" required=false %}
            Optional. Defines where to insert items. Supported values: 0, positive integers, and "end". Any index value greater than the number of list items will add the new item at the bottom of the list, and will not insert "blank" space in the list. Default value: 0.
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
                    ```text
                    # Sample Request

                    {"Items":
  [{
    "ContentType": "Movie",
    "ItemId": "3a5095a5-eac3-4215-944d-27bc051faa47",
    "ProviderId": "",
    "Provider": "",
    "ImageUrl": "http://www.bing.com/thumb/get?bid=Gw%2fsjCGSS4kAAQ584x800&bn=SANGAM&fbid=7wIR63+Clmj+0A&fbn=CC", 
    "AltImageUrl": null, 
    "Title": "The Dark Knight", 
    "SubTitle": null, 
    "Locale": "en-us",
    "DeviceType": "XboxOne"
  }]}
      

                    ```
                    