# undefined /inventory/{itemID}

{% api-method method="options" host="https://eds.xboxlive.com" path="/inventory/{itemID}" %}{% api-method-description %}
Provides the full set of details for a specific inventory item. The domain for these URIs is 
{% endapi-method-description %}
{% api-method-summary %}
/inventory/{itemID}
{% endapi-method-summary %}
{% api-method-spec %}
{% api-method-request %}

{% api-method-path-parameters %}
{% api-method-parameter name="itemID" type="string" required=true %}
the ID unique to each user for a singular inventory item
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}
{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{inventoryItem}
         
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
