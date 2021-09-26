# POST /system/strings/validate

{% api-method method="post" host="https://client-strings.xboxlive.com" path="/system/strings/validate" %}
        {% api-method-description %}
        Accepts an array of strings for validation and returns an array of results of equal size. The domain for these URIs is 
        {% endapi-method-description %}
        {% api-method-summary %}
        Accepts an array of strings for validation and returns an array of results of equal size. The domain for these URIs is 
        {% endapi-method-summary %}
        {% api-method-spec %}
        {% api-method-request %}
        {% api-method-headers %}
        
            {% api-method-parameter name="Authorization" type="string" required=true %}
            Authentication Token. Example: XBL3.0 x=
            {% endapi-method-parameter %}

            {% api-method-parameter name="x-xbl-contract-version" type="string" required=true %}
            Integer API contract version. Must be 1 or 2 for this API.
            {% endapi-method-parameter %}
        {% endapi-method-headers %}
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
                    ```text
                    # Sample Request

                    {
    "stringstoVerify":
    [
        "Poppycock",
        "The quick brown fox jumped over the lazy dog.",
        "Hey, want to play games together?",
        "oh noes"
    ]
}
      

                    ```
                    